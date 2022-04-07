import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Search.module.scss";
import { Context } from "../../../../index";

const Search: FC = () => {
  const { cities } = useContext(Context);
  const handleSearch = (value: string) => {
    cities.setHub(value);
  };
  return (
    <div className={styles.search}>
      <ul className={styles.list}>
        {cities.selectedHubs.map((hub) => (
          <li
            key={hub.title}
            className={styles.item}
            onClick={() => {
              handleSearch(hub.title);
            }}
          >
            {hub.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Search);
