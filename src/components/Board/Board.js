import React from 'react';
import { Card } from '../Card/Card.js'
import './Board.css';
import { randomCards } from '../../utils.js';

export const Board = ({onCardClick}) => {
  
  const [cards, setCards] = React.useState(randomCards);
  const [openCards, setOpenCards] = React.useState([]);

  const handleCardClick = (id) => {
    onCardClick();
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );

    const clickedCard = randomCards.find((card) => card.id === id);
    setOpenCards((prevOpenCards) =>
      prevOpenCards.some((card) => card.id === clickedCard.id)
        ? prevOpenCards
        : [...prevOpenCards, clickedCard]
    );
  };

  React.useEffect(() => {
    if (openCards.length > 2) {
      const lastClickedCardId = openCards[openCards.length - 1].id;
      setCards((prevCards) =>
        prevCards.map((card) =>
          openCards.some((openCard) => openCard.id === card.id) && card.id !== lastClickedCardId
            ? { ...card, isOpen: false }
            : card
        )
      );
    
      setOpenCards((prevOpenCards) => [prevOpenCards[prevOpenCards.length - 1]]);
    }

    if (openCards.length === 2 && openCards[0].name === openCards[1].name) {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            openCards.some((openCard) => openCard.id === card.id)
              ? { ...card, img: null, isOpen: false }
              : card
          )
        );
      }, 500);
    }
  }, [cards, openCards]);

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