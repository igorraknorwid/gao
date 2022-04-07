import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import styles from "./StepOne.module.scss";
import Intro from "../intro/Intro";
import Subtitle from "../UI/subtitle/Subtitle";
import StepsNavigator from "../steps_navigator/StepsNavigator";
import MyBox from "../UI/margins/MyBox";
import SearchInput from "../UI/search_input/SearchInput";
import Hubs from "./hubs/Hubs";

const StepOne: FC = () => {
  const { cities } = useContext(Context);

  return (
    <div
      className={styles.step_one}
      onClick={(e) => {
        cities.setIsSearch(false);
      }}
    >
      <Intro
        title='Which Hub Are You In?'
        body='We are active in major cities and we schedule meetings based on time zones. Let us know your home base.'
      />
      <SearchInput />
      <MyBox marginTop={40}>
        <Subtitle title='Popular Hub' />
      </MyBox>
      <Hubs />
      <MyBox marginTop={80}>
        <StepsNavigator next='2' isBack={false} />
      </MyBox>
    </div>
  );
};

export default observer(StepOne);
