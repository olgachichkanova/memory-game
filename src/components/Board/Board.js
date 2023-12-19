import React from 'react';
import { Card } from '../Card/Card.js'
import './Board.css';
import twoImg from '../../images/2.svg';
import threeImg from '../../images/3.svg';
import nginxImg from '../../images/nginx.svg';
import reactImg from '../../images/react.svg';
import wsImg from '../../images/ws.svg';
import jsImg from '../../images/js.svg';
import webpackImg from '../../images/webpack.svg';
import tsImg from '../../images/ts.svg';


export const Board = ({onCardClick}) => {
  const placeholder = [
      {
          id: 'card1',
          img: twoImg,
          name: 'twoImg',
          isOpen: false
      },
      {
          id: 'card2',
          img: twoImg,
          name: 'twoImg',
          isOpen: false
      },
      {
          id: 'card3',
          img: threeImg,
          name: 'threeImg',
          isOpen: false
      },
      {
          id: 'card4',
          img: threeImg,
          name: 'threeImg',
          isOpen: false
      },
      {
          id: 'card5',
          img: nginxImg,
          name: 'nginxImg',
          isOpen: false
      },
      {
          id: 'card6',
          img: nginxImg,
          name: 'nginxImg',
          isOpen: false
      },
      {
          id: 'card7',
          img: reactImg,
          name: 'reactImg',
          isOpen: false
      },
      {
          id: 'card8',
          img: reactImg,
          name: 'reactImg',
          isOpen: false
      },
      {
          id: 'card9',
          img: wsImg,
          name: 'wsImg',
          isOpen: false
      },
      {
          id: 'card10',
          img: wsImg,
          name: 'wsImg',
          isOpen: false
      },
      {
          id: 'card11',
          img: jsImg,
          name: 'jsImg',
          isOpen: false
      },
      {
          id: 'card12',
          img: jsImg,
          name: 'jsImg',
          isOpen: false
      },
      {
          id: 'card13',
          img: webpackImg,
          name: 'webpackImg',
          isOpen: false
      },
      {
          id: 'card14',
          img: webpackImg,
          name: 'webpackImg',
          isOpen: false
      },
      {
          id: 'card15',
          img: tsImg,
          name: 'tsImg',
          isOpen: false
      },
      {
          id: 'card16',
          img: tsImg,
          name: 'tsImg',
          isOpen: false
      }
  ];
  const [cards, setCards] = React.useState(placeholder);
  const [openCards, setOpenCards] = React.useState([]);

  const handleCardClick = (id) => {
    onCardClick();
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );

    const clickedCard = placeholder.find((card) => card.id === id);
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