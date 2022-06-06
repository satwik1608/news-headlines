import React, { Component } from "react";
{
  /* <script
  src="https://kit.fontawesome.com/f6fe5c44ab.js"
  crossorigin="anonymous"
></script>; */
}

const Like = (props) => {
  return (
    <React.Fragment>
      <i
        onClick={props.onLike}
        style={{ cursor: "pointer" }}
        class="fa fa-thumbs-up"
        aria-hidden="true"
      >
        {props.likes === 0 ? "" : " " + props.likes}
      </i>
    </React.Fragment>
  );
};

export default Like;
