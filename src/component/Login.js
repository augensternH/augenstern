import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./login.module.css";
// import { useState, useEffect } from "react";
import logo from "../images/logo-1.png";
import imagelogin from "../images/login.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  //   const [logIn, SetlogIn] = useState(true);
  //   useEffect({}, [logIn]);
  //   const handleLogIn = () => {
  //     SetlogIn(!logIn);
  //     console.log(logIn);
  //   };
  //   const [mail, setMail] = useState("");
  //   const handleChageMail = (e) => {
  //     setMail(e.target.value);
  //   };
  //   useEffect(() => {}, mail);
  return (
    <div>
      <div className={styles.wrap}>
        <Link to="/" className={styles.logo}>
          {" "}
          <img src={logo} />{" "}
        </Link>
        <div className={styles.row}>
          <div>
            <img className={styles.image} src={imagelogin}></img>
          </div>
          <div className={styles.right}>
            <div className={styles.wrap__2}>
              <h2 className={styles.title}>
                Chào mừng bạn quay <br></br>trở lại!
              </h2>
              <p className={styles.description}>
                Đăng nhập để dễ dàng mua sắm trên ...
                <div className={styles.row}>
                  <label for="email">Email address</label>
                  <p className={styles.impotain}>*</p>
                </div>
                <input className={styles.input}></input>
                <div className={styles.row}>
                  <label for="email">Email address</label>
                  <p className={styles.impotain}>*</p>
                </div>
                <input className={styles.input}></input>
                <button className={styles.button}>Đăng nhập</button>
                <div className={styles.row}>
                  <p>Bạn chưa có tài khoản?</p>
                  <Link to="sign-in.html" className={styles.question}>
                    Đăng kí
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
