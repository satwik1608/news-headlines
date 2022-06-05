import React, { Component } from "react";
import { saveHeadline, getHeadline } from "../services/headlineService";
import auth from "../services/authService";
// import { saveHeadline } from "../services/fakeHeadlineService";

class AddHeadline extends Component {
  state = {
    data: {
      title: "",
      author: "",
      body: "",
    },
  };

  async componentDidMount() {
    const headLineId = this.props.match.params.id;

    if (headLineId === "new") {
      this.setState({ data: this.setAuthor(this.props.user.name) });
      return;
    }

    const { data: headline } = await getHeadline(headLineId);
    this.setState({ data: this.mapToViewModel(headline) });
  }

  setAuthor = (author) => {
    return {
      author: author,
    };
  };

  mapToViewModel = (headline) => {
    return {
      _id: headline._id,
      title: headline.title,
      author: headline.author,
      body: headline.body,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  doSubmit = async () => {
    await saveHeadline(this.state.data);
    this.props.history.push("/");
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="title">Title</label>
            <input
              value={this.state.data.title}
              type="text"
              name="title"
              className="form-control"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="title">Author</label>
            <input
              value={this.state.data.author}
              type="text"
              name="author"
              className="form-control"
              id="author"
              onChange={this.handleChange}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Story</label>
            <textarea
              value={this.state.data.body}
              name="body"
              type="text"
              className="form-control"
              id="body"
              rows="3"
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-primary m-2">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddHeadline;
