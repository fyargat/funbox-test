import { products } from "./data";

export const fetchProducts = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(products);
    }, 500);
  });
};
