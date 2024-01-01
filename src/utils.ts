import firebaseImg from '../src/images/firebase.svg';
import reduxImg from '../src/images/redux.svg';
import nginxImg from '../src/images/nginx.svg';
import reactImg from '../src/images/react.svg';
import wsImg from '../src/images/ws.svg';
import jsImg from '../src/images/js.svg';
import webpackImg from '../src/images/webpack.svg';
import tsImg from '../src/images/ts.svg';

const images = [firebaseImg, reduxImg, reactImg, nginxImg, webpackImg, wsImg, jsImg, tsImg];
const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
preloadImages(images);

export const setOfCards: CardModel[] = images.flatMap((img) => {
  const firstCard: CardModel = {
    id: window.crypto.randomUUID(),
    isOpen: false,
    img,
  };

  const secondCard: CardModel = {
    id: window.crypto.randomUUID(),
    isOpen: false,
    img,
  };

  return [firstCard, secondCard];
});

export interface CardModel {
  id: string;
  img: string | null;
  isOpen: boolean;
}
export const shuffleCards = (items: CardModel[]): CardModel[] => {
  return [...items].sort(() => 0.5 - Math.random());
};
