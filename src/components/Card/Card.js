import React from 'react';
import './Card.css';
import cardImg from '../../images/card.svg';

export const Card = ({image, isOpen}) => {
    return (
        <React.Fragment>
            {isOpen 
            ? <img src={image}/>
            : <img src={cardImg}/>}
        </React.Fragment>
    )
}