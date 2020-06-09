import React from "react";

import styles from "./style.module.css";
import { Field } from "redux-form";

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

export const createField = (component, validates = [], type = "", name, placeholder, id) => {
  return (
    <Field
      id={id}
      type={type}
      name={name}
      component={component}
      validate={validates}
      placeholder={placeholder}
    />
  );
};
export default FormControl;
