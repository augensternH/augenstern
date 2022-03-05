import styles from "./Product.module.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Product(props) {
  const rat = props.rat;
  return (
    <>
      <div className={styles.col}>
        <div className={styles.product}>
          <img src={props.image} className={styles.img} />
          <h3 className={styles.title}>{props.title}</h3>
          <ReactStars
            size={16}
            count={5}
            color="rgb(116, 112, 112)"
            activeColor="rgb(217, 255, 0)"
            value={rat}
            a11y={true}
            isHalf={true}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            filledIcon={<BsStarFill />}
            edit={false}
          />
          <p className={styles.price}>{props.cost} VND</p>
        </div>

        <a href="#" className={styles.provide}>
          {props.writer}
        </a>
        <Outlet />
      </div>
    </>
  );
}
