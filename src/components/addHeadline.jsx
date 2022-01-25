import React, { Component } from "react";

class addHeadline extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" />
        </div>
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default addHeadline;
