import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <SearchBtn placeholder="ძებნა" /> {/* should pass querry to search */}
        <ImagesGridCont /> {/* should pass data attribute */}
      </div>
    </main>
  );
}

export default Home;
