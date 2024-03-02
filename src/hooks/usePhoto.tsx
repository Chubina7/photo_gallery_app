import React, { useEffect, useState } from "react";
import { ImageAttributeTypes } from "../types/interfaces";

const usePhoto = () => {
  const [data, setData] = useState<ImageAttributeTypes[]>([]);
  const [query, setQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
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
      .then((data): any => {
        const results = data.results;
        if (pageNum === 1) {
          setData(results);
        } else {
          setData((prevData) => [...prevData, ...results]);
        }
        setIsLoading(false);
      });
  }, [query, pageNum]);

  return { data, error, isLoading, setPageNum, setQuery };
};

export default usePhoto;
