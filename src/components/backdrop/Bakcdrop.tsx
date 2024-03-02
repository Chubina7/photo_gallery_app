import React, { MouseEventHandler } from "react";
import styles from "./Backdrop.module.css";

const Bakcdrop = ({
  action,
}: {
  action: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return <div className={styles.backdrop} onClick={action} />;
};

export default Bakcdrop;
