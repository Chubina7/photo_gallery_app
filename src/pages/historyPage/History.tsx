import React from "react";
import styles from "./History.module.css";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import WordsGrid from "../../components/wordsGrid/WordsGrid";
import HistoryMessage from "../../components/historyMessage/HistoryMessage";

function History() {
  const value = false;

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.wordsGridWrapper}>
          <h1>Select words to show images</h1>
          <WordsGrid /> {/* should pass the active words */}
        </div>
        <div className={styles.content}>
          {/* If any word is selected, show the result; if not, show the message */}
          {value ? <ImagesGridCont /> : <HistoryMessage />}
        </div>
      </section>
    </main>
  );
}

export default History;
