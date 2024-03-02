import React from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import usePhoto from "../../hooks/usePhoto";
import LoadMoreBtn from "../../components/loadMoreBtn/LoadMoreBtn";
import Message from "../../components/message/Message";

const Home = () => {
  const { data, error, isLoading, setPageNum, setQuery } = usePhoto();

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn querySetterFunc={setQuery} numSetterFunc={setPageNum} />
        <ImagesGridCont data={data} />
        <Message data={data} error={error} isLoading={isLoading} />
        {data.length > 0 && <LoadMoreBtn newPagesNumSetter={setPageNum} />}
      </section>
    </main>
  );
};

export default Home;
