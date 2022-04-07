import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./ObjectivesItem.module.scss";
import { IObjectives } from "../../../../store/objectives";
import { Context } from "../../../../index";
interface IObjectivesItem {
  ob: IObjectives;
}

const ObjectivesItem: FC<IObjectivesItem> = ({ ob }) => {
  const { objectives } = useContext(Context);
  const { _id, title, checked } = ob;
  return (
    <div className={styles.objective} key={_id}>
      <img src={`../images/objectives/${title}.png`} alt='#' />
      <div>{title}</div>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={checked}
        onChange={() => {
          objectives.onChecked(ob._id);
        }}
      />
    </div>
  );
};

export default observer(ObjectivesItem);
