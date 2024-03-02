import React, { useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";
import { SearchBtnProps } from "../../types/interfaces";

const SearchBtn = ({ querySetterFunc, numSetterFunc }: SearchBtnProps) => {
  const { wordsArr, setWordsArr } = useContext(WordsHistoryContext);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout((): void => {
      const inputValue = e.target.value.trim();

      if (inputValue === "") return;
      if (wordsArr.includes(inputValue)) {
        console.log("includes");
      } else {
        querySetterFunc(inputValue);
        numSetterFunc(1);

        const newWords = [...wordsArr, inputValue];
        setWordsArr(newWords);
        localStorage.setItem("words", JSON.stringify(newWords));
      }
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
