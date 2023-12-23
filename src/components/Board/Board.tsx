import React, { FC } from 'react';
import { Card } from '../Card/Card'
import './Board.css';
import { CardModel, setOfCards, shuffleCards } from '../../utils';

const MATCH_ANIMATION_DURATION = 500;
const OPEN_CARDS_DURATION = 1500;

interface Props {
  isWinner: boolean;
  isReset: boolean;
  onCardClick: () => void;
  setIsWinner: (value: boolean) => void;
  onReset: (value: boolean) => void;
}

export const Board: FC<Props> = ({ onCardClick, setIsWinner, isWinner, isReset, onReset }) => {
  const [cards, setCards] = React.useState<CardModel[]>(shuffleCards(setOfCards));
  const [openCards, setOpenCards] = React.useState([]);

  const handleCheckCards = () => {
    if (cards.every((card) => card.img === null) && !isWinner) {
      setIsWinner(true);
    }
  };
  
  const handleCardClick = (id: string) => {
    const card: CardModel = getCard(id);
    if(card.img) {
      onCardClick();
    }
    updateCards(id);
    updateOpenCards(id);
  };

  const getCard = (id: string): CardModel => {
    return cards.find((card) => card.id === id) ?? {id: '', name: '', img: null, isOpen: false}
  };

  const updateCards = (id: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  const updateOpenCards = (id: string) => {
    const clickedCard: CardModel = getCard(id);
    setOpenCards((prevOpenCards: any ) =>
      prevOpenCards.some((card: CardModel) => card.id === clickedCard.id)
        ? prevOpenCards
        : [...prevOpenCards, clickedCard]
    );
  };
  let timeoutId: ReturnType<typeof setTimeout>;

  const closeUnmatchedCards = (lastClickedCardId: string) => {
    if (openCards.length === 2) {
      timeoutId = setTimeout(() => {
        closeCards(openCards);
        setOpenCards([]);
      }, OPEN_CARDS_DURATION);
    } else if (openCards.length === 3) {
      clearTimeout(timeoutId);
      closeCards(openCards.filter((card: CardModel) => card.id !== lastClickedCardId));
      setOpenCards((prevOpenCards) => [prevOpenCards[prevOpenCards.length - 1]]);
    }
  };

  const closeCards = (arr: CardModel[]) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        arr.some((item) => item.id === card.id)
          ? { ...card, isOpen: false }
          : card
      ))
  }
  
  const removeMatchedCards = () => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          openCards.some((openCard: CardModel) => openCard.id === card.id)
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
      const lastClickedCardId = ((openCards[openCards.length - 1] as CardModel).id);
      closeUnmatchedCards(lastClickedCardId);
    }

    if (openCards.length === 2 && (openCards[0] as CardModel).name === (openCards[1] as CardModel).name) {
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
