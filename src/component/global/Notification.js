import React from "react";
import styles from "./notification.module.css";
import { listNotification } from "../../data/data";
import { get } from "../../data/methodFetch";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
      <div className={styles.hook}>
        <div className={styles.not}>
          <p className={styles.noti}>Thông báo</p>
          {listNotification.map((value, index) => (
            <Link className={styles.wrapContent} key={index} to={value.path}>
              <p className={styles.content}>{value.content}</p>
            </Link>
          ))}
          <Link className={styles.wrapContent} to="/">
            <p className={styles.endNoti}>Xem tất cả</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notification;
