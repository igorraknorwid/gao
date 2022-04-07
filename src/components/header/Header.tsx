import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Header.module.scss";
import { isMobile } from "react-device-detect";
import StepsIndecator from "../steps/StepsIndecator";
import Logo from "../UI/logo/Logo";
interface IHeader {
  isStepsIndecator?: boolean;
}

const Header: FC<IHeader> = ({ isStepsIndecator = true }) => {
  return (
    <div className={isMobile ? styles.mobile_header : styles.header}>
      <Logo />
      {isStepsIndecator && <StepsIndecator />}
    </div>
  );
};

export default observer(Header);
