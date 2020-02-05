import React from "react";
import ReactDOM from "react-dom";

function Image(props) {
  return (
    <li>
      <img
        className="little-image"
        src={props.image_url}
        onClick={() => {
          props.handleClick(props.image_url, props.index);
        }}
      ></img>
    </li>
  );
}

export default Image;
