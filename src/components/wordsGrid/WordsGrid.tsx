import React from "react";
import styles from "./WordsGrid.module.css";

const WordsGrid = React.memo(() => {
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  const wordsArr = data
    .filter((item: any) => item.searchedQuery.trim().length > 0)
    .map((item: any) => item.searchedQuery);

  const result = wordsArr.filter(
    (item: string, index: number) => wordsArr.indexOf(item) === index
  );

  return (
    <div className={styles.wordsGrid}>
      {result.map((word: string, index: number) => {
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
