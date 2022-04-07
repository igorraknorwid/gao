import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import styles from "./ImageLoader.module.scss";

const ImageLoader: FC = () => {
  const { photo } = useContext(Context);
  return (
    <>
      {photo.image ? (
        <div className={styles.img_cont}>
          <button
            className={styles.remove_img}
            onClick={() => {
              photo.removeImage();
            }}
          >
            &#10006;
          </button>
          <img
            className={styles.photo}
            src={URL.createObjectURL(photo.image)}
            alt='#'
          />
        </div>
      ) : (
        <div>
          <input
            type='file'
            name='image_upload'
            accept='image/*'
            className={styles.inputfile}
            onChange={(e) => {
              photo.setImage(e);
            }}
          />
          <label htmlFor='file'>
            <div>Upload Your Photo</div>
          </label>
        </div>
      )}
    </>
  );
};

export default observer(ImageLoader);
