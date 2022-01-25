import React, { Component } from "react";

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
