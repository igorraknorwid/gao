import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Progress.module.scss";
import Text from "../components/UI/text/Text";
import MyBox from "../components/UI/margins/MyBox";
import { useNavigate } from "react-router-dom";

const Progress: FC = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);
  return (
    <div className={styles.progress}>
      <MyBox marginTop={100}>
        <Text text='This page in progress' />
      </MyBox>
    </div>
  );
};

export default observer(Progress);
