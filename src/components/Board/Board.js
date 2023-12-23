import React from 'react';
import { Card } from '../Card/Card.js'
import './Board.css';
import { setOfCards, shuffleCards } from '../../utils.js';

const MATCH_ANIMATION_DURATION = 500;
const OPEN_CARDS_DURATION = 1500;

export const Board = ({ onCardClick, setIsWinner, isWinner, isReset, onReset }) => {
  const [cards, setCards] = React.useState(shuffleCards(setOfCards));
  const [openCards, setOpenCards] = React.useState([]);

  const handleCheckCards = () => {
    if (cards.every((card) => card.img === null) && !isWinner) {
      setIsWinner(true);
    }
  };
  
  const handleCardClick = (id) => {
    const card  = getCard(id);
    if(card.img) {
      onCardClick();
    }
    updateCards(id);
    updateOpenCards(id);
  };

  const getCard = (id) => cards.find((card) => card.id === id);

  const updateCards = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  const updateOpenCards = (id) => {
    const clickedCard = getCard(id);
    setOpenCards((prevOpenCards) =>
      prevOpenCards.some((card) => card.id === clickedCard.id)
        ? prevOpenCards
        : [...prevOpenCards, clickedCard]
    );
  };
  let timeoutId;

  const closeUnmatchedCards = (lastClickedCardId) => {
    if (openCards.length === 2) {
      timeoutId = setTimeout(() => {
        closeCards(openCards);
        setOpenCards([]);
      }, OPEN_CARDS_DURATION);
    } else if (openCards.length === 3) {
      clearTimeout(timeoutId);
      closeCards(openCards.filter((card) => card.id !== lastClickedCardId));
      setOpenCards((prevOpenCards) => [prevOpenCards[prevOpenCards.length - 1]]);
    }
  };

  const closeCards = (idsArr) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        idsArr.some((item) => item.id === card.id)
          ? { ...card, isOpen: false }
          : card
      ))
  }
  
  const removeMatchedCards = () => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          openCards.some((openCard) => openCard.id === card.id)
            ? { ...card, img: null, isOpen: false }
            : card
        )
      );
    }, MATCH_ANIMATION_DURATION);
  };

  const resetGame = () => {
    setOpenCards([]);
    setCards(shuffleCards(setOfCards));
  };
  
  React.useEffect(() => {
    handleCheckCards();
  }, [cards]);
  
  React.useEffect(() => {
    if (isReset) {
      onReset(false);
      resetGame();
    }
  
    if (openCards.length > 1) {
      const lastClickedCardId = openCards[openCards.length - 1].id;
      closeUnmatchedCards(lastClickedCardId);
    }

    if (openCards.length === 2 && openCards[0].name === openCards[1].name) {
      removeMatchedCards();
      setOpenCards([]);
    }
    return () => clearTimeout(timeoutId);
  }, [openCards, isReset, isWinner]);  

  return (
    <div className="cards-wrapper">
      <h1 className="header">Memory</h1>
      <div className="cards">
        {cards.map((card) => (
          <div
            className={`card ${card.img && !card.isOpen ? 'closed-card' : ''}`}
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            {card.img ? <Card image={card.img} isOpen={card.isOpen} /> : <div className='no-card'></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
