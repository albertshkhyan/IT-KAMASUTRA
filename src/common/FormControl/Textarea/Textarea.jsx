import React from "react";

import FormControl from "./../FormControl";

const Textarea = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};
export default Textarea;
