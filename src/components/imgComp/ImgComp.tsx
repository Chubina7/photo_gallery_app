import React from "react";
import styles from "./ImgComp.module.css";

interface ImageComponentType {
  src: string;
  alt: string;
}

const ImgComp = ({ src, alt }: ImageComponentType) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

export default ImgComp;
