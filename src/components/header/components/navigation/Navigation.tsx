import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const routes = [
  { name: "HOME", href: "/" },
  { name: "HISTORY", href: "/history" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={
                location.pathname === item.href
                  ? `${styles.active} ${styles.navItem}`
                  : styles.navItem
              }
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
