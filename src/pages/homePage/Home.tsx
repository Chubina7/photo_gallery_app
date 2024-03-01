import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SearchBtn from "../../components/searchBtn/SearchBtn";
import ImagesGridCont from "../../components/imagesGridCont/ImagesGridCont";

// const DUMMY_DATA = [
//   {
//     id: "test",
//     urls: {
//       full: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzMwNzN8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8MXx8MTcwOTIyMTgzNXww&ixlib=rb-4.0.3&q=85",
//       small:
//         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzMwNzN8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8MXx8MTcwOTIyMTgzNXww&ixlib=rb-4.0.3&q=80&w=400",
//     },
//     likes: 12,
//     alt_description:
//       "turned-off-laptop-computer-on-top-of-brown-wooden-table-VWcPlbHglYc",
//   },
// ];

function Home() {
  // State
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // Side effects
  useEffect(() => {
    // setIsLoading(true);
    // fetch(
    //   `https://api.unsplash.com/search/photos/?per_page=20&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
    // )
    //   .then((res) => {
    //     console.log(" - - - ლოგი ფეტჩ ფუნქციიდან - - - ");
    //     if (!res.ok) {
    //       setError(true);
    //       setIsLoading(false);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setData(data.results);
    //     setError(false);
    //     setIsLoading(false);
    //   });
  }, [query]);

  console.log("1 მონაცემები:", data);
  console.log("2 ერორი:", error);
  console.log("3 ლოდინი:", isLoading);
  console.log("4 საძიებო სიტყვა:", query);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <SearchBtn placeholder="ძებნა" setterFunc={setQuery} />
        {data && <ImagesGridCont data={data} loader={isLoading} />}
        {isLoading && <p className={styles.message}>Loading...</p>}
        {error && <p className={styles.message}>Something went wrong!</p>}
      </section>
    </main>
  );
}

export default Home;
