import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";
import ImgModal from "../imgModal/ImgModal";
import Bakcdrop from "../backdrop/Bakcdrop";

interface ImagesDataType {
  data: Array<ImageAttributeTypes>;
}

export interface ImageAttributeTypes {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  likes: number;
  alt_description: string;
}

const ImagesGridCont = ({ data }: ImagesDataType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgId, setImgId] = useState<string | null>(null);

  useEffect(() => {
    const scrollHandler = () => {
      const lastItemIsShown = false;

      if (lastItemIsShown) {
        // pageNumSetter((prev) => (prev = prev + 1));
        console.log("last item is shown");
      }
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      {data.map((image, index) => {
        return (
          <ImgComp
            id={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            key={Math.random() * Math.random() + index + image.id}
            idSetter={setImgId}
            modalToggler={setModalIsOpen}
          />
        );
      })}
      {modalIsOpen && (
        <>
          <Bakcdrop action={() => setModalIsOpen(false)} />
          <ImgModal id={imgId} key={Math.random() * Math.random()} />
        </>
      )}
    </section>
  );
};

export default ImagesGridCont;
