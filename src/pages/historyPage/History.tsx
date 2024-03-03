import React from "react";
import styles from "./History.module.css";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import WordsGrid from "../../components/wordsGrid/WordsGrid";
import usePhoto from "../../hooks/usePhoto";
import LoadMoreBtn from "../../components/loadMoreBtn/LoadMoreBtn";
import Message from "../../components/message/Message";

function History() {
  const { data, error, isLoading, setPageNum, query, setQuery } = usePhoto();

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.wordsGridWrapper}>
          <h1 className={styles.heading}>Words that you already searched</h1>
          <WordsGrid querySetterFunc={setQuery} query={query} />
        </div>
        <div className={styles.content}>
          <ImagesGridCont data={data} />
          {data.length > 0 && <LoadMoreBtn numSetter={setPageNum} />}
        </div>
        <Message data={data} error={error} isLoading={isLoading} />
      </section>
    </main>
  );
}

export default History;
