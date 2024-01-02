import christmasTree from '../src/images/color-images/christmastree.png';
import dessert from '../src/images/color-images/dessert.png';
import gingerbread from '../src/images/color-images/gingerbread.png';
import gifts from '../src/images/color-images/gifts.png';
import fireplace from '../src/images/color-images/fireplace.png';
import santa from '../src/images/color-images/santa.png';
import deer from '../src/images/color-images/christmas-reindeer.png';
import sock from '../src/images/color-images/sock.png';

const christmasImages = [dessert, christmasTree, sock, gifts, deer, gingerbread, fireplace, santa];

const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

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
