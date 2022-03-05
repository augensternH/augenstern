import React from "react";
import Header2 from "../component/global/Header2";
import { MdOutlineDateRange } from "react-icons/md";
import { AiTwotoneFilePdf } from "react-icons/ai";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import ReactStart from "react-rating-stars-component";
import DesProduct from "../component/pageComponent/bodyComponent/DesProduct";
import Pagination from "../component/pageComponent/bodyComponent/Pagination";
import Footer from "../component/global/Footer";
import TitleRatCost from "../component/pageComponent/bodyComponent/TitleRatCost";
import SlideProduct from "../component/pageComponent/bodyComponent/SlideProduct";
import Product from "../component/pageComponent/Product";
import styles from "./page.module.css";
import { useLocation } from "react-router-dom";
import { get } from "../data/methodFetch";
import { useState, useEffect } from "react";
import NoPage from "./NoPage";
import "../index.css";
const ProductInfor = () => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get("https://mocki.io/v1/ac1ea918-c1cd-452d-a979-4f8be8381af4", data);
  }, []);
  const Infor = () => {
    return (
      <>
        <div>
          <MdOutlineDateRange />
          Ngày đăng:{" "}
        </div>
        <div>
          <AiTwotoneFilePdf /> Dung lượng:{" "}
        </div>
      </>
    );
  };
  let location = useLocation();
  return (
    <>
      {listProducts.map((product, index) => {
        return (
          <>
            {product.path == location.pathname ? (
              <div key={index}>
                <Header2 />
                <div className={styles.wrap}>
                  <div className={styles.row}>
                    <div className={styles.colLeft}>
                      <SlideProduct images={product.image} />
                      <DesProduct des={product.text} />
                      <div className={styles.wrap}>
                        <h1>Đánh giá</h1>
                        <div className={styles.rating}>
                          <div className={styles.row}>
                            <p className={styles.rated}>
                              {product.rated.avrat}{" "}
                            </p>
                            <p className={styles.ratcount}>trên 5</p>
                          </div>
                          <div className={styles.star}>
                            <ReactStart
                              size={24}
                              count={5}
                              color="rgb(116, 112, 112)"
                              activeColor="rgb(217, 255, 0)"
                              value={0}
                              a11y={true}
                              isHalf={true}
                              emptyIcon={<BsStar />}
                              halfIcon={<BsStarHalf />}
                              filledIcon={<BsStarFill />}
                            ></ReactStart>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.cmt}>
                            <div className={styles.row}>
                              <div className={styles.icon}>
                                <FaUserSecret />
                              </div>
                              <p className={styles.name}>
                                {product.comment.name}
                              </p>
                              <p className={styles.date}>
                                {product.comment.date}
                              </p>
                            </div>
                            <div className={styles.rat}>
                              <ReactStart
                                size={24}
                                count={5}
                                color="rgb(116, 112, 112)"
                                activeColor="rgb(217, 255, 0)"
                                value={product.comment.star}
                                edit={false}
                              ></ReactStart>
                            </div>
                            <p className={styles.cmtt}>{product.comment.cmt}</p>
                          </div>
                          <img
                            className={styles.imageCmt}
                            src={product.comment.image}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.colRight}>
                      <TitleRatCost
                        title={product.name}
                        cost={product.price}
                        product={product}
                        rat={product.rated}
                      />
                      <div className={styles.p30}>
                        <Infor inf={product.info} />
                      </div>
                      <div className={styles.endCRight}>
                        <h1 className={styles.h1R}>Có thể bạn cũng thích</h1>
                        <div className={styles.pL}>
                          {listProducts.map((product, index) => (
                            <>
                              {index < 3 && (
                                <Product
                                  title={product.name}
                                  image={product.image[0]}
                                  price={product.cost}
                                  writer={product.write}
                                />
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            ) : (
              <div className="dN" key={index}></div>
            )}
          </>
        );
      })}
    </>
  );
};

export default ProductInfor;
