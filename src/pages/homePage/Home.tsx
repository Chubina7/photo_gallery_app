import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";

// "https://api.unsplash.com/photos/?per_page=20&order_by=popular&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo"

const DUMMY_DATA = [
  {
    id: "test",
    urls: {
      full: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzMwNzN8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8MXx8MTcwOTIyMTgzNXww&ixlib=rb-4.0.3&q=85",
      small:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzMwNzN8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8MXx8MTcwOTIyMTgzNXww&ixlib=rb-4.0.3&q=80&w=400",
    },
    likes: 12,
    alt_description:
      "turned-off-laptop-computer-on-top-of-brown-wooden-table-VWcPlbHglYc",
  },
];

function Home() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // fetch(
    //   `https://api.unsplash.com/search/photos/?per_page=20&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setData(data.results))
    //   .catch((err) => setError(err));
    //
    // should add context to store querry words
    //
  }, [query]);

  console.log(data);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn placeholder="ძებნა" setterFunc={setQuery} />
        {DUMMY_DATA.length > 0 && !error ? (
          <ImagesGridCont data={DUMMY_DATA} />
        ) : (
          <p>Something went wrong</p>
        )}
        {/* {error && error} */}
      </section>
    </main>
  );
}

export default Home;
