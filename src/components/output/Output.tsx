import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import styles from "./Output.module.scss";
import Subtitle from "../UI/subtitle/Subtitle";
import StepsNavigator from "../steps_navigator/StepsNavigator";
import Logo from "../UI/logo/Logo";
import MyBox from "../UI/margins/MyBox";
import linkin from "../../svg/social/in.svg";
import twitter from "../../svg/social/twitter.svg";

const Output: FC = () => {
  const { photo, links, cities, objectives, interests } = useContext(Context);

  return (
    <div className={styles.output}>
      <MyBox marginTop={40}>
        <Logo />
      </MyBox>
      <MyBox marginTop={40}>
        <Subtitle title='Your Profile' />
      </MyBox>
      <div className={styles.links}>
        {links.linkedIn && (
          <a href={links.linkedIn} target='_blank'>
            <img src={linkin} alt='#' />
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target='_blank'>
            <img src={twitter} alt='#' />
          </a>
        )}
      </div>

      <MyBox marginTop={20}>
        {photo.image ? (
          <img
            className={styles.photo}
            src={URL.createObjectURL(photo.image)}
            alt='#'
          />
        ) : null}
      </MyBox>
      <MyBox marginTop={40}>
        <Subtitle title='Your Hub' />
      </MyBox>
      <MyBox marginTop={10}>
        <div>{cities.hub}</div>
      </MyBox>
      <MyBox marginTop={40}>
        <Subtitle title='Your Objectives' />
      </MyBox>
      <MyBox marginTop={10}>
        {objectives.selectedOb &&
          objectives.selectedOb.map((ob) => <div key={ob}>{ob}</div>)}
      </MyBox>
      <MyBox marginTop={40}>
        <Subtitle title='Your Interests' />
      </MyBox>
      <MyBox marginTop={40}>
        {interests.custom &&
          interests.selectedCustom.map((ob) => (
            <div key={ob._id}>{ob.title}</div>
          ))}
        {interests.handleBusiness.selectedArr &&
          interests.handleBusiness.selectedArr.map((ob) => (
            <div key={ob._id}>{ob.title}</div>
          ))}
        {interests.handleInvestingAndFinance.selectedArr &&
          interests.handleInvestingAndFinance.selectedArr.map((ob) => (
            <div key={ob._id}>{ob.title}</div>
          ))}
        {interests.handleLifestyle.selectedArr &&
          interests.handleLifestyle.selectedArr.map((ob) => (
            <div key={ob._id}>{ob.title}</div>
          ))}
      </MyBox>
      <MyBox marginTop={80}>
        <StepsNavigator isNext={false} back='4' isFinish={true} />
      </MyBox>
    </div>
  );
};

export default observer(Output);
