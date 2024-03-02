import React, { useState } from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import usePhoto from "../../hooks/usePhoto";
import LoadMoreBtn from "../../components/loadMoreBtn/LoadMoreBtn";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, setPageNum } = usePhoto(query);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn querySetterFunc={setQuery} numSetterFunc={setPageNum} />
        {data.length < 1 && !isLoading && (
          <p className={styles.message}>
            There's nothing to show. Start searching!
          </p>
        )}
        {data && <ImagesGridCont data={data} />}
        {data.length > 0 && (
          <LoadMoreBtn newPagesNumSetter={setPageNum} key={Math.random()} />
        )}
        {isLoading && <p className={styles.message}>Loading...</p>}
        {error && <p className={styles.message}>Something went wrong!</p>}
      </section>
    </main>
  );
};

export default Home;
