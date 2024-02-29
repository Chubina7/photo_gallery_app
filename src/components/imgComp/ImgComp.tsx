import React from "react";
import styles from "./ImgComp.module.css";

const ImgComp = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + "/dummy_img.jpg"}
      alt="test"
      className={styles.image}
    />
  );
};

export default ImgComp;
