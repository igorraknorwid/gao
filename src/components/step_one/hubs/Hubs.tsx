import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Hubs.module.scss";
import { Context } from "../../../index";
import HubItem from "./hub_item/HubItem";
import { isMobile } from "react-device-detect";
const Hubs: FC = () => {
  const { cities } = useContext(Context);

  return (
    <div className={isMobile ? styles.mobile_cities : styles.cities}>
      {cities.hubArr.map((item) => {
        return (
          <HubItem key={item._id} item={item} minWidth={isMobile ? 260 : 360} />
        );
      })}
    </div>
  );
};

export default observer(Hubs);
