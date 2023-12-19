import React from 'react';
import { Steps } from '../Steps/Steps.js';
import { Board } from '../Board/Board.js'
import './App.css';

export const App = () => {
    const [counter, setCounter] = React.useState(0);
    const totalSteps = 40;
    const [isWinner, setIsWinner] = React.useState(false);
    const [isLooser, setIsLooser] = React.useState(false);
    const [isResetGame, setIsResetGame] = React.useState(false);

    const handleCardClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    const handleReset = (value) => {
        setIsResetGame(value);
        setCounter(0);
        setIsLooser(false)
        setIsWinner(false)
    }
    const handleGameWon = () => setIsWinner(true);
    React.useEffect(() => {
        if(counter === 40 && !isWinner) {
            setIsLooser(true)
        }
      }, [isLooser, isWinner, counter, isResetGame]);
    return (
        <section className='board'>
            <Steps 
                title='Сделано ходов'
                count={counter}/>
            {isLooser && 
            <div className='results-wrapper'>
                <div className="results">
                    <h2>Loooooooser!</h2>
                    <button className='button' onClick={() => handleReset(true)}>Play again</button>
                </div>
            </div>}
            {isWinner === true && <div className='results-wrapper'>
                <div className="results">
                    <h2>Congratulations!</h2>
                    <p>You won with ${counter} steps.</p>
                    <button className='button' onClick={() => handleReset(true)}>Play again</button>
                </div>
            </div>}
            <Board onCardClick={handleCardClick} onGameWon={handleGameWon} isReset={isResetGame} onReset={(value) => handleReset(value)}/>
            <Steps 
                title='Осталось ходов'
                count={totalSteps - counter}/>
        </section>
    )
}