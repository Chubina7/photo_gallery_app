import React from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnTypes {
  newPagesNumSetter: any;
}
const LoadMoreBtn = ({ newPagesNumSetter }: LoadMoreBtnTypes) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        newPagesNumSetter((prev: number): number => (prev = prev + 1));
      }}
    >
      LOAD MORE
    </button>
  );
};

export default LoadMoreBtn;
