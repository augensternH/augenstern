import React from "react";
import { GrCloudlinux } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import styles from "./top.module.css";
import clsx from "clsx";

const top = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <div className={clsx(styles.row, styles.box, styles.boxlogo)}>
          <div className={styles.icon}>
            <GrCloudlinux />
          </div>
          <h1 className={styles.h1}>Administrator</h1>
        </div>
        <a href="#" className={clsx(styles.box, styles.row)}>
          <div className={styles.iconBack}>
            <GoHome />
          </div>
          <p className={styles.title}>Về trang web</p>
        </a>
        <div className={clsx(styles.box, styles.row)}>
          <p className={styles.title}>Liên hệ</p>
        </div>
        <div className={clsx(styles.box, styles.row)}>
          <p className={styles.title}>Đơn hàng</p>
        </div>
      </div>
    </div>
  );
};

export default top;
