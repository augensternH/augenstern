import React, { useState, useEffect } from "react";
import { get } from "../data/methodFetch";
import { Link } from "react-router-dom";
// import { listProducts } from "../data/data";
import Slider from "react-slick";
import Classify from "../component/pageComponent/bodyComponent/Classify";
import Advertisement from "../component/pageComponent/Advertisement";
import Product from "../component/pageComponent/Product";
import "../index.css";
import Footer from "../component/global/Footer";

const Home = () => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get("https://mocki.io/v1/ac1ea918-c1cd-452d-a979-4f8be8381af4 ", data);
  }, []);
  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    lazyLoad: true,
    // nextArrow: <NextArrow />,
  };
  // const check = (value) => {
  //   const tmp = 1;
  //   if (value < 5) tmp = 1;
  //   else tmp = 0;
  //   return tmp;
  // };

  return (
    <div className="overlay">
      <div className="wrap">
        <Advertisement />
        <Classify title="Gợi ý" />

        <div className="ct">
          <Slider {...settings}>
            {listProducts.map((product, index) => (
              <div key={product.id} className="row__2">
                {index < 10 && (
                  <Link to={product.path} style={{ textDecoration: "none" }}>
                    <Product
                      path={product.path}
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
          </Slider>
        </div>

        <Classify title="Xu hướng" />
        <div className="row">
          {listProducts.map((product, index) => (
            <div key={product.id}>
              {index < 10 && product.hightL == true && (
                <Link to={product.path} style={{ textDecoration: "none" }}>
                  {" "}
                  <Product
                    path={product.path}
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
        <Classify title="Mới nhất" />
        <div className="row">
          {listProducts.map((product, index) => (
            <div key={product.id}>
              {index < 10 && (
                <Link to={product.path} style={{ textDecoration: "none" }}>
                  {" "}
                  <Product
                    path={product.path}
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
