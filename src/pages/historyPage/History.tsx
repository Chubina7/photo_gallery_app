import React, { useContext } from "react";
import styles from "./History.module.css";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import WordsGrid from "../../components/wordsGrid/WordsGrid";
import HistoryMessage from "../../components/historyMessage/HistoryMessage";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

function History() {
  const { wordsArr, setWordsArr } = useContext(WordsHistoryContext);

  console.log(wordsArr.includes(""));
  console.log(wordsArr);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.wordsGridWrapper}>
          <h1>Select words to show images</h1>
          <WordsGrid wordsArr={wordsArr} key="List of words" />
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
