import React, { FC } from 'react';
import './Card.css';

interface Props {
  image: string;
  isOpen: boolean;
}

export const Card: FC<Props> = ({ image, isOpen }) => {
  return <React.Fragment>{isOpen ? <img src={image} /> : ''}</React.Fragment>;
};
