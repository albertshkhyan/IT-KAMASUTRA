import React from "react";

export default function Loader(props) {
  return (
    <div className="Loader">
      <img src={props.imageLoader} alt="loader" />
    </div>
  );
}
