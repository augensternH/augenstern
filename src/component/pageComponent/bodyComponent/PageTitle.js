import React from "react";
import clsx from "clsx";
import styles from "./pagetitle.module.css";

const PageTitle = (props) => {
  return (
    <div className={styles.wrap}>
      <h1 className={clsx(styles.h1T, styles.center)}>{props.title}</h1>
      <p className={clsx(styles.description, styles.center)}>
        {props.description}
      </p>
    </div>
  );
};

export default PageTitle;
