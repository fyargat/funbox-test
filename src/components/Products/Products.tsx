import { FC } from "react";

import { Product } from "../Product/Product";

import { IProduct, ProductId } from "../../types/product.interface";

import styles from "./styles.module.scss";

interface IProps {
  data: IProduct[];
  selectedIds: ProductId[];
  onProductSelect: (id: ProductId) => void;
}

export const Products: FC<IProps> = ({
  data,
  selectedIds,
  onProductSelect,
}) => {
  return (
    <ul className={styles.container}>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          onSelect={onProductSelect}
          isSelected={selectedIds.includes(product.id)}
        />
      ))}
    </ul>
  );
};
