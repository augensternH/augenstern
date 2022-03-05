import React from "react";
import styles from "./cooli.module.css";
import { useState, useEffect } from "react";
import Product from "../Product";
import Header2 from "../../global/Header2";
import Pagination from "../../pageComponent/bodyComponent/Pagination";
import { get, put } from "../../../data/methodFetch";
import { ImMenu, ImCross } from "react-icons/im";
import clsx from "clsx";
import { listCooli } from "../../../data/data";
import { Link } from "react-router-dom";

import { linkSync } from "fs";
const CooliP = (props) => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get("https://mocki.io/v1/ac1ea918-c1cd-452d-a979-4f8be8381af4", data);
  }, []);

  const [obiectSearch, setObjectSearch] = useState({});
  const dataS = (values) => {
    setObjectSearch(values);
  };

  useEffect(() => {
    setListPro(search(obiectSearch));
  }, []);

  const search = (object) => {
    let listProductTmp = [];
    if (object.select == "Tất cả") {
      if (object.input != "null") {
        let arrTmp = object.input.split(" ");
        for (let i = 0; i < arrTmp.length; i++) {
          listProducts.map((product) => {
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
          listProducts.map((product) => {
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
      listProducts.map((product) => {
        if (product.hightL == true) listProductTmp.push(product);
      });
    } else {
      listProductTmp = listProducts;
    }
    return listProductTmp;
  };

  const number = listProducts.length;
  const listSe = [
    { value: "all", name: "Tất cả" },
    { value: "popular", name: "phổ biến" },
  ];
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className={styles.wrap}>
        <div className={clsx(styles.row, styles.WBar)}>
          <div className={styles.row}>
            <div className={styles.bar} onClick={() => setToggle(!toggle)}>
              <ImMenu />
            </div>
            <p className={styles.textBar} onClick={() => setToggle(!toggle)}>
              Bộ lọc
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.row}>
              <p className={styles.result}>{number} kết quả</p>

              <select className={styles.se}>
                {listSe.map((Se, indext) => (
                  <option key={indext} value={Se.value}>
                    {Se.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? clsx(styles.nav_menu, styles.active)
              : clsx(styles.nav_menu, styles.nav_menu2)
          }
        >
          <div className={styles.close} onClick={() => setToggle(!toggle)}>
            <ImCross />
          </div>
          <div className={styles.wrap__cooli}>
            {listCooli.map((cooli, index) => (
              <div key={index} className={styles.wrap__cooli}>
                <h1>{cooli.title}</h1>
                <div className={styles.row}>
                  <input
                    name={cooli.name}
                    type="radio"
                    className={styles.radi}
                  ></input>
                  <lable for={cooli.name} className={styles.des}>
                    {cooli.content[1]}
                    {console.log(cooli)}
                  </lable>
                </div>
                <div className={styles.row}>
                  <input
                    name={cooli.name}
                    type="radio"
                    className={styles.radi}
                  ></input>
                  <lable for={cooli.name} className={styles.des}>
                    {cooli.content[2]}
                  </lable>
                </div>
                <div className={styles.row}>
                  <input
                    name={cooli.name}
                    type="radio"
                    className={styles.radi}
                  ></input>
                  <lable for={cooli.name} className={styles.des}>
                    {cooli.content[3]}
                  </lable>
                </div>
                {cooli.content[4] !== "" && (
                  <div className={styles.row}>
                    <input
                      name={cooli.name}
                      type="radio"
                      className={styles.radi}
                    ></input>
                    <lable for={cooli.name} className={styles.des}>
                      {cooli.content[4]}
                    </lable>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={!toggle ? styles.col : styles.col1}>
        <div className={styles.row}>
          {listProducts.map((product, index) => (
            <div key={product.id}>
              {index < 12 && (
                <Link to={product.path} style={{ textDecoration: "none" }}>
                  <Product
                    image={product.imageMain}
                    title={product.name}
                    cost={product.price}
                    writer={product.write}
                    rat={product.rated.avrat}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className={styles.row}>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default CooliP;
