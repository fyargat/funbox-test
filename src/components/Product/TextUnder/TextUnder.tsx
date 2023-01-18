import cn from "classnames";
import { FC } from "react";

import styles from "./styles.module.scss";

interface IProps {
  onSelect: () => void;
  description: string;
  isAvailable: boolean;
  isSelected: boolean;
  flavor: string;
}

export const TextUnder: FC<IProps> = ({
  description,
  isAvailable,
  isSelected,
  onSelect,
  flavor,
}) => {
  const renderContent = () => {
    if (isSelected) return description;
    if (!isAvailable) return `Печалька, ${flavor} закончился.`;

    return (
      <>
        Чего сидишь? Порадуй котэ,{" "}
        <span className={styles.link} onClick={onSelect}>
          купи.
        </span>
      </>
    );
  };

  return (
    <p
      className={cn(styles.container, {
        [styles.containerDisabled]: !isAvailable,
      })}
    >
      {renderContent()}
    </p>
  );
};
