import React from "react";
import styles from "./Advertisement.module.css";
import image1 from "../../images/img-1.png";
import image2 from "../../images/img-2.png";
import image3 from "../../images/img-3.png";

export default function Advertisement() {
  return (
    <div className={styles.wrap}>
      <img className={styles.left} src={image1} />
      <div className={styles.right}>
        <img src={image2} className={styles.img2} />
        <img src={image3} className={styles.img3} />
      </div>
    </div>
  );
}
