import React from "react";
import styles from "./pagination.module.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination = () => {
  //soos page tam thoi
  const numP = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.numPage}>
        <FiArrowLeft />
      </div>
      {numP.map((num) => (
        <p key={num.number} className={styles.numPage}>
          {num.number}
        </p>
      ))}
      <div className={styles.numPage}>
        <FiArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
