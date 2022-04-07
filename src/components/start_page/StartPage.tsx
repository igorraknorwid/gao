import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.scss";
import Logo from "../UI/logo/Logo";
import Title from "../UI/title/Title";
import Text from "../UI/text/Text";
import MyButton from "../UI/button/MyButton";
import { isMobile } from "react-device-detect";
import MyBox from "../UI/margins/MyBox";
const StartPage: FC = () => {
  return (
    <div className={isMobile ? styles.start_page : styles.page}>
      <img
        className={isMobile ? styles.mobile_img_bg : styles.img_bg}
        src='./images/22835.jpg'
        alt='#'
      />
      <div className={styles.start_page}>
        <div className={isMobile ? styles.mobile_content : styles.content}>
          <MyBox marginTop={20}>
            <Logo />
          </MyBox>

          <Title
            text='Create account'
            marginTop={isMobile ? 40 : 100}
            marginBottom={20}
          />
          <Text text='Please register your account!' />
          <MyButton
            text='Create Account'
            arrow={true}
            marginTop={40}
            link='/steps/1'
          />
          <MyBox marginTop={isMobile ? 40 : 0} marginBottom={40}>
            <div className={isMobile ? styles.mobile_accout : styles.accout}>
              <Text text='Already have an Account?' />
              <div className={styles.link}>
                <Link to='/in_progress'>Sign In</Link>
              </div>
            </div>
          </MyBox>
        </div>
      </div>
    </div>
  );
};

export default observer(StartPage);
