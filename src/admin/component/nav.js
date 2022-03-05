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
          name: "Hằng Nguyễn",
          date: "22/12/2021",
          cmt: "tuyệt vời, không có giờ chê trách.",
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
            <h3 className={styles.infG}>Thông tin chung</h3>
            <img className={styles.image} src={ImageD} />
            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                Ảnh đại diện:
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
              <h4 className={clsx(styles.col15, styles.titleInf)}>Hình ảnh:</h4>
              <form>
                <input type="file" onChange={SelectFile} multiple />
              </form>
            </div>
            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>
                Mã sản phẩm
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
              <h4 className={clsx(styles.col15, styles.titleInf)}>Giá bán:</h4>
              <form>
                <input
                  className={styles.input}
                  placeholder="100000"
                  onChange={costC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>Tiêu đề:</h4>
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
                đường dẫn:{" "}
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
                Mô tả ngắn
              </h4>
              <form>
                <textarea
                  className={styles.input}
                  placeholder="Mô tả ngắn về sản phẩm"
                  onChange={desC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>Nội dung:</h4>
              <form>
                <textarea
                  className={styles.input}
                  placeholder="Thông tin chi tiết sản phẩm"
                  onChange={contentC}
                />
              </form>
            </div>

            <div className={clsx(styles.row, styles.pb)}>
              <h4 className={clsx(styles.col15, styles.titleInf)}>Tác vụ: </h4>
              <form className={styles.row}>
                <input type="checkbox" value="true" onChange={hightLight} />
                <label>Nổi bật</label>
              </form>
            </div>
            <p className={clsx(styles.row, styles.btn)} onClick={handleSubmit}>
              Xác nhận
            </p>
          </div>
        ) : (
          <div>
            <div className={clsx(styles.row, styles.pointer)} onClick={showR_4}>
              <div className={styles.icon}>
                <GrAddCircle />
              </div>
              Thêm mới
            </div>

            <div
              className={clsx(styles.row, styles.b, styles.box, styles.head)}
            >
              <label className={clsx(styles.box, styles.br)}>
                <input type="checkbox" />
              </label>
              <h3 className={clsx(styles.box, styles.br, styles.col30)}>
                Tiêu đề
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                Hình ảnh
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                Nổi bật
              </h3>
              <h3 className={clsx(styles.box, styles.br, styles.col15)}>
                Tác vụ
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
          <h3 className={styles.h3}>Trang chủ Admin</h3>
        </div>
        <div
          onClick={show2}
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <SiClockify />
          </div>
          <h3 className={styles.h3}>Quản trị danh mục</h3>
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
            <h3 className={styles.h3}>Danh mục</h3>
          </div>
          <div
            onClick={showR_3}
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Sản phẩm</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Bài viết</h3>
          </div>
        </div>
        <div
          onClick={show}
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <GoListUnordered />
          </div>
          <h3 className={styles.h3}>Quản trị giao diện</h3>
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
            <h3 className={styles.h3}>Hình ảnh</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Hỗ trợ trực tuyến</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Thông tin</h3>
          </div>
          <div
            className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
          >
            <div className={styles.icon__c2}>
              <AiOutlineRight />
            </div>
            <h3 className={styles.h3}>Nội dung khác</h3>
          </div>
        </div>
        <div
          className={clsx(styles.row, styles.box, styles.bb, styles.pointer)}
        >
          <div className={styles.icon}>
            <SiInformatica />
          </div>
          <h3 className={styles.h3}>Quản trị thông tin</h3>
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
          <h3 className={styles.h3}>Cấu hình user</h3>
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
