import React from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";

interface ImagesDataType {
  data: Array<ImageAttributeTypes>;
}

interface ImageAttributeTypes {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  likes: number;
  alt_description: string;
}

const ImagesGridCont = ({ data }: ImagesDataType) => {
  return (
    <section className={styles.wrapper}>
      {data.map((image) => {
        return (
          <ImgComp
            src={image.urls.full}
            alt={image.alt_description}
            key={image.id}
          />
        );
      })}
    </section>
  );
};

export default ImagesGridCont;
