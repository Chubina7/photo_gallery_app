import React from "react";
import styles from "./Header.module.css";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Hero />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
