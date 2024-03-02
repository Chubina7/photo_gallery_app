import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import usePhoto from "../../hooks/usePhoto";
import LoadMoreBtn from "../../components/loadMoreBtn/LoadMoreBtn";

function Home() {
  const [query, setQuery] = useState("");
  const [pageNums, setPageNums]: [number, Dispatch<SetStateAction<number>>] =
    useState(1);
  const { data, error, isLoading } = usePhoto(query, pageNums);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn setterFunc={setQuery} />
        {data.length < 1 && !isLoading && (
          <p className={styles.message}>
            There's nothing to show. Start searching!
          </p>
        )}
        {data && <ImagesGridCont data={data} />}
        {data.length > 0 && (
          <LoadMoreBtn setNewPagesToShow={setPageNums} key={Math.random()} />
        )}
        {isLoading && <p className={styles.message}>Loading...</p>}
        {error && <p className={styles.message}>Something went wrong!</p>}
      </section>
    </main>
  );
}

export default Home;
