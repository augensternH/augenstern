import React from "react";
import style from "./footer.module.css";
import logo from "../../images/logo-1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [email, setEmai] = useState("");
  const handleSubmit = (value) => {
    console.log("gửi email khách đăng ký tới...");
  };
  // -------thuần f-e
  return (
    <div className={style.wrap}>
      <div className={style.left}>
        <Link to="/">
          <img className={style.logo} src={logo} />
        </Link>
        <p className={style.textLeft}>Theo dõi chúng tôi tại</p>
        <div className={style.row}>
          <a href="#" className={style.icon}>
            <i class="fab fa-google"></i>
          </a>
          <a href="#" className={style.icon}>
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={style.icon}>
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className={style.icon}>
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" className={style.icon}>
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <p className={style.contact}>Liên hệ</p>
        <a href="#" className={style.row}>
          <div className={style.icon}>
            <i class="fa fa-map-marker"></i>
          </div>
          <p className={style.map}>Trường Đại học Thương mại</p>
        </a>
        <a href="#" className={style.row}>
          <div className={style.icon}>
            <i class="far fa-envelope"></i>
          </div>
          <p className={style.map}>abc@gmail.com</p>
        </a>
        <a href="#" className={style.row}>
          <div className={style.icon}>
            <i class="fas fa-phone-volume"></i>
          </div>
          <p className={style.map}>099999999999</p>
        </a>
      </div>
      <div className={style.right}>
        <h1>Đăng ký nhận thông tin</h1>
        <div className={style.boxNewInfor}>
          <input
            placeholder="Email"
            className={style.input}
            onChange={() => setEmai()}
          ></input>
          <button className={style.button}>Đăng ký</button>
        </div>
        <div className={style.rightEnd}>
          <div className={style.col}>
            <h1 className={style.h1}>Thông tin</h1>
            <Link to="#" className={style.link}>
              <p className={style.text}>Giới thiệu</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Điều Khoản và điều kiện</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Chính sách bảo mật</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Danh mục sản phẩm</p>
            </Link>
          </div>
          <div className={style.col}>
            <h1 className={style.h1}>Chăm sóc khách hàng</h1>
            <Link to="#" className={style.link}>
              <p className={style.text}>Hướng dẫn mua hàng</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Hướng dẫn cài đặt</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Trung tâm trợ giúp</p>
            </Link>
          </div>
          <div className={style.col}>
            <h1 className={style.h1}>Tải ứng dụng</h1>
            <Link to="#" className={style.link}>
              <p className={style.text}>Appstore</p>
            </Link>
            <Link to="#" className={style.link}>
              <p className={style.text}>Google play</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
