import twoImg from '../src/images/2.svg';
import threeImg from '../src/images/3.svg';
import nginxImg from '../src/images/nginx.svg';
import reactImg from '../src/images/react.svg';
import wsImg from '../src/images/ws.svg';
import jsImg from '../src/images/js.svg';
import webpackImg from '../src/images/webpack.svg';
import tsImg from '../src/images/ts.svg';

export const setOfCards: CardModel[] = [
    {
        id: 'card1',
        img: twoImg,
        name: 'twoImg',
        isOpen: false
    },
    {
        id: 'card2',
        img: twoImg,
        name: 'twoImg',
        isOpen: false
    },
    {
        id: 'card3',
        img: threeImg,
        name: 'threeImg',
        isOpen: false
    },
    {
        id: 'card4',
        img: threeImg,
        name: 'threeImg',
        isOpen: false
    },
    {
        id: 'card5',
        img: nginxImg,
        name: 'nginxImg',
        isOpen: false
    },
    {
        id: 'card6',
        img: nginxImg,
        name: 'nginxImg',
        isOpen: false
    },
    {
        id: 'card7',
        img: reactImg,
        name: 'reactImg',
        isOpen: false
    },
    {
        id: 'card8',
        img: reactImg,
        name: 'reactImg',
        isOpen: false
    },
    {
        id: 'card9',
        img: wsImg,
        name: 'wsImg',
        isOpen: false
    },
    {
        id: 'card10',
        img: wsImg,
        name: 'wsImg',
        isOpen: false
    },
    {
        id: 'card11',
        img: jsImg,
        name: 'jsImg',
        isOpen: false
    },
    {
        id: 'card12',
        img: jsImg,
        name: 'jsImg',
        isOpen: false
    },
    {
        id: 'card13',
        img: webpackImg,
        name: 'webpackImg',
        isOpen: false
    },
    {
        id: 'card14',
        img: webpackImg,
        name: 'webpackImg',
        isOpen: false
    },
    {
        id: 'card15',
        img: tsImg,
        name: 'tsImg',
        isOpen: false
    },
    {
        id: 'card16',
        img: tsImg,
        name: 'tsImg',
        isOpen: false
    }
];
export interface CardModel {
    id: string;
    img: string | null;
    name: string;
    isOpen: boolean;
}
export const shuffleCards = (items: CardModel[]): CardModel[] => {
    const shuffledCards: CardModel[]  = [...items];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
};