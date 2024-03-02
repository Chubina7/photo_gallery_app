import React from "react";
import styles from "./Message.module.css";
import { ImageAttributeTypes } from "../imagesGridCont/ImagesGridCont";

interface MessageProps {
  data: ImageAttributeTypes[];
  isLoading: boolean;
  error: boolean;
}

const Message = ({ isLoading, error, data }: MessageProps) => {
  if (isLoading) {
    return <p className={styles.message}>Loading...</p>;
  }
  if (error) {
    return <p className={styles.message}>Something went wrong!</p>;
  }

  if (data.length < 1 && !isLoading) {
    return (
      <p className={styles.message}>
        There's nothing to show. Start searching!
      </p>
    );
  }
  return null;
};

export default Message;
