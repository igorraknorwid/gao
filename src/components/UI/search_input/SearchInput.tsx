import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { isMobile } from "react-device-detect";
import styles from "./SearchInput.module.scss";
import Search from "./search/Search";

const StepOne: FC = () => {
  const { cities } = useContext(Context);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    cities.setHub(e.target.value);
    cities.setCitiesArrByTitle(e.target.value);
  };

  return (
    <div className={styles.input_box}>
      <div className={styles.img_box}>
        <img className='search_img' src='../svg/search.svg' alt='#' />
      </div>

      <input
        className={isMobile ? styles.mobile_input : styles.input}
        placeholder='Search your hub..'
        type='text'
        value={cities.hub}
        onChange={handleInput}
        onKeyUp={(e) => {
          cities.setIsSearch(true);
        }}
      />
      {cities.isSearch && <Search />}
    </div>
  );
};

export default observer(StepOne);
