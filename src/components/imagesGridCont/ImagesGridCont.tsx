import React from "react";
import styles from "./ImagesGridCont.module.css";
import ImgComp from "../../components/imgComp/ImgComp";

const ImagesGridCont = () => {
  // The component should be able to show any data. we just need array of images
  return (
    <section className={styles.wrapper}>
      {/* Here goes logic to map the resource, which we got from props */}
      <ImgComp />
      <ImgComp />
      <ImgComp />
      <ImgComp />
      <ImgComp />
      <ImgComp />
      <ImgComp />
    </section>
  );
};

export default ImagesGridCont;
