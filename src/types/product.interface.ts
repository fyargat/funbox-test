export type ProductId = number;

export interface IProduct {
  id: ProductId;
  type: string;
  title: string;
  flavor: string;
  numberOfPortions: number;
  numberOfGifts: number;
  weight: number;
  description: string;
  isAvailable: boolean;
}
