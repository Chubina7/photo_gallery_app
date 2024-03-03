import React from "react";
import styles from "./Message.module.css";
import { MessageProps } from "../../types/interfaces";
import { useLocation } from "react-router-dom";

const Message = ({ isLoading, error, data }: MessageProps) => {
  const location = useLocation();

  if (isLoading) {
    return <p className={styles.message}>Loading...</p>;
  }
  if (error) {
    return <p className={styles.message}>Something went wrong!</p>;
  }

  if (data.length < 1 && !isLoading) {
    return (
      <p className={styles.message}>
        There's nothing to show.{" "}
        {location.pathname === "/" ? "Start searching!" : "Choose one word"}
      </p>
    );
  }
  return null;
};

export default Message;
