import React from "react";
import styles from "./slideProduct.module.css";
import "./slidepro.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SlideProduct = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaSpeed: 300,

    customPaging: (i) => {
      return (
        <img
          src={props.images[i]}
          alt=""
          style={{
            width: "90px",
            height: "90%",
            objectFit: "cover",
          }}
        />
      );
    },
    dotsClass: "slick-dots custom-indicator",
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapB}>
        <Slider {...settings}>
          {props.images.map((image, index) => (
            <div key={index}>
              <img className={styles.image} src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideProduct;
