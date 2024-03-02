import React, { useContext } from "react";
import styles from "./WordsGrid.module.css";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

const WordsGrid = React.memo(() => {
  const { wordsArr } = useContext(WordsHistoryContext);
  console.log("log", localStorage.getItem("words"));
  
  return (
    <div className={styles.wordsGrid}>
      {wordsArr.map((word, index) => {
        return (
          <p key={index} className={styles.word}>
            {word}
          </p>
        );
      })}
    </div>
  );
});

export default WordsGrid;
