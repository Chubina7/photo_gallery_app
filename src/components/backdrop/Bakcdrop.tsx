import React from "react";
import styles from "./Backdrop.module.css";

const Bakcdrop = ({ action }: any) => {
  return <div className={styles.backdrop} onClick={action} />;
};

export default Bakcdrop;
