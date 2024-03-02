import React, { Dispatch, SetStateAction } from "react";
import styles from "./ImgComp.module.css";
import { ImageComponentsTypes } from "../../types/interfaces";

const ImgComp = ({
  id,
  src,
  alt,
  modalToggler,
  idSetter,
}: ImageComponentsTypes) => {
  const action = (): void => {
    idSetter(id);
    modalToggler(true);
  };

  return <img src={src} alt={alt} className={styles.image} onClick={action} />;
};

export default ImgComp;
