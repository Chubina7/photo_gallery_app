import React, { useContext, useEffect, useRef, useState } from "react";
import { ImageAttributeTypes } from "../types/interfaces";
import { DataHistoryCtx } from "../context/dataHistoryProvider/DataHistoryProvider";

const usePhoto = () => {
  const { dataHistoryArr, setDataHistoryArr } = useContext(DataHistoryCtx);
  const [data, setData] = useState<ImageAttributeTypes[]>([]);
  const [query, setQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("Console log from PAGENUM side effect");

    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos/?per_page=20&page=${pageNum}&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
    )
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        const results = data.results;
        setData((prevData) => [...prevData, ...results]);
        setIsLoading(false);
      });
  }, [pageNum]);

  useEffect(() => {
    console.log("Console log from QUERY changing side effect");

    setIsLoading(true);
    const searchedData = dataHistoryArr.find(
      (obj) => obj["searchedQuery"] === query
    );

    if (searchedData) {
      console.log("Called history context");
      setData(searchedData.data);
      setIsLoading(false);
    } else {
      fetch(
        `https://api.unsplash.com/search/photos/?per_page=20&page=1&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
      )
        .then((res) => {
          if (!res.ok) {
            setIsLoading(false);
            setError(true);
          }
          return res.json();
        })
        .then((data): any => {
          console.log("Called an API");

          const results = data.results;
          setData(results);
          setDataHistoryArr((prev) => [
            ...prev,
            { searchedQuery: query, pageNums: pageNum, data: results },
          ]);
          setIsLoading(false);
        });
    }
  }, [query]);

  return { data, error, isLoading, setPageNum, setQuery };
};

export default usePhoto;
