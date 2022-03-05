import React from "react";
import styles from "./Navigation.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        <Link className={styles.link} to="/">
          <div className={styles.navChil}>Home</div>
        </Link>
        <Link className={styles.link} to="website-template">
          <div className={styles.navChil}>Website Templates</div>
        </Link>
        <div className={styles.navChil}>Website Themes</div>
      </div>
      <Outlet />
    </nav>
  );
}
