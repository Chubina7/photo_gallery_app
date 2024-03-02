import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

interface SearchBtnProps {
  querySetterFunc: Dispatch<SetStateAction<string>>;
  numSetterFunc: Dispatch<SetStateAction<number>>;
}

const SearchBtn = ({ querySetterFunc, numSetterFunc }: SearchBtnProps) => {
  const { wordsArr, setWordsArr } = useContext(WordsHistoryContext);
  const [timeoutId, setTimeoutId]: [
    NodeJS.Timeout | undefined,
    Dispatch<NodeJS.Timeout | undefined>
  ] = useState();

  const onChangeHandler = (e: any) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      const inputValue = e.target.value.trim(" ");
      // Validation
      if (inputValue === "") return;
      // Home
      querySetterFunc(inputValue);
      numSetterFunc(1);
      // History Words
      setWordsArr((prev): any => {
        if (!wordsArr.includes(inputValue)) {
          const newWords = [...prev, inputValue];
          localStorage.setItem("words", JSON.stringify(newWords));
          return newWords;
        } else {
          localStorage.setItem("words", JSON.stringify(prev));
          return prev;
        }
      });
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
