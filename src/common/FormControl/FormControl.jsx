import React from "react";

import styles from "./style.module.css";

const FormControl = ({ meta, input, children, ...restProps }) => {
  const { error, touched } = meta;
  const isCheck = touched && error;
  return (
    <div className={styles.container}>
      <div
        className={`${isCheck ? styles.warningContent : ""} flexible vertical`}
      >
        {/* <textarea {...input} {...restProps}></textarea> */}
        {children}
      </div>
      {isCheck && <span>{error}</span>}
    </div>
  );
};
export default FormControl;
