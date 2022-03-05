import React from "react";
import styles from "./Classify.module.css";
import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Classify(prop) {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{prop.title}</h1>
      <div className={styles.dash}></div>
      <Link to="website-template" className={styles.link}>
        <p className={styles.p}>{"Xem tất cả"}</p>
      </Link>
      <Outlet />
    </div>
  );
}
