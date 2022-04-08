import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "./Finish.module.scss";
import { isMobile } from "react-device-detect";

export default () => {
  const { width, height } = useWindowSize();
  React.useEffect(() => {
    setTimeout(() => {
      document.location.href = "https://gao-iota.vercel.app";
    }, 5000);
  }, []);
  return (
    <>
      <Confetti width={width} height={height} />
      <div className={styles.content}>
        <div className={styles.finish}></div>
        <div className={isMobile ? styles.mobile_box : styles.box}>
          <h1>My Gratulations!</h1>
          <div>This is Finish!</div>
        </div>
      </div>
    </>
  );
};
