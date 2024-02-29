import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <img
            src={process.env.PUBLIC_URL + "/images" + "/sweeft_logo.svg"}
            alt="logo"
            className={styles.sweeftLogo}
          />
        </div>
        <i>
          <strong>©</strong> The project is made for Sweeft career acceleration
          programme
        </i>
        <div className={styles.rightContainer}>
          <p>Developer</p>
          <div className={styles.socials}>
            <img
              src={process.env.PUBLIC_URL + "/images" + "/fb.png"}
              alt="facebook logo"
              onClick={() =>
                window.open("https://www.facebook.com/ChHubo.31", "_blank")
              }
            />
            <img
              src={process.env.PUBLIC_URL + "/images" + "/git_hub.png"}
              alt="git hub logo"
              onClick={() =>
                window.open("https://github.com/Chubina7", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
