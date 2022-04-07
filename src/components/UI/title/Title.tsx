import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Title.module.scss";
import { isMobile } from "react-device-detect";
interface ITitle {
  marginTop?: number;
  marginBottom?: number;
  text: string;
}

const Title: FC<ITitle> = ({ text, marginTop = 0, marginBottom = 0 }) => {
  return (
    <div
      className={isMobile ? styles.mobile_title : styles.title}
      style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
    >
      {text}
    </div>
  );
};

export default observer(Title);
