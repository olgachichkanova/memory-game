import React from 'react';
import { Card } from '../Card/Card.js'
import './Board.css';
import { randomCards } from '../../utils.js';

export const Board = ({onCardClick, onGameWon, isReset, onReset}) => {
  
  const [cards, setCards] = React.useState(randomCards);
  const [openCards, setOpenCards] = React.useState([]);

  const updateCards = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };
  
  const updateOpenCards = (id) => {
    const clickedCard = randomCards.find((card) => card.id === id);
    setOpenCards((prevOpenCards) =>
      prevOpenCards.some((card) => card.id === clickedCard.id)
        ? prevOpenCards
        : [...prevOpenCards, clickedCard]
    );
  };
  
  const closeUnmatchedCards = (lastClickedCardId) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        openCards.some((openCard) => openCard.id === card.id) &&
        card.id !== lastClickedCardId
          ? { ...card, isOpen: false }
          : card
      )
    );
    setOpenCards((prevOpenCards) => [prevOpenCards[prevOpenCards.length - 1]]);
  };
  
  const removeMatchedCards = () => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          openCards.some((openCard) => openCard.id === card.id)
            ? { ...card, img: null, isOpen: false }
            : card
        )
      );
    }, 500);
  };

  const allCardsMatched = () => {
    return cards.every((card) => card.img === null);
  };

  const resetGame = () => {
    setOpenCards([]);
    setCards(randomCards);
    onReset(false);
  };
  
  const handleCardClick = (id) => {
    onCardClick();
    updateCards(id);
    updateOpenCards(id);
  };
  
  React.useEffect(() => {
    if(isReset){
      resetGame();
    }
    if (openCards.length > 2) {
      const lastClickedCardId = openCards[openCards.length - 1].id;
      closeUnmatchedCards(lastClickedCardId);
    }
  
    if (openCards.length === 2 && openCards[0].name === openCards[1].name) {
      removeMatchedCards();
      if (allCardsMatched()) {
        onGameWon();
      }
    }
  }, [cards, openCards, isReset]);  
  return (
    <div className="cards-wrapper">
      <h1 className="header">Memory</h1>
      <div className="cards">
        {cards.map(card => {
          return (
            <div
              className={`card ${card.img && !card.isOpen ? 'closed-card' : ''}`}
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              {card.img && <Card image={card.img} isOpen={card.isOpen} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}