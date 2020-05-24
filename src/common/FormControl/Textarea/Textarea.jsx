import React from "react";

import styles from "../style.module.css";

const Textarea = ({ meta, input, ...restProps }) => {
  const { error, touched } = meta;
  const isCheck = touched && error;
  return (
    <div className={styles.Textarea}>
      <div
        className={`${isCheck ? styles.textareaContent : ""} flexible vertical`}
      >
        <textarea {...input} {...restProps}></textarea>
      </div>
      {isCheck && <span>{error}</span>}
    </div>
  );
};
export default Textarea;
