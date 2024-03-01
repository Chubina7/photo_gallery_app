import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./SearchBtn.module.css";

interface SearchBtnProps {
  placeholder: string;
  setterFunc: Dispatch<SetStateAction<string>>;
}

const SearchBtn = ({ placeholder, setterFunc }: SearchBtnProps) => {
  const [timeoutId, setTimeoutId]: [any, any] = useState();

  const onChangeHandler = (e: any) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setterFunc(e.target.value);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBtn;
