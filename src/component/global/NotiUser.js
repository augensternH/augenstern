import React from "react";
import styles from "./notiUser.module.css";
import { listNotification } from "../../data/data";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import clsx from "clsx";
import { BiLogOut } from "react-icons/bi";
const Notification = () => {
  const user = "Xoan Vũ";
  return (
    <>
      <div className={styles.hook}>
        <div className={styles.not}>
          <Link className={styles.link} to="/">
            <div className={clsx(styles.row, styles.content)}>
              <FaRegUserCircle />
              <h2>{user}</h2>
              <p className={styles.pT}>Chi tiết tài khoản</p>
            </div>
          </Link>
          <Link className={styles.link} to="/">
            <div className={clsx(styles.row, styles.content)}>
              <GrSettingsOption />
              <h2>Cài đặt tài khoản</h2>
            </div>
          </Link>
          <Link className={styles.link} to="/">
            <div className={clsx(styles.row, styles.content)}>
              <BiLogOut />
              <h2>Đăng xuất</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notification;
