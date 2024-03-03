import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Link to={"/"}>
      <div className={styles.div}>
        <i>Powered by</i>
        <img
          src={`${process.env.PUBLIC_URL}/images/unsplash_logo.jpg`}
          alt="Photo"
          className={styles.unsplash_logo}
        />
      </div>
    </Link>
  );
};

export default Hero;
