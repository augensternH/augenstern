import React from "react";
import Navigation from "./Navigation";
import Login from "../Login";
import SignIn from "../SignIn";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../images/logo-1.png";
import cartImage from "../../component/icon/cart.png";
export default function Header() {
  const listSearch = ["Tất cả", "Xu hướng"];
  const numberProductCart = "01";
  const SelectRef = useRef(null);
  const [Input, SetInput] = useState(" ");
  const [resualtSelect, SetresualtSelect] = useState("");
  const [cartLoad, SetcartLoad] = useState(false);
  const [logIn, SetlogIn] = useState(false);
  const [signIn, SetsignIn] = useState(false);
  useEffect(() => {}, [resualtSelect]);
  useEffect(() => {}, [Input]);
  useEffect(() => {}, [cartLoad]);
  useEffect(() => {}, [logIn]);
  const handleChange = (e) => {
    SetresualtSelect(e.target.value);
    console.log("Gửi lựa chọn cần tìm tới....");
  };
  const submitSearch = () => {
    SetInput("");
    console.log("Gửi kết quả cần tìm tới.....");
  };
  const handleChangeInput = (e) => {
    SetInput(e.target.value);
    console.log("Gửi Input đi....");
  };
  const handleLogIn = () => {
    SetlogIn(!logIn);
    console.log(logIn);
  };
  const handleSignIn = () => {
    SetsignIn(!signIn);
    console.log(signIn);
  };

  return (
    <>
      <div>
        <div className={styles.wrapHead}>
          <div className={clsx(styles.advertisement)}></div>
          <div className={styles.wrap}>
            <Link to="/">
              <img className={clsx(styles.logo)} src={logo} />
            </Link>
            <div className={styles.seach_box}>
              <select
                className={styles.dropdown}
                ref={SelectRef}
                onChange={handleChange}
              >
                {listSearch.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <input
                className={styles.input}
                value={Input}
                onChange={handleChangeInput}
              ></input>
              <button className={styles.button} onClick={submitSearch}>
                Search
              </button>
            </div>
            <div className={styles.rightHead}>
              <div
                className={styles.cart}
                onClick={() => {
                  SetcartLoad(!cartLoad);
                }}
              >
                <img className={styles.image} src={cartImage} />

                {/* render component cart */}
                {cartLoad && <div></div>}
                <p className={styles.productNumber}>{numberProductCart}</p>
              </div>
              <div className={styles.logIn} onClick={handleLogIn}>
                Đăng nhập
                {/* wait component log in */}
              </div>
              <div className={styles.abc}>
                {logIn && (
                  <p className={styles.close} onClick={handleLogIn}>
                    close
                  </p>
                )}
                {logIn && <Login />}
              </div>
              {logIn && <div className={styles.overlay}></div>}
              <div className={styles.signIn} onClick={handleSignIn}>
                Đăng ký
              </div>
              <div className={styles.abc}>
                {logIn && (
                  <p className={styles.close} onClick={handleLogIn}>
                    close
                  </p>
                )}
                {signIn && <SignIn />}
              </div>
              {signIn && <div className={styles.overlay}></div>}
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
}
