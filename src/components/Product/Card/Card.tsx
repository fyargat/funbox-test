import cn from "classnames";
import { FC, useEffect, useState } from "react";

import { IProduct } from "../../../types/product.interface";

import { formatWeight, pluralize } from "../../../utils";

import imageSrc from "../../../assets/images/cat.png";

import styles from "./styles.module.scss";

interface IProps {
  product: IProduct;
  onSelect: () => void;
  isSelected: boolean;
}

export const Card: FC<IProps> = ({ product, onSelect, isSelected }) => {
  const {
    type,
    title,
    flavor,
    numberOfPortions,
    numberOfGifts,
    weight,
    isAvailable,
  } = product;

  const [isShowHover, setIsShowHover] = useState(false);

  useEffect(() => {
    if (!isSelected) setIsShowHover(false);
  }, [isSelected]);

  const handleMouseEnter = () => {
    if (!isSelected) return;

    setIsShowHover(true);
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.containerSelected]: isSelected,
        [styles.containerSelectedHover]: isShowHover,
        [styles.containerDisabled]: !isAvailable,
      })}
      onMouseEnter={handleMouseEnter}
      onClick={onSelect}
    >
      <div className={styles.wrapper}>
        <p className={styles.head}>
          <span className={styles.headTextSelected}>Котэ не одобряет?</span>
          <span className={styles.headText}>{type}</span>
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{flavor}</p>

        <div className={styles.portions}>
          <p>
            <span>{numberOfPortions}</span>{" "}
            {pluralize(numberOfPortions, "порция", "порции", "порций")}
          </p>
          <p>
            {numberOfGifts > 1 ? numberOfGifts : null}{" "}
            {pluralize(numberOfGifts, "мышь", "мыши", "мышей")} в подарок
          </p>
          {numberOfGifts >= 5 ? <p>заказчик доволен</p> : null}
        </div>

        <div className={styles.image}>
          <img src={imageSrc} alt="product-image" />
        </div>

        <div className={styles.weight}>
          <div className={styles.weightContent}>
            <p className={styles.weightNum}>{formatWeight(weight)}</p>
            <p className={styles.weightUnit}>кг</p>
          </div>
        </div>
      </div>
    </div>
  );
};
