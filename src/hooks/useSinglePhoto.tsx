import React, { useEffect, useState } from "react";

const useSinglePhoto = (imgId: string | null) => {
  const [downloadsNum, setDownloadsNum] = useState();
  const [fullImage, setFullImage] = useState();
  const [viewsNum, setViewsNum] = useState();
  const [likesNum, setLikesNum] = useState();
  const [altText, setAltText] = useState();

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
