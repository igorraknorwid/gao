import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import logo from "../../../svg/Logo.svg";

const Logo: FC = () => {
  return <img src={logo} alt='#' />;
};

export default observer(Logo);
