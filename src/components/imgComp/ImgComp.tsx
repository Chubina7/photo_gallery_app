import React from "react";
import styles from "./ImgComp.module.css";

interface ImageComponentType {
  src: string;
  alt: string;
  modalToggler: any;
}

const ImgComp = ({ src, alt, modalToggler }: ImageComponentType) => {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.image}
      onClick={() => modalToggler(true)}
    />
  );
};

export default ImgComp;
