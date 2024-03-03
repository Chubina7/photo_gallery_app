import React from "react";
import styles from "./ImgModal.module.css";
import useSinglePhoto from "../../hooks/useSinglePhoto";

const ImgModal = ({ id }: { id: string | null }) => {
  const {
    downloadsNum,
    likesNum,
    viewsNum,
    fullImage,
    altText,
    height,
    width,
  } = useSinglePhoto(id);

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={
            width - height > 0 ? styles.horizontalImg : styles.verticalImg
          }
        >
          <img src={fullImage} alt={altText} className={styles.fullImage} />
        </div>
        <div className={styles.stats}>
          <p>
            გადმოწერები:{" "}
            {downloadsNum.toLocaleString("en-US", {
              minimumIntegerDigits: 3,
              useGrouping: true,
            })}
          </p>
          <p>
            მოწონებები:{" "}
            {likesNum.toLocaleString("en-US", {
              minimumIntegerDigits: 3,
              useGrouping: true,
            })}
          </p>
          <p>
            ნახვები:{" "}
            {viewsNum.toLocaleString("en-US", {
              minimumIntegerDigits: 3,
              useGrouping: true,
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImgModal;
