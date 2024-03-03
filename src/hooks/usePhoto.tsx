import { useContext, useEffect, useState } from "react";
import { ImageAttributeTypes } from "../types/interfaces";
import { DataHistoryCtx } from "../context/dataHistoryProvider/DataHistoryProvider";

const usePhoto = () => {
  const { dataHistoryArr, setDataHistoryArr } = useContext(DataHistoryCtx);
  const [data, setData] = useState<ImageAttributeTypes[]>([]);
  const [query, setQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const fetchPhotos = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?per_page=20&page=${pageNum}&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
    )
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          setError(true);
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log("Request made");
        if (!data) return;
        const results: ImageAttributeTypes[] = data.results;
        if (pageNum === 1) {
          setData(results);
        } else {
          setData((prevData) => [...prevData, ...results]);
        }
        if (query.trim() !== "") {
          setDataHistoryArr((prev: any) => [
            ...prev,
            { searchedQuery: query, pageNums: pageNum, data: results },
          ]);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };
  //
  useEffect(() => {
    setIsLoading(true);
    fetchPhotos();
  }, [pageNum]);
  //
  useEffect(() => {
    setIsLoading(true);
    const searchedData = dataHistoryArr.find(
      (obj) => obj["searchedQuery"] === query
    );

    if (searchedData) {
      setData(searchedData.data);
      setIsLoading(false);
    } else {
      fetchPhotos();
    }
  }, [query]);

  return { data, error, isLoading, setPageNum, query, setQuery };
};

export default usePhoto;
