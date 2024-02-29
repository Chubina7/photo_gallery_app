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

const WordsGrid = () => {
  return (
    <div className={styles.wordsGrid}>
      {/* Should map array of words, which comes from props */}
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