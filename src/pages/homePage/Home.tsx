import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";
import usePhoto from "../../hooks/usePhoto";

function Home() {
  const [query, setQuery] = useState("");
  const [pageNums, setPageNums]: [number, Dispatch<SetStateAction<number>>] =
    useState(1);
  const { data, error, isLoading } = usePhoto(query, pageNums);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn placeholder="ძებნა" setterFunc={setQuery} />
        {/* {data && (
          <ImagesGridCont
            data={data}
            loader={isLoading}
            pageNumSetter={setPageNums}
          />
        )} */}
        <ImagesGridCont
          data={[
            {
              urls: {
                small: "string",
                full: "string",
              },
              likes: 123,
              alt_description: "string",
            },
          ]}
          pageNumSetter={() => {}}
          key={0}
          loader
        />
        {/* {isLoading && <p className={styles.message}>Loading...</p>} */}
        {/* {error && <p className={styles.message}>Something went wrong!</p>} */}
      </section>
    </main>
  );
}

export default Home;
