import React from 'react';
import { Steps } from '../Steps/Steps.js';
import { Board } from '../Board/Board.js'
import './App.css';

export const App = () => {
    const [counter, setCounter] = React.useState(0);
    const totalSteps = 40;

    const handleCardClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    return (
        <section className='board'>
            <Steps 
                title='Сделано ходов'
                count={counter}/>
            <Board onCardClick={handleCardClick}/>
            <Steps 
                title='Осталось ходов'
                count={totalSteps - counter}/>
        </section>
    )
}