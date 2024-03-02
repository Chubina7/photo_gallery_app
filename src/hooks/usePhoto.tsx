import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ImageAttributeTypes } from "../components/imagesGridCont/ImagesGridCont";

const usePhoto = (query: string) => {
  const [data, setData] = useState<ImageAttributeTypes[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum]: [number, Dispatch<SetStateAction<number>>] =
    useState(1);

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

  return { data, error, isLoading, pageNum, setPageNum };
};

export default usePhoto;
