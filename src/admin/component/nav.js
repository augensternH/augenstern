import clsx from "clsx";
import React, { useRef } from "react";
import { post } from "../../data/methodFetch";
import { BiHomeHeart, BiEdit } from "react-icons/bi";
import { SiClockify, SiInformatica } from "react-icons/si";
import { AiOutlineCaretDown, AiOutlineRight } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go";
import { GrUserAdmin, GrAddCircle } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";

import styles from "./nav.module.css";
import { useState, useEffect } from "react";
import { ImPacman } from "react-icons/im";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {}, [toggle]);
  const show = () => {
    setToggle(!toggle);
  };
  const [toggle2, setToggle2] = useState(false);
  useEffect(() => {}, [toggle2]);
  const show2 = () => {
    setToggle2(!toggle2);
  };
  const [toggle3, setToggle3] = useState(false);
  useEffect(() => {}, [toggle3]);
  const showR_3 = () => {
    setToggle3(true);
  };

  const ShowListProduct = (props) => {
    const [toggle4, setToggle4] = useState(false);
    useEffect(() => {}, [toggle4]);
    const showR_4 = () => {
      setToggle4(true);
    };
    const [files, setFiles] = useState([]);
    useEffect(() => {}, [files]);
    const SelectFile = (e) => {
      const listtmp = e.target.files;
      const imagesL = [];
      for (let i = 0; i < listtmp.length; i++) {
        const tmp = "images/" + listtmp[i].name;
        imagesL.push(tmp);
      }
      setFiles(imagesL);
    };
    const [file, setFile] = useState([]);
    const [msp, setmsp] = useState("");
    const mspf = (e) => {
      setmsp(e.target.value);
    };

    const [cost, setCost] = useState(0);
    const costC = (e) => {
      setCost(e.target.value);
    };
    const [title, setTitle] = useState("");
    const titleC = (e) => {
      setTitle(e.target.value);
    };
    const [path, setPath] = useState("");
    const pathC = (e) => {
      let tmp = "/" + e.target.value;
      setPath(tmp);
    };

    const [des, setDes] = useState("");
    const desC = (e) => {
      setDes(e.target.value);
    };

    const [content, setContent] = useState("");
    const contentC = (e) => {
      setContent(e.target.value);
    };
    const [hightL, setHightL] = useState(false);

    const hightLight = (e) => {
      setHightL(e.target.checked);
    };

    const handleSubmit = () => {
      const object = {
        name: title,
        msp: msp,
        description: des,
        write: "admin",
        imageMain: file,
        image: files,
        price: cost,
        path: path,
        rated: {
          avrat: 4.6,
          rat: [5, 1, 4, 3, 4, 1, 4, 3, 1, 5],
        },
        comment: {
          name: "H???ng Nguy???n",
          date: "22/12/2021",
          cmt: "tuy???t v???i, kh??ng c?? gi??? ch?? tr??ch.",
          star: 5,

          image: file,
        },
        text: content,
        hightL: hightL,
      };
      console.log(object);
      post("http://localhost:3000/products", object);
    };
    const [ImageD, setImageD] = useState("");
    useEffect(() => {}, [file]);
    const SelectOneFile = (e) => {
      const filetmp = "images/" + e.target.files[0].name;
      setImageD("./" + filetmp);
      setFile(filetmp);
    };

    return (
      <div className={styles.wrap__F}>
        {true ? (
          <div>
            <h3 className={styles.infG}>Th??ng tin chung</h3>
            <img className={styles.image} src={ImageD} />
            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                ???nh ?????i di???n:
              </h4>
              <form>
                <input type="file" onChange={SelectOneFile} />
              </form>
            </div>
            <div className={styles.row}>
              {files.map((image, index) => (
                <div key={index}>
                  <img className={styles.image} src={"./" + image} />
                </div>
              ))}
            </div>
            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>H??nh ???nh:</h4>
              <form>
                <input type="file" onChange={SelectFile} multiple />
              </form>
            </div>
            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                M?? s???n ph???m
              </h4>
              <form>
                <input
                  className={styles.input}
                  placeholder="SP01"
                  onChange={mspf}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>Gi?? b??n:</h4>
              <form>
                <input
                  className={styles.input}
                  placeholder="100000"
                  onChange={costC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>Ti??u ?????:</h4>
              <form>
                <input
                  className={styles.input}
                  placeholder="Theme Hotel"
                  onChange={titleC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                ???????ng d???n:{" "}
              </h4>
              <form>
                <input
                  className={styles.input}
                  placeholder="theme-hotel"
                  onChange={pathC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                {" "}
                M?? t??? ng???n
              </h4>
              <form>
                <textarea
                  className={styles.input}
                  placeholder="M?? t??? ng???n v??? s???n ph???m"
                  onChange={desC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>N???i dung:</h4>
              <form>
                <textarea
                  className={styles.input}
                  placeholder="Th??ng tin chi ti???t s???n ph???m"
                  onChange={contentC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>T??c v???: </h4>
              <form className={styles.row}>
                <input type="checkbox" value="true" onChange={hightLight} />
                <label>N???i b???t</label>
              </form>
            </div>
            <p className={clsx(styles.row, styles.btn)} onClick={handleSubmit}>
              X??c nh???n
            </p>
          </div>
        ) : (
          <div>
            <div className={clsx(styles.row, styles.pointer)} onClick={showR_4}>
              <div className={styles.icon}>
                <GrAddCircle />
              </div>
              Th??m m???i
            </div>

            <div
              className={clsx(styles.row, styles.b, styles.box, styles.head)}
            >
              <label className={clsx(styles.box, styles.br)}>
                <input type="checkbox" />
              </label>
              <h3 className={clsx(styles.box, styles.br, styles.col30)}>
                Ti??u ?????
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                H??nh ???nh
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                N???i b???t
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                T??c v???
              </h3>
            </div>
            {/* {props.products.map((products) => {
          return ( */}
            <div
              //   key={products.id}
              className={clsx(styles.row, styles.b, styles.box)}
            >
              <label className={clsx(styles.box, styles.br)}>
                <input type="checkbox" />
              </label>
              <h3 className={clsx(styles.box, styles.br, styles.col30)}>
                title
              </h3>
              <img
                // src={products.imageMain}
                className={clsx(styles.box, styles.br, styles.col15)}
              />
              <label className={clsx(styles.box, styles.br, styles.col15)}>
                <input type="checkbox" value={true} />
              </label>
              <h3
                className={clsx(
                  styles.box,
                  styles.br,
                  styles.col15,
                  styles.row
                )}
              >
                <BiEdit />
                <RiDeleteBin2Line />
              </h3>
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className={clsx(styles.row, styles.wrap__F)}>
      <div className={styles.wrap}>
        <div
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <BiHomeHeart />
          </div>
          <h3 className={styles.h3}>Trang ch??? Admin</h3>
        </div>
        <div
          onClick={show2}
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <SiClockify />
          </div>
          <h3 className={styles.h3}>Qu???n tr??? danh m???c</h3>
          <div className={styles.icon__r}>
            <AiOutlineCaretDown />
          </div>
        </div>
        <div className={toggle2 ? styles.c2_down : styles.c2_dn}>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Danh m???c</h3>
          </div>
          <div
            onClick={showR_3}
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>S???n ph???m</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>B??i vi???t</h3>
          </div>
        </div>
        <div
          onClick={show}
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <GoListUnordered />
          </div>
          <h3 className={styles.h3}>Qu???n tr??? giao di???n</h3>
          <div className={styles.icon__r}>
            <AiOutlineCaretDown />
          </div>
        </div>
        <div className={toggle ? styles.c2_down : styles.c2_dn}>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>H??nh ???nh</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>H??? tr??? tr???c tuy???n</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Th??ng tin</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>N???i dung kh??c</h3>
          </div>
        </div>
        <div
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <SiInformatica />
          </div>
          <h3 className={styles.h3}>Qu???n tr??? th??ng tin</h3>
          <div className={styles.icon__r}>
            <AiOutlineCaretDown />
          </div>
        </div>
        <div
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <GrUserAdmin />
          </div>
          <h3 className={styles.h3}>C???u h??nh user</h3>
          <div className={styles.icon__r}>
            <AiOutlineCaretDown />
          </div>
        </div>
      </div>
      <div className={styles.wrap__2}>
        {toggle3 ? <ShowListProduct /> : <></>}
      </div>
    </div>
  );
};

export default Nav;
