import React, { FC } from "react";
import styles from "./StepsNavigator.module.scss";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
interface IStepsNavigator {
  next?: string;
  back?: string;
  isBack?: boolean;
  isNext?: boolean;
  isFinish?: boolean;
}

const StepsNavigator: FC<IStepsNavigator> = ({
  isBack = true,
  isNext = true,
  isFinish = false,
  back,
  next,
}) => {
  let navigate = useNavigate();

  return (
    <div className={styles.next_prev}>
      {isBack && (
        <button
          className={styles.back_btn}
          onClick={() => {
            navigate(`/steps/${back}`);
          }}
        >
          Back
        </button>
      )}
      {isNext && (
        <button
          className={styles.next_btn}
          onClick={() => {
            navigate(`/steps/${next}`);
          }}
        >
          Next
        </button>
      )}
      {isFinish && (
        <button
          className={styles.next_btn}
          onClick={() => {
            navigate(`/steps/finish`);
          }}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default observer(StepsNavigator);
