import React, { useEffect, useState } from "react";

const useSinglePhoto = (imgId: string | null) => {
  const [downloadsNum, setDownloadsNum] = useState<number>(0);
  const [viewsNum, setViewsNum] = useState<number>(0);
  const [likesNum, setLikesNum] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [fullImage, setFullImage] = useState<string>();
  const [altText, setAltText] = useState<string>();

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${imgId}?client_id=Ur3JOXAAIn0nGWObufOD2QZ3yisLr0L0HjrU7z6dNTo`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFullImage(data.urls.full);
        setDownloadsNum(data.downloads);
        setLikesNum(data.likes);
        setViewsNum(data.views);
        setAltText(data.alt_description);
        setWidth(data.width);
        setHeight(data.height);
      });
  }, [imgId]);

  return {
    downloadsNum,
    viewsNum,
    likesNum,
    fullImage,
    altText,
    height,
    width,
  };
};

export default useSinglePhoto;
