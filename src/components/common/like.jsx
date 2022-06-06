import React, { Component } from "react";

const Like = (props) => {
  return (
    <React.Fragment>
      <i
        onClick={props.onLike}
        style={{ cursor: "pointer" }}
        class="fa fa-thumbs-up m-2"
        aria-hidden="true"
      >
        {props.likes === 0 ? "" : " " + props.likes}
      </i>
    </React.Fragment>
  );
};

export default Like;
