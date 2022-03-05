import React from "react";
import styles from "./desproduct.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const DesProduct = (prop) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {}, [toggle]);
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1M}>Mô tả sản phẩm</h1>
      {toggle ? (
        <p className={styles.des__2} onr>
          {prop.des}
        </p>
      ) : (
        <p className={styles.des}>{prop.des}</p>
      )}
      {!toggle ? (
        <p className={styles.btn} onClick={() => setToggle(!toggle)}>
          Đọc thêm <AiOutlineDown />
        </p>
      ) : (
        <p className={styles.btn} onClick={() => setToggle(!toggle)}>
          Đọc thêm <AiOutlineUp />
        </p>
      )}
    </div>
  );
};

export default DesProduct;
