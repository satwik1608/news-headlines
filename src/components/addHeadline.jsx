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
    console.log("mount");
    if (headLineId === "new") {
      this.setState({ data: this.setAuthor(this.props.user.firstname) });
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
    // return (
    //   <React.Fragment>
    //     <form onSubmit={this.handleSubmit}>
    //       <div className="form-group ">
    //         <label htmlFor="title">Title</label>
    //         <input
    //           value={this.state.data.title}
    //           type="text"
    //           name="title"
    //           className="form-control"
    //           id="title"
    //           onChange={this.handleChange}
    //         />
    //       </div>
    //       <div className="form-group ">
    //         <label htmlFor="title">Author</label>
    //         <input
    //           value={this.state.data.author}
    //           type="text"
    //           name="author"
    //           className="form-control"
    //           id="author"
    //           onChange={this.handleChange}
    //           readOnly
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="body">Story</label>
    //         <textarea
    //           value={this.state.data.body}
    //           name="body"
    //           type="text"
    //           className="form-control"
    //           id="body"
    //           rows="3"
    //           onChange={this.handleChange}
    //         />
    //       </div>

    //       <button className="btn btn-primary m-2">Submit</button>
    //     </form>
    //   </React.Fragment>
    // );
    return (
      <div className="w-full max-w-xs">
        <form
          onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.title}
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              placeholder="Rumbling"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.author}
              name="author"
              type="text"
              id="author"
              onChange={this.handleChange}
              placeholder="Eren"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Details
            </label>
            <textarea
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.body}
              name="body"
              type="message"
              row="3"
              id="body"
              onChange={this.handleChange}
              placeholder="Eren"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Tokyo Corp. All rights reserved.
        </p>
      </div>
    );
  }
}

export default AddHeadline;
