import React, { useEffect, useState } from "react";

const useSinglePhoto = (imgId: string | null) => {
  const [downloadsNum, setDownloadsNum] = useState<number>();
  const [viewsNum, setViewsNum] = useState<number>();
  const [likesNum, setLikesNum] = useState<number>();
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
      });
  }, [imgId]);

  return { downloadsNum, viewsNum, likesNum, fullImage, altText };
};

export default useSinglePhoto;
