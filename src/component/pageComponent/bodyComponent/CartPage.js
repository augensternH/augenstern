import React from "react";
import styles from "./cartpage.module.css";
import Procar from "./Procar";
import clsx from "clsx";
const CartPage = () => {
  return (
    <>
      <div className={styles}>
        <div className={clsx(styles.wrapW)}>
          <div className={styles.wrap}>
            <div className={clsx(styles.row)}>
              <div className={styles.col1}>Sản phẩm</div>
              <div className={styles.col2}>Đơn giá</div>
              <div className={styles.col2}>Số lượng</div>
              <div className={styles.col2}>Tổng tiền</div>
              <div className={styles.col2}>Hoạt động</div>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
          <Procar />
        </div>
      </div>
    </>
  );
};

export default CartPage;
