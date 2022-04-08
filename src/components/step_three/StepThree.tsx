import React, { FC, useContext } from "react";
import styles from "./StepThree.module.scss";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Intro from "../intro/Intro";
import Subtitle from "../UI/subtitle/Subtitle";
import StepsNavigator from "../steps_navigator/StepsNavigator";
import MyBox from "../UI/margins/MyBox";
import MyImput from "../UI/my_input/MyImput";
import ImageLoader from "../UI/image_loader/ImageLoader";
import { isMobile } from "react-device-detect";
const StepThree: FC = () => {
  const { links } = useContext(Context);

  return (
    <div className={styles.step_two}>
      <Intro
        title='Fill Your Profile'
        body='This basic information will be shown to your matches every week. Tell us what you would like to show!'
      />

      <div className={isMobile ? styles.mobile_img_box : styles.img_box}>
        <ImageLoader />
        <div className={styles.links}>
          <Subtitle title='Other Profile' top={0} />

          <div className={styles.inputs}>
            <MyImput
              value={links.linkedInInput}
              handleInput={(e) => {
                links.linkedInHandler(e);
              }}
              src='../svg/social/in.svg'
              placeholder='LinkedIn URL'
              minWidth={720}
            />
            <div className={styles.error}>
              {links.linkError.ln ? links.linkError.ln : null}
            </div>
            <MyImput
              value={links.twitterInput}
              handleInput={(e) => {
                links.twitterHandler(e);
              }}
              src='../svg/social/twitter.svg'
              placeholder='Twitter URL'
              minWidth={720}
            />
            <div className={styles.error}>
              {links.linkError.tw ? links.linkError.tw : null}
            </div>
          </div>
        </div>
      </div>
      <MyBox marginTop={80}>
        <StepsNavigator next='4' back='2' />
      </MyBox>
    </div>
  );
};

export default observer(StepThree);
