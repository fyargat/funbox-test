import { FC } from "react";

import styles from "./styles.module.scss";

interface IProps {}

export const Spinner: FC<IProps> = (props) => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
