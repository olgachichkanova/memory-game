import React, { FC } from 'react';
import './Result.css';

interface Props {
  isWinner: boolean;
  counter: number;
  resetGame: () => void;
}

export const Result: FC<Props> = ({ isWinner, counter, resetGame }) => {
  return (
    <div className="results-wrapper">
      <div className="results">
        <h2>{isWinner ? 'Congratulations!' : 'Game over!'}</h2>
        <p>{isWinner ? `You won with ${counter} steps.` : "You're out of moves."}</p>
        <button className="button" onClick={() => resetGame()}>
          Play again
        </button>
      </div>
    </div>
  );
};
