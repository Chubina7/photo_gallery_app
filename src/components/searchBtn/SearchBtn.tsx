import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

interface SearchBtnProps {
  setterFunc: Dispatch<SetStateAction<string>>;
}

const SearchBtn = ({ setterFunc }: SearchBtnProps) => {
  const { setWordsArr } = useContext(WordsHistoryContext);
  const [timeoutId, setTimeoutId]: [
    NodeJS.Timeout | undefined,
    Dispatch<NodeJS.Timeout | undefined>
  ] = useState();

  const onChangeHandler = (e: any) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      const value = e.target.value.trim(" ");
      if (value === "") return;
      setterFunc(value);
      setWordsArr((prev) => (prev = [...prev, value]));
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder="ძებნა"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBtn;
