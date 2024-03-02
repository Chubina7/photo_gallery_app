import React, { useContext, useEffect } from "react";
import styles from "./History.module.css";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import WordsGrid from "../../components/wordsGrid/WordsGrid";

function History() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.wordsGridWrapper}>
          <h1>Select words to show images</h1>
          <WordsGrid />
        </div>
        <div className={styles.content}>
          {/* {wordsArr.length < 1 ? (
            <ImagesGridCont data={[]} pageNumSetter={() => {}} />
          ) : (
            <HistoryMessage />
          )} */}
        </div>
      </section>
    </main>
  );
}

export default History;
