import React from "react";
import styles from "./cartpage.module.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Procar = () => {
  let [list, setList] = useState([]);
  const lCost = [];
  // const [quan, setQuan] = useState(0);
  const listProduct = (products) => {
    setList(products);
  };
  const getcart = (api, callback) => {
    fetch(api)
      .then((response) => response.json())
      .then(callback)
      .catch((err) => console.warn("error:", err));
  };

  useEffect(() => {
    getcart(
      "https://mocki.io/v1/253a504a-4136-48ed-8bdc-d6e0ad844aa0",
      listProduct
    );
  }, []);

  // const handleUp = (key, id) => {
  //   console.warn(list);
  //   setList(
  //     list.map((pro) => {
  //       if ((pro.id = id)) pro.quan = pro.quan + 1;
  //     })
  //   );
  // };
  // useEffect(() => {}, [list]);

  const [abc, setAbc] = useState(true);
  const changeUp = (index, values) => {
    //   setProduct( )
    const productChange = {
      image: values.image,
      name: values.name,
      price: values.price,
      quan: values.quan + 1,
    };
    list[index] = productChange;
    setList(list);
    setAbc(!abc);
    // console.warn(productChange);
    // console.log(list);
    // console.warn(index);
  };
  const changeDown = (index, values) => {
    //   setProduct( )
    const productChange = {
      image: values.image,
      name: values.name,
      price: values.price,
      quan: values.quan - 1,
    };
    if (productChange.quan == 0) handleRemove(index);
    else {
      list[index] = productChange;
      setList(list);
      setAbc(!abc);
    }
  };
  const handleRemove = (index) => {
    list = list.splice(index, 1);
    setAbc(!abc);
  };
  useEffect(() => {}, [abc]);

  const cost = (pri, qua) => {
    const abc = pri * qua;
    return abc;
  };
  // let [costTmp, setCostTmp] = useState(0);
  const totalCost = (listCost) => {
    let costTmp = 0;
    listCost.forEach((element) => {
      costTmp += element;
    });
    return costTmp;
  };
  let costTmp = 0;
  const Btn = (props) => {
    return <div className={styles.btn}>{props.namebtn}</div>;
  };
  return (
    <>
      {list.map((product, index) => {
        lCost.push(cost(product.price, product.quan));
        costTmp = totalCost(lCost);
        return (
          <div key={index} className={clsx(styles.row, styles.bb)}>
            <div className={styles.col1}>
              <div className={clsx(styles.row2)}>
                <img className={styles.image} src={product.image} />
                <h3 className={styles.h3}>{product.name}</h3>
              </div>
            </div>
            <div className={clsx(styles.col2, styles.lh)}>{product.price}</div>
            <div className={clsx(styles.col2, styles.lh, styles.row2)}>
              <p> {product.quan}</p>

              <div>
                <div
                  className={styles.up}
                  onClick={() => changeUp(index, product)}
                >
                  <HiOutlineChevronUp />
                </div>
                <div
                  className={styles.down}
                  onClick={() => changeDown(index, product)}
                >
                  <HiOutlineChevronDown />
                </div>
              </div>
            </div>
            <div className={clsx(styles.col2, styles.lh)}>
              {product.price * product.quan} VND
            </div>
            <div className={clsx(styles.col2, styles.lh)}>
              <p
                className={styles.remove}
                onClick={() => {
                  handleRemove(index);
                }}
              >
                Remove
              </p>
            </div>
          </div>
        );
      })}
      <div className={clsx(styles.row2, styles.bb, styles.rowLast)}>
        <div className={styles.coll}>
          <label>
            {" "}
            Mã giảm giá: <input name="mgg" className={styles.input}></input>
          </label>
        </div>
        <div className={clsx(styles.right, styles.row2)}>
          <p>Tổng thanh toán: </p>
          <p className={styles.ml}>{costTmp} VND</p>
        </div>
        <div className={styles.sub}>
          <Btn namebtn="Thanh toán" />
        </div>
      </div>
    </>
  );
};

export default Procar;
