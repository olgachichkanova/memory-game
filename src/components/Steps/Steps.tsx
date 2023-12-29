import React, { FC } from 'react';
import './Steps.css';

interface Props {
  title: string;
  count: number;
}

export const Steps: FC<Props> = ({ title, count }) => {
  return (
    <div className="steps">
      <h2>{title}</h2>
      <p>{count}</p>
    </div>
  );
};
