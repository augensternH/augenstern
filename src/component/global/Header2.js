import React from "react";
import Navigation from "./Navigation";
import Notification from "../global/Notification";
import Search from "../pageComponent/bodyComponent/Search";
import NotiUser from "./NotiUser";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./header2.module.css";
import logo from "../../images/logo-1.png";
import cartImage from "../../component/icon/cart.png";
import user from "../../component/icon/user.png";
import bell from "../../component/icon/bell.png";
import love from "../../component/icon/love.png";
import { get, put, post } from "../../data/methodFetch";

export default function Header() {
  const listSearch = ["Tất cả", "Xu hướng"];
  const [numberProductCart, setNumberProductCart] = useState(1);
  const [Input, SetInput] = useState(" ");
  const [resualtSelect, SetresualtSelect] = useState("");
  const [cartLoad, SetcartLoad] = useState(false);
  const [NotiLoad, setNotiLoad] = useState(false);
  const [notiUser, setNotiUser] = useState(false);
  const [toggleS, setTS] = useState(false);

  const changNumber = (abc) => {
    setNumberProductCart(abc.length);
  };
  useEffect(() => {}, [notiUser]);
  useEffect(() => {}, [NotiLoad]);
  useEffect(() => {}, [resualtSelect]);

  useEffect(() => {}, [Input]);
  useEffect(() => {}, [cartLoad]);

  useEffect(() => {
    get(
      "https://mocki.io/v1/253a504a-4136-48ed-8bdc-d6e0ad844aa0",
      changNumber
    );
  }, []);

  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get(" https://mocki.io/v1/ac1ea918-c1cd-452d-a979-4f8be8381af4", data);
  }, []);

  const toggleUser = () => {
    setNotiUser(!notiUser);

    SetcartLoad(false);
    setNotiLoad(false);
  };
  const toggleNoti = () => {
    setNotiLoad(!NotiLoad);

    SetcartLoad(false);
    setNotiUser(false);
  };
  const handleChange = (e) => {
    SetresualtSelect(e.target.value);
  };
  const [obj, setObj] = useState({});
  const submitSearch = () => {
    const obj = {
      select: resualtSelect,
      input: Input,
    };
    setObj(obj);
    setTS(!toggleS);
  };
  const handleChangeInput = (e) => {
    SetInput(e.target.value);
  };

  return (
    <>
      <div>
        <div className={styles.wrapHead}>
          <div
            onClick={() => {
              setTS(false);
            }}
            className={clsx(styles.advertisement)}
          ></div>
          <div className={styles.wrap}>
            <Link
              onClick={() => {
                setTS(false);
              }}
              to="/"
            >
              <img className={clsx(styles.logo)} src={logo} />
            </Link>
            <div className={styles.seach_box}>
              <div
                onClick={() => {
                  setTS(false);
                }}
              >
                {toggleS && (
                  <div
                    onClick={() => {
                      setTS(false);
                    }}
                  >
                    <Search products={listProducts} obj={obj} />
                  </div>
                )}
              </div>
              <select className={styles.dropdown} onChange={handleChange}>
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
              {/* <Link to="website-template"> */}
              <button className={styles.button} onClick={submitSearch}>
                Search
              </button>
              {/* </Link> */}
            </div>
            <div
              onClick={() => {
                setTS(false);
              }}
              className={styles.rightHead}
            >
              <Link
                to="like-page"
                onClick={() => {
                  setTS(false);
                }}
              >
                <div className={styles.love}>
                  <img className={styles.image} src={love}></img>
                </div>
              </Link>
              <div className={styles.bell} onClick={toggleNoti}>
                <img className={styles.image} src={bell}></img>
                <div className={styles.hook}>
                  {NotiLoad && <Notification />}
                </div>
              </div>

              <div
                className={styles.cart}
                onClick={() => {
                  SetcartLoad(!cartLoad);
                }}
              >
                <Link
                  to="cart-page"
                  onClick={() => {
                    setTS(false);
                  }}
                >
                  <img className={styles.image} src={cartImage}></img>{" "}
                </Link>

                <p
                  onClick={() => {
                    setTS(false);
                  }}
                  className={styles.productNumber}
                >
                  {numberProductCart}
                </p>
              </div>
              <div
                onClick={() => {
                  setTS(false);
                }}
              >
                <div className={styles.user} onClick={toggleUser}>
                  <img className={styles.image} src={user} />
                  <div className={styles.hook}>{notiUser && <NotiUser />}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setTS(false);
          }}
        >
          <Navigation />
        </div>
      </div>
    </>
  );
}
