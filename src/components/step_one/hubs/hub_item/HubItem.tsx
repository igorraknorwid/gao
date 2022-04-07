import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./HubItem.module.scss";
import { Context } from "../../../../index";

interface IHubItem {
  minWidth?: number;
  item: {
    _id: string;
    title: string;
    checked: boolean;
  };
}

const HubItem: FC<IHubItem> = ({ item, minWidth = 360 }) => {
  const { cities } = useContext(Context);
  return (
    <div
      style={{ minWidth: `${minWidth}px` }}
      className={item.checked ? styles.city__active : styles.city}
    >
      <div className={styles.box}>
        <img src={`../images/cities/${item.title}.png`} alt={item.title} />
        <div className={styles.name}>{item.title}</div>
      </div>

      <div className={styles.container}>
        <div
          onClick={() => {
            cities.setCitiesArrByID(item._id, item.title);
          }}
          className={item.checked ? styles.checkmark_active : styles.checkmark}
        >
          {item.checked && <div className={styles.inside}></div>}
        </div>
      </div>
    </div>
  );
};

export default observer(HubItem);
