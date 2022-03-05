import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./component/global/Footer";
import Classify from "./component/pageComponent/bodyComponent/Classify";
import Advertisement from "./component/pageComponent/Advertisement";
import Product from "./component/pageComponent/Product";
import { product } from "./Images";
import WebsiteTemplate from "./page/WebsiteTemplate";
import Home from "./page/Home";
// import Footer from "./component/global/Footer";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// import Advertisement from "./component/pageComponent/Advertisement";
// import { useMediaQuery } from "react-responsive";
//  const isMediumScreen = useMediaQuery({query: '(min-width:)' })
ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
