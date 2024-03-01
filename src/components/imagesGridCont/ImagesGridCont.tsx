import React from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";

interface ImagesDataType {
  data: Array<ImageAttributeTypes>;
  loader?: boolean;
}

interface ImageAttributeTypes {
  id: string;
  urls: {
    small: string;
    full: string;
    raw: string;
    small_s3: string;
    thumb: string;
  };
  likes: number;
  alt_description: string;
}

const ImagesGridCont = ({ data, loader }: ImagesDataType) => {
  return (
    <>
      {data.length < 1 && !loader && (
        <p className={styles.message}>
          There's nothing to show. Start searching!
        </p>
      )}
      <section className={styles.wrapper}>
        {data.map((image) => {
          return (
            <ImgComp
              src={image.urls.small}
              alt={image.alt_description}
              key={image.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default ImagesGridCont;
