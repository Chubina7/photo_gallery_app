import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";
import ImgModal from "../imgModal/ImgModal";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

interface ImagesDataType {
  data: Array<ImageAttributeTypes>;
  loader?: boolean;
  pageNumSetter: Dispatch<SetStateAction<number>>;
}

interface ImageAttributeTypes {
  urls: {
    small: string;
    full: string;
  };
  likes: number;
  alt_description: string;
}

const ImagesGridCont = ({ data, loader, pageNumSetter }: ImagesDataType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <>
      {data.length < 1 && !loader && (
        <p className={styles.message}>
          There's nothing to show. Start searching!
        </p>
      )}
      <section className={styles.wrapper}>
        {data.map((image, index) => {
          return (
            <>
              <ImgComp
                src={image.urls.small}
                alt={image.alt_description}
                key={Math.random() * Math.random() + index}
                modalToggler={setModalIsOpen}
              />
              {modalIsOpen && (
                <ImgModal modalToggler={setModalIsOpen} likes={image.likes} />
              )}
            </>
          );
        })}
      </section>
      {data.length > 0 && <LoadMoreBtn />}
    </>
  );
};

export default ImagesGridCont;
