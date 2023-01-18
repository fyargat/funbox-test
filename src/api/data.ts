import { IProduct } from "../types/product.interface";

export const products: IProduct[] = [
  {
    id: 1,
    type: "Сказочное заморское яство",
    title: "Нямушка",
    flavor: "с фуа-гра",
    numberOfPortions: 10,
    numberOfGifts: 1,
    weight: 0.5,
    description: "Печень утки разварная с артишоками.",
    isAvailable: true,
  },

  {
    id: 2,
    type: "Сказочное заморское яство",
    title: "Нямушка",
    flavor: "с рыбой",
    numberOfPortions: 40,
    numberOfGifts: 2,
    weight: 2,
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    isAvailable: true,
  },

  {
    id: 3,
    type: "Сказочное заморское яство",
    title: "Нямушка",
    flavor: "с курой",
    numberOfPortions: 100,
    numberOfGifts: 5,
    weight: 5,
    description: "Филе из цыплят с трюфелями в бульоне.",
    isAvailable: false,
  },
];
