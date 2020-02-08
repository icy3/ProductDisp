import React from "react";
import ReactDOM from "react-dom";

function Image(props) {
  return (
    <li>
      <img
        className={props.className}
        // {...props}
        src={props.image_url}
        onMouseEnter={() => {
          props.handleClick(props.image_url, props.index);
        }}
      ></img>
    </li>
  );
}

export default Image;
