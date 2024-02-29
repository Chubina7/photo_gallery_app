import React, { FC } from "react";
import styles from "./SearchBtn.module.css";

interface SearchBtnProps {
  placeholder: string;
}

const SearchBtn: FC<SearchBtnProps> = ({ placeholder }) => {
  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default SearchBtn;
