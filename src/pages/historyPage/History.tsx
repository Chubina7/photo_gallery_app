import React, { useContext } from "react";
import styles from "./History.module.css";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import WordsGrid from "../../components/wordsGrid/WordsGrid";
import HistoryMessage from "../../components/historyMessage/HistoryMessage";
import { WordsHistoryContext } from "../../context/wordsHistoryProvider/WordsHistoryProvider";

function History() {
  const { wordsArr, setWordsArr } = useContext(WordsHistoryContext);
  const value = false;

  console.log(wordsArr);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.wordsGridWrapper}>
          <h1>Select words to show images</h1>
          <WordsGrid /> {/* should pass the active words */}
        </div>
        <div className={styles.content}>
          {/* {value ? <ImagesGridCont data={[]} /> : <HistoryMessage />} */}
        </div>
      </section>
    </main>
  );
}

export default History;
