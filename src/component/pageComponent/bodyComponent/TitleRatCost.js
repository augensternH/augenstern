import React, { useState, useEffect } from "react";
import styles from "./titleRatCost.module.css";
import StarRating from "react-rating-stars-component";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { post } from "../../../data/methodFetch";
import clsx from "clsx";

const TitleRatCost = (props) => {
  const [rat, setRat] = useState(props.rat);
  //chỉ đánh giá 1 lần chưa fix được
  useEffect(() => {}, [rat]);

  const DiscountCode = (prop) => {
    return <div className={styles.discount}>{prop.number}% GIẢM</div>;
  };
  const Button = (prop) => {
    return <div className={styles.but}>{prop.title}</div>;
  };
  // const post = (api, data) => {
  //   const options = {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   fetch(api, options)
  //     .then((response) => response.json())
  //     .then((data) => console.log("-------->", data))
  //     .catch((err) => console.warn("<-----:", err));
  // };
  // useEffect(() => {
  //   postProduct();
  // }, [toggle]);

  const [toggle, setToggle] = useState(true);
  let [quan, setQuan] = useState(1);
  useEffect(() => {}, [toggle]);
  const handleAdd = (productCart) => {
    const dataProduct = {
      name: productCart.name,
      image: productCart.imageMain,
      price: productCart.price,
      path: productCart.path,
      quan: quan,
    };
    setToggle(!toggle);
    //giới hạn chỉ clink 1 lần
    setQuan(quan + 1);
    // const abc = { name: "abc", title: "abc2", quan: quan };
    if (quan <= 1) post("http://localhost:3000/carts", dataProduct);
  };
  return (
    <did className={styles.wrap}>
      <div className={styles.padL}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={clsx(styles.row, styles.bBo)}>
          <p className={clsx(styles.pT, styles.pR10)}>{rat.avrat}</p>
          <div className={styles.bR}>
            <StarRating
              size={16}
              count={5}
              color="rgb(116, 112, 112)"
              activeColor="rgb(217, 255, 0)"
              value={rat.avrat}
              a11y={true}
              isHalf={true}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              filledIcon={<BsStarFill />}
              edit={false}
            />
          </div>
          <p className={clsx(styles.pR10, styles.bR, styles.pT)}>
            {rat.rat.length} Đánh giá
          </p>
          <p className={clsx(styles.pR10, styles.pT)}>100 đã bán</p>
        </div>
        <div className={clsx(styles.row)}>
          <h3 className={styles.h3C}>{(props.cost * 80) / 100} VND</h3>
          <h4 className={styles.CostA}>{props.cost} VND</h4>
        </div>
        <p className={clsx(styles.row, styles.costSave, styles.pB20)}>
          Tiết kiệm {(props.cost * 20) / 100} VND
        </p>
        <div className={clsx(styles.row, styles.mB, styles.pB20)}>
          <p className={styles.pR10}> Mã giảm giá</p>
          <DiscountCode number={20} />
          <DiscountCode number={15} />
          <DiscountCode number={10} />
          <DiscountCode number={10} />
        </div>
        <div className={clsx(styles.row, styles.jc, styles.pB20)}>
          <a href="#" className={styles.tA}>
            <Button title="Xem demo" />
          </a>
          <div onClick={() => handleAdd(props.product)}>
            {/*onClick={addItem(props.product)}*/}

            <Button title="Thêm vào giỏ hàng" />
            {/* {toggle ? <div>1</div> : <div>2</div>} */}
          </div>
          <div>
            <Button title="Mua ngay" />
          </div>
        </div>
      </div>
    </did>
  );
};

export default TitleRatCost;
