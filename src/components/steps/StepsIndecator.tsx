import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { useLocation } from "react-router-dom";
import styles from "./StepsIndecator.module.scss";
import { isMobile } from "react-device-detect";

const Steps: FC = () => {
  const { store } = useContext(Context);
  const { arrOfSteps } = store;
  let location = useLocation();
  const arr = location.pathname.split("/");
  const currentStep = Number(arr[arr.length - 1]);

  return (
    <div className={isMobile ? styles.mobile_steps : styles.steps}>
      {arrOfSteps.map((step, index) => {
        if (index < currentStep - 1) {
          if (index !== arrOfSteps.length - 1) {
            return (
              <div className={styles.box} key={step}>
                <div
                  className={
                    isMobile ? styles.mobile_step_active : styles.step_active
                  }
                >
                  <img
                    src={`../svg/steps_active/step_${index + 1}.svg`}
                    alt='#'
                  />
                </div>
                <hr
                  className={
                    isMobile ? styles.mobile_line_active : styles.line_active
                  }
                />
              </div>
            );
          }
          return (
            <div className={styles.box} key={step}>
              <div
                className={
                  isMobile ? styles.mobile_step_active : styles.step_active
                }
              >
                <img
                  src={`../svg/steps_active/step_${index + 1}.svg`}
                  alt='#'
                />
              </div>
            </div>
          );
        } else if (
          index === currentStep - 1 &&
          index !== arrOfSteps.length - 1
        ) {
          return (
            <div className={styles.box} key={step}>
              <div
                className={
                  isMobile ? styles.mobile_step_active : styles.step_active
                }
              >
                <img
                  src={`../svg/steps_active/step_${index + 1}.svg`}
                  alt='#'
                />
              </div>
              <hr className={isMobile ? styles.mobile_line : styles.line} />
            </div>
          );
        } else {
          if (index !== arrOfSteps.length - 1) {
            return (
              <div className={styles.box} key={step}>
                <div className={isMobile ? styles.mobile_step : styles.step}>
                  <img src={`../svg/steps/step_${index + 1}.svg`} alt='#' />
                </div>
                <hr className={isMobile ? styles.mobile_line : styles.line} />
              </div>
            );
          }
          return (
            <div className={styles.box} key={step}>
              <div className={isMobile ? styles.mobile_step : styles.step}>
                <img src={`../svg/steps/step_${index + 1}.svg`} alt='#' />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default observer(Steps);
