import React from "react";
import FormControl from "./../FormControl";

const Input = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export default Input;
