import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import styles from "./ObjectivesList.module.scss";
import ObjectivesItem from "./item/ObjectivesItem";
import { isMobile } from "react-device-detect";

const ObjectivesList: FC = () => {
  const { objectives } = useContext(Context);

  return (
    <div className={isMobile ? styles.mobile_objectives : styles.objectives}>
      {objectives.arr.map((ob) => {
        return <ObjectivesItem ob={ob} />;
      })}
    </div>
  );
};

export default observer(ObjectivesList);
