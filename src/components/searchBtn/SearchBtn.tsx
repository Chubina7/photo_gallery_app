import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

interface SearchBtnProps {
  placeholder: string;
  setterFunc: Dispatch<SetStateAction<string>>;
}

const SearchBtn = ({ placeholder, setterFunc }: SearchBtnProps) => {
  const { setWordsArr } = useContext(WordsHistoryContext);
  const [timeoutId, setTimeoutId]: [any, any] = useState();

  const onChangeHandler = (e: any) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      const value = e.target.value.trim(" ");
      if (value === "") return;
      setterFunc(value);
      setWordsArr((prev) => (prev = [...prev, value]));
      console.log("<< Value Setted, check HISTORY page >>");
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
