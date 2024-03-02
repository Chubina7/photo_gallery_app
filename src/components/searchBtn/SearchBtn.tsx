import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

interface SearchBtnProps {
  querySetterFunc: Dispatch<SetStateAction<string>>;
  numSetterFunc: any;
}

const SearchBtn = ({ querySetterFunc, numSetterFunc }: SearchBtnProps) => {
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
      querySetterFunc(value);
      numSetterFunc(1);
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
