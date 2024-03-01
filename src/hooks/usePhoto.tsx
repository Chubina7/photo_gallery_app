import React, { useEffect, useState } from "react";

const usePhoto = (query: string, pageNum: number) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setData((prevData) => [...prevData, ...data]);
    setIsLoading(false);
  }, [pageNum]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos/?per_page=20&page=${pageNum}&order_by=popular&query=${query}&client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNT`
    )
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      });
  }, [query, pageNum]);

  return { data, error, isLoading };
};

export default usePhoto;
