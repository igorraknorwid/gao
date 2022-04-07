import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./StepTwo.module.scss";
import Intro from "../intro/Intro";
import Subtitle from "../UI/subtitle/Subtitle";
import StepsNavigator from "../steps_navigator/StepsNavigator";
import MyBox from "../UI/margins/MyBox";
import ObjectivesList from "./objectives/ObjectivesList";

const StepTwo: FC = () => {
  return (
    <div className={styles.step_two}>
      <Intro
        title='What Are Your Objectives?'
        body='Select up to 3 objectives. These will be kept private from other users but help us find relevant matches.'
      />
      <MyBox marginTop={40}>
        <Subtitle title='Select Objectives' />
      </MyBox>
      <div className={styles.objectives}>
        <ObjectivesList />
      </div>
      <MyBox marginTop={80}>
        <StepsNavigator next='3' back='1' />
      </MyBox>
    </div>
  );
};

export default observer(StepTwo);
