import React from "react";
import styles from "./ImgComp.module.css";

interface ImageCompType {
  id: string;
  src: string;
  alt: string;
  idSetter: any;
  modalToggler: any;
}

const ImgComp = ({ id, src, alt, modalToggler, idSetter }: ImageCompType) => {
  const action = () => {
    idSetter(id);
    modalToggler(true);
  };

  return <img src={src} alt={alt} className={styles.image} onClick={action} />;
};

export default ImgComp;
