import React from 'react';
import { Card } from '../Card/Card.js'

export const Board = () => {
    const placeholder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <div className="cards-wrapper">
            <h1 className="header">Memory</h1>
            <div className="cards">
                {placeholder.map(i => <Card key={i} />)}
            </div>
        </div>
    )
}