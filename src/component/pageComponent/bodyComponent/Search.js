import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Search = (props) => {
  const search = (object) => {
    let listProductTmp = [];
    if (object.select == "Tất cả") {
      if (object.input != "null") {
        let arrTmp = object.input.split(" ");
        for (let i = 0; i < arrTmp.length; i++) {
          props.products.map((product) => {
            let tmpProName = product.name.toLowerCase();
            let tmpProMsp = product.msp.toLowerCase();

            if (
              tmpProMsp.includes(arrTmp[i].toLowerCase()) ||
              tmpProName.includes(arrTmp[i].toLowerCase())
            )
              listProductTmp.push(product);
          });
        }
      }
    } else if (object.select == "Xu hướng") {
      if (object.input != "null") {
        let arrTmp = object.input.split(" ");
        for (let i = 0; i < arrTmp.length; i++) {
          props.products.map((product) => {
            let tmpProName = product.name.toLowerCase();
            let tmpProMsp = product.msp.toLowerCase();

            if (
              tmpProMsp.includes(arrTmp[i].toLowerCase()) ||
              (tmpProName.includes(arrTmp[i].toLowerCase()) &&
                product.hightL == true)
            )
              listProductTmp.push(product);
          });
        }
      }
    } else if (object.select == "Xu hướng") {
      props.products.map((product) => {
        if (product.hightL == true) listProductTmp.push(product);
      });
    } else {
      listProductTmp = props.products;
    }

    return listProductTmp;
  };
  const [listPr, setL] = useState([]);
  useEffect(() => {
    setL(search(props.obj));
  }, []);

  return (
    <div className={styles.wrap}>
      {listPr.map((pro, index) => (
        <div key={index} className={styles.col}>
          <div className={styles.product}>
            <Link to={pro.path} className={styles.link}>
              <img src={pro.imageMain} className={styles.img} />
              <h3 className={styles.title}>{pro.name}</h3>
              <ReactStars
                size={16}
                count={5}
                color="rgb(116, 112, 112)"
                activeColor="rgb(217, 255, 0)"
                value={pro.rated.avrat}
                a11y={true}
                isHalf={true}
                emptyIcon={<BsStar />}
                halfIcon={<BsStarHalf />}
                filledIcon={<BsStarFill />}
                edit={false}
              />
            </Link>
            <p className={styles.price}>{pro.price} VND</p>
          </div>

          <a href="#" className={styles.provide}>
            {pro.write}
          </a>
          {/* <Outlet /> */}
        </div>
      ))}
    </div>
  );
};

export default Search;
