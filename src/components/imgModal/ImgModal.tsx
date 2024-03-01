import React from "react";
import styles from "./ImgModal.module.css";

const ImgModal = ({ modalToggler, likes }: any) => {
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => modalToggler(false)}
      ></div>
      <div className={styles.wrapper}>
        <h1>test content</h1>
      </div>
    </>
  );
};

export default ImgModal;
