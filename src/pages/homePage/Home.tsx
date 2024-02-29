import React from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn placeholder="ძებნა" /> {/* should pass querry to search */}
        <ImagesGridCont /> {/* should pass data attribute */}
      </section>
    </main>
  );
}

export default Home;
