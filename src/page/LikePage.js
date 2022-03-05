import React, { useState, useEffect } from "react";
import { get } from "../data/methodFetch";
import Footer from "../component/global/Footer";
import PageTitle from "../component/pageComponent/bodyComponent/PageTitle";
import Product from "../component/pageComponent/Product";
import Pagination from "../component/pageComponent/bodyComponent/Pagination";
import "../index.css";
import { Link } from "react-router-dom";
const LikePage = () => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get("https://mocki.io/v1/ac1ea918-c1cd-452d-a979-4f8be8381af4", data);
  }, []);

  const title_des = {
    title: "Sản phẩm yêu thích",
    description: "4 sản phầm",
  };
  return (
    <>
      {/* <Header /> */}
      <div className="wrap__2">
        <PageTitle
          title={title_des.title}
          description={title_des.description}
        />
      </div>
      <div>
        <div className="row ">
          {listProducts.map((product, index) => (
            <div key={product.id}>
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
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default LikePage;
