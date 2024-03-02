import React from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnTypes {
  setNewPagesToShow: any;
}
const LoadMoreBtn = ({ setNewPagesToShow }: LoadMoreBtnTypes) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setNewPagesToShow((prev: number): number => (prev = prev + 1));
      }}
    >
      LOAD MORE
    </button>
  );
};

export default LoadMoreBtn;
