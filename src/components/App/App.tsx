import React from 'react';
import { Steps } from '../Steps/Steps';
import { Board } from '../Board/Board';
import { Result } from '../Result/Result'
import './App.css';

export const App = () => {
    const [counter, setCounter] = React.useState(0);
    const totalSteps = 40;
    const [isWinner, setIsWinner] = React.useState(false);
    const [isGameFinished, setIsGameFinished] = React.useState(false);
    const [isResetGame, setIsResetGame] = React.useState(false);

    const handleCardClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    const handleResult = (value: boolean) => {
        setIsWinner(value)
    }
    const handleReset = (value: boolean) => {
        setIsResetGame(value);
        setCounter(0);
        setIsGameFinished(false);
        setIsWinner(false);
    }
    
    React.useEffect(() => {
        if(counter === 40 || isWinner) {
            setIsGameFinished(true)
        }
    }, [counter, isGameFinished, isWinner])
    return (
        <section className='board'>
            <Steps 
                title='Steps made'
                count={counter}/>
            {(isGameFinished) && <Result isWinner={isWinner} counter={counter} resetGame={() => handleReset(true)} />}
            <Board onCardClick={handleCardClick} isWinner={isWinner} setIsWinner={(value) => handleResult(value)} isReset={isResetGame} onReset={(value) => handleReset(value)}/>
            <Steps 
                title='Available steps'
                count={totalSteps - counter}/>
        </section>
    )
}