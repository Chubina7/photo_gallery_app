import React from "react";
import styles from "./WordsGrid.module.css";

const DUMMY_WORDS = [
  "meeting",
  "developers",
  "transport",
  "home",
  "car",
  "office",
];

interface WordsGridTypes {
  test?: boolean;
}

const WordsGrid = ({ test }: WordsGridTypes) => {
  return (
    <div className={styles.wordsGrid}>
      {DUMMY_WORDS.map((word, index) => {
        return (
          <p key={index} className={styles.word}>
            {word}
          </p>
        );
      })}
    </div>
  );
};

export default WordsGrid;
