import React, { FC } from 'react';
import './Card.css';
import cardImg from '../../images/card.svg';
import { CardModel } from '../../utils';

interface Props {
    image: string;
    isOpen: boolean;
}

export const Card: FC<Props> = ({image, isOpen}) => {
    return (
        <React.Fragment>
            {isOpen 
            ? <img src={image}/>
            : <img src={cardImg}/>}
        </React.Fragment>
    )
}