import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./InteresList.module.scss";
import InterestItem from "./interes_item/InterestItem";
interface IInterests {
  _id: string;
  title: string;
  checked: boolean;
}

interface IInteresList {
  arr: IInterests[];
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  name: string;
}

const InteresList: FC<IInteresList> = ({ arr, handleClick, name }) => {
  return (
    <div className={styles.list}>
      {arr.map((item) => (
        <InterestItem
          key={item._id}
          name={name}
          id={item._id}
          body={item.title}
          checked={item.checked}
          clickHandler={handleClick}
        />
      ))}
    </div>
  );
};

export default observer(InteresList);
