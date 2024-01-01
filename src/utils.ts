import firebaseImg from '../src/images/coding-theme/firebase.svg';
import reduxImg from '../src/images/coding-theme/redux.svg';
import nginxImg from '../src/images/coding-theme/nginx.svg';
import reactImg from '../src/images/coding-theme/react.svg';
import wsImg from '../src/images/coding-theme/ws.svg';
import jsImg from '../src/images/coding-theme/js.svg';
import webpackImg from '../src/images/coding-theme/webpack.svg';
import tsImg from '../src/images/coding-theme/ts.svg';

import candyCane from '../src/images/christmas-theme/candy-cane.svg';
import ornaments from '../src/images/christmas-theme/christmas-baubles.svg';
import sock from '../src/images/christmas-theme/christmas-socks.svg';
import christmasTree from '../src/images/christmas-theme/christmas-tree.svg';
import iceSkate from '../src/images/christmas-theme/ice-skate.svg';
import mistletoe from '../src/images/christmas-theme/mistletoe.svg';
import snowflake from '../src/images/christmas-theme/snowflake.svg';
import snowman from '../src/images/christmas-theme/snowman.svg';

const images = [firebaseImg, reduxImg, reactImg, nginxImg, webpackImg, wsImg, jsImg, tsImg];
const christmasImages = [candyCane, ornaments, sock, christmasTree, iceSkate, mistletoe, snowflake, snowman];

const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
preloadImages(images);
preloadImages(christmasImages);

export const setOfCards: CardModel[] = christmasImages.flatMap((img) => {
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
