import React from "react";
import styles from "./HistoryMessage.module.css";

const HistoryMessage = () => {
  return (
    <>
      <h1>:(</h1>
      <h1 className={styles.message}>
        You have not chosen a word to show the photo yet
      </h1>
    </>
  );
};

export default HistoryMessage;
