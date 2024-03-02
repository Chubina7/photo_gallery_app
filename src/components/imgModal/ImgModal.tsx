import React from "react";
import styles from "./ImgModal.module.css";
import useSinglePhoto from "../../hooks/useSinglePhoto";

const ImgModal = ({ id }: { id: string | null }) => {
  const { downloadsNum, likesNum, viewsNum, fullImage, altText } =
    useSinglePhoto(id);

  return (
    <>
      <div className={styles.wrapper}>
        <img src={fullImage} alt={altText} className={styles.fullImage} />
        <p>ჩამწერები: {downloadsNum}</p>
        <p>მოწონებები: {likesNum}</p>
        <p>ნახვები: {viewsNum}</p>
      </div>
    </>
  );
};

export default ImgModal;
