import React, { Dispatch, SetStateAction } from "react";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({
  numSetter,
}: {
  numSetter: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        numSetter((prev: number): number => (prev = prev + 1));
      }}
    >
      LOAD MORE
    </button>
  );
};

export default LoadMoreBtn;
