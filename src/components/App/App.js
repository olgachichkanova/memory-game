import React from 'react';
import { Steps } from '../Steps/Steps.js';
import { Board } from '../Board/Board.js'

export const App = () => {
    return (
        <section className='board'>
            <Steps 
                title='Сделано ходов'
                count='28'/>
            <Board />
            <Steps 
                title='Осталось ходов'
                count='12'/>
        </section>
    )
}