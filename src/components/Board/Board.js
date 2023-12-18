import React from 'react';
import { Card } from '../Card/Card.js'
import './Board.css';
import twoImg from '../../images/2.svg';
import threeImg from '../../images/3.svg';
import nginxImg from '../../images/nginx.svg';
import reactImg from '../../images/react.svg';
import wsImg from '../../images/ws.svg';
import jsImg from '../../images/js.svg';
import webpackImg from '../../images/webpack.svg';
import tsImg from '../../images/ts.svg';


export const Board = () => {
    const placeholder = [twoImg, twoImg, threeImg, threeImg, nginxImg, nginxImg, reactImg, reactImg, wsImg, wsImg, jsImg, jsImg, webpackImg, webpackImg, tsImg, tsImg];
    return (
        <div className="cards-wrapper">
            <h1 className="header">Memory</h1>
            <div className="cards">
                {placeholder.map(i => <Card image={i} />)}
            </div>
        </div>
    )
}