import React, { ReactNode, useEffect, useState } from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";
import ImgModal from "../imgModal/ImgModal";
import Bakcdrop from "../backdrop/Bakcdrop";
import { ImageAttributeTypes } from "../../types/interfaces";

const ImagesGridCont = ({ data }: { data: ImageAttributeTypes[] }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imgId, setImgId] = useState<string | null>(null);

  return (
    <section className={styles.wrapper}>
      {data.map((image: ImageAttributeTypes, index: number): ReactNode => {
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
          <Bakcdrop action={(): void => setModalIsOpen(false)} />
          <ImgModal id={imgId} key={Math.random() * Math.random()} />
        </>
      )}
    </section>
  );
};

export default ImagesGridCont;
