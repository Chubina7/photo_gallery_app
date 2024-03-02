import React from "react";
import styles from "./WordsGrid.module.css";

interface WordsGridTypes {
  wordsArr: Array<string>;
}

const WordsGrid = React.memo(({ wordsArr }: WordsGridTypes) => {
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
