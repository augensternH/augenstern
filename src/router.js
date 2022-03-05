import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { useState, useEffect } from "react";
import { get } from "./data/methodFetch";

import Header from "./component/global/Header";
import Header2 from "./component/global/Header2";

import ProductInfor from "./page/ProductInfor";

const CartPage = React.lazy(() =>
  import("./component/pageComponent/bodyComponent/CartPage")
);
const WebsiteTemplate = React.lazy(() =>
  import("./component/pageComponent/TitleDC")
);
const LikePage = React.lazy(() => import("./page/LikePage"));
const Admin = React.lazy(() => import("./admin/page"));
const router = () => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get(" http://localhost:3000/products", data);
  }, []);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={false ? <Header /> : <Header2 />}>
          <Route index element={<Home />} />

          {/* <Route path="2" element={<Home2 />} /> */}
          <Route
            path="like-page"
            element={
              <React.Suspense fallback={<>...</>}>
                <LikePage />
              </React.Suspense>
            }
          />
          <Route
            path="website-template"
            element={
              <React.Suspense fallback={<>...</>}>
                <WebsiteTemplate />
              </React.Suspense>
            }
          />
          <Route
            path="cart-page"
            element={
              <React.Suspense fallback={<>...</>}>
                <CartPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="admin"
          element={
            <React.Suspense fallback={<>...</>}>
              <Admin />
            </React.Suspense>
          }
        />

        {listProducts.map((product, index) => {
          return (
            <Route key={index} path={product.path} element={<ProductInfor />} />
          );
        })}

        {/* {listProducts.map((product, index) => {
        return (
          <Route key={index} path={product.path} element={<ProductInfor />} />
        );
      })}
      <Route path="test" element={<Test />} /> */}
        {/* <Route path="test2" element={<GetData />} /> */}
        {/* <Route path="*" element={<TemCom />} /> */}
        {/* <Route path="*" element={<NoPage />} />
      {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
};

export default router;
