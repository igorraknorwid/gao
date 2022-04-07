import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Subtitle.module.scss";
interface ISubtitle {
  title: string;
  top?: number;
}
const Subtitle: FC<ISubtitle> = ({ title, top = 0 }) => {
  return (
    <h3 style={{ marginTop: `${top}px` }} className={styles.subtitle}>
      {title}
    </h3>
  );
};

export default observer(Subtitle);
