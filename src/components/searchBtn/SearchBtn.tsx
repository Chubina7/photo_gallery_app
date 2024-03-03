import React, { useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";
import { SearchBtnProps } from "../../types/interfaces";
import { DataHistoryCtx } from "../../context/dataHistoryProvider/DataHistoryProvider";

const SearchBtn = ({ querySetterFunc, numSetterFunc }: SearchBtnProps) => {
  const { dataHistoryArr, setDataHistoryArr } = useContext(DataHistoryCtx);
  const { wordsArr, setWordsArr } = useContext(WordsHistoryContext);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout((): void => {
      const inputValue = e.target.value.trim();

      if (inputValue === "") return;
      // if (wordsArr.includes(inputValue)) {

      // } else {
      const newWords = [...wordsArr, inputValue];
      setWordsArr(newWords);
      querySetterFunc(inputValue);
      numSetterFunc(1);
      localStorage.setItem("words", JSON.stringify(newWords));
      // }
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
