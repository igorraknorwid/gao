import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Text.module.scss";

interface IText {
  text: string;
}

const Text: FC<IText> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};

export default observer(Text);
