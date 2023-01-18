import { FC } from "react";

import { Card } from "./Card/Card";
import { TextUnder } from "./TextUnder/TextUnder";

import { IProduct, ProductId } from "../../types/product.interface";

import styles from "./styles.module.scss";

interface IProps {
  product: IProduct;
  onSelect: (id: ProductId) => void;
  isSelected: boolean;
}

export const Product: FC<IProps> = ({ product, onSelect, isSelected }) => {
  const handleSelect = () => {
    if (!product.isAvailable) return;
    onSelect(product.id);
  };

  return (
    <li className={styles.container}>
      <Card product={product} onSelect={handleSelect} isSelected={isSelected} />
      <TextUnder
        onSelect={handleSelect}
        description={product.description}
        isAvailable={product.isAvailable}
        isSelected={isSelected}
        flavor={product.flavor}
      />
    </li>
  );
};
