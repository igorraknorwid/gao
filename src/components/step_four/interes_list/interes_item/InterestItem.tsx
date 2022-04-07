import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./InteresItem.module.scss";
export interface IInteresItem {
  id: string;
  body: string;
  clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  checked: boolean;
  name: string;
}
const InteresItem: FC<IInteresItem> = ({
  id,
  body,
  clickHandler,
  checked,
  name,
}) => {
  return (
    <button
      className={checked ? styles.item_active : styles.item}
      name={name}
      id={id}
      onClick={(e) => {
        clickHandler(e);
      }}
      value={id}
    >
      {body}
    </button>
  );
};

export default observer(InteresItem);
