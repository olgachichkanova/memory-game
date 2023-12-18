import React from 'react';
import './Card.css';
import cardImg from '../../images/card.svg';

export const Card = ({image}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className="card" onClick={() => setIsOpen(!isOpen)}>
            {isOpen 
            ? <img src={image}/>
            : <img src={cardImg}/>}
        </div>
    )
}