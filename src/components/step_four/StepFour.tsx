import React, { FC, ChangeEvent, useContext } from "react";
import styles from "./StepFour.module.scss";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Intro from "../intro/Intro";
import Subtitle from "../UI/subtitle/Subtitle";
import MyImput from "../UI/my_input/MyImput";
import MyBox from "../UI/margins/MyBox";
import InteresList from "./interes_list/InterestList";
import StepsNavigator from "../steps_navigator/StepsNavigator";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
const NAMES = {
  CUSTOM: "custom",
  BISNESS: "bisness",
  INVESTING: "investing",
  LIFESTYLE: "lifestyle",
};

const StepFour: FC = () => {
  const { interests } = useContext(Context);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    interests.setInputValue(e.target.value);
  };

  const itemClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    if (button.name === NAMES.CUSTOM) {
      interests.changeCustom(button.value);
    }
    if (button.name === NAMES.BISNESS) {
      interests.handleBusiness.changeArr(button.value);
    }
    if (button.name === NAMES.INVESTING) {
      interests.handleInvestingAndFinance.changeArr(button.value);
    }
    if (button.name === NAMES.LIFESTYLE) {
      interests.handleLifestyle.changeArr(button.value);
    }
  };

  return (
    <div className={styles.step_two}>
      <Intro
        title='What Are You Interested In?'
        body='Select from the list and add your own interests.'
      />

      <MyBox marginTop={40}>
        <div className={isMobile ? styles.mobile_box : styles.box}>
          <MyImput
            value={interests.inputValue}
            handleInput={handleInput}
            src='../svg/search.svg'
            placeholder='Add Your Interest'
          />
          <MyBox marginTop={isMobile ? 20 : 0}>
            {interests.inputValue.length > 1 && (
              <motion.button
                className={styles.btn}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => {
                  interests.setCustom();
                }}
              >
                ADD
              </motion.button>
            )}
          </MyBox>
        </div>
      </MyBox>
      {interests.custom.length > 0 && (
        <>
          <MyBox marginTop={40}>
            <Subtitle title='Custom' />
          </MyBox>
          <MyBox marginTop={20}>
            <InteresList
              name={NAMES.CUSTOM}
              arr={interests.custom}
              handleClick={itemClickHandler}
            />
          </MyBox>
        </>
      )}

      <MyBox marginTop={40}>
        <Subtitle title='Business' />
      </MyBox>
      <MyBox marginTop={20}>
        <InteresList
          name={NAMES.BISNESS}
          arr={interests.handleBusiness.arr}
          handleClick={itemClickHandler}
        />
      </MyBox>
      <MyBox marginTop={30}>
        <Subtitle title='Investing & Finance' />
      </MyBox>
      <MyBox marginTop={20}>
        <InteresList
          name={NAMES.INVESTING}
          arr={interests.handleInvestingAndFinance.arr}
          handleClick={itemClickHandler}
        />
      </MyBox>
      <MyBox marginTop={30}>
        <Subtitle title='Lifestyle' />
      </MyBox>
      <MyBox marginTop={20}>
        <InteresList
          name={NAMES.LIFESTYLE}
          arr={interests.handleLifestyle.arr}
          handleClick={itemClickHandler}
        />
      </MyBox>
      <MyBox marginTop={80}>
        <StepsNavigator next='5' back='3' />
      </MyBox>
    </div>
  );
};

export default observer(StepFour);
