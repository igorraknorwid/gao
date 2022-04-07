import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Intro.module.scss";
import { isMobile } from "react-device-detect";

interface IIntro {
  title: string;
  body: string;
}

const StepOne: FC<IIntro> = ({ title, body }) => {
  return (
    <div className={styles.intro}>
      <h2 className={isMobile ? styles.mobile_title : styles.title}>{title}</h2>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default observer(StepOne);
