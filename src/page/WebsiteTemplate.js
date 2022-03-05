import React from "react";
import TitleDC from "../component/pageComponent/TitleDC";

import styles from "./page.module.css";

const WebsiteTemplate = () => {
  return (
    <>
      <div className={styles.bg}>
        <TitleDC />
      </div>
    </>
  );
};

export default WebsiteTemplate;
