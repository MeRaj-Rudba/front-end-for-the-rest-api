import React from "react";

import "./Image.css";

const image = (props) => (
  // <div
  //   className="image"
  //   style={{
  //     backgroundImage: `url('${props.imageUrl}')`,
  //     backgroundSize: props.contain ? 'contain' : 'cover',
  //     backgroundPosition: props.left ? 'left' : 'center'
  //   }}
  // />
  <div
    style={{
      backgroundSize: props.contain ? "contain" : "cover",
      backgroundPosition: props.left ? "left" : "center",
    }}
  >
    <img className="image" src={props.imageUrl} alt="" />
  </div>
);

export default image;
