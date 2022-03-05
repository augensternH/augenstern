import React from "react";
import { useEffect, useState } from "react";
import styles from "./signIn.module.css";
// import { useState, useEffect } from "react";
import logo from "../images/logo-1.png";
import imagelogin from "../images/signin.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [pass, setPass] = useState([""]);
  const [passC, setPassC] = useState("");
  const [checkPass, setcheckPass] = useState(false);
  //   const checkPass = false;
  useEffect(() => {}, [pass]);
  useEffect(() => {}, [passC]);
  useEffect(() => {}, []);
  const handlepass = (event) => {
    setPass(event.target.value);
  };
  const handlepassC = (event) => {
    setPassC(event.target.value);
    if (event.target.value.length === pass.length)
      if (event.target.value !== pass) setcheckPass(true);
      else setcheckPass(false);
    else setcheckPass(true);
  };
  const click = () => {
    setcheckPass(true);
  };
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
              <h2 className={styles.title}>Đăng ký tài khoản</h2>
              <p className={styles.description}>
                Đăng ký tài khoản để có những trải nghiệm tốt nhất tại...
                <div className={styles.row}>
                  <label for="email">Email address</label>
                  <p className={styles.impotain}>*</p>
                </div>
                <input className={styles.input}></input>
                <div className={styles.row}>
                  <label for="pass">Mật khẩu</label>
                  <p className={styles.impotain}>*</p>
                </div>
                <input
                  name="pass"
                  className={styles.input}
                  onBlur={handlepass}
                ></input>
                <div className={styles.row}>
                  <label for="pass"> Nhập lại Mật khẩu</label>
                  <p className={styles.impotain}>*</p>
                </div>
                <input
                  name="pass"
                  className={styles.input}
                  onBlur={handlepassC}
                ></input>
                {checkPass && (
                  <div className={styles.checkP}>Nhập lại mật khẩu</div>
                )}
                <button className={styles.button}>Đăng nhập</button>
                <div className={styles.row}>
                  <p>Bạn chưa có tài khoản?</p>
                  <Link to="#" className={styles.question}>
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
