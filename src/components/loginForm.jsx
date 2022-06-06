import React, { Component } from "react";
import { saveHeadline, getHeadline } from "../services/headlineService";
// import { saveHeadline } from "../services/fakeHeadlineService";
import auth from "../services/authService";

class loginForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
      errors: [],
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      window.location = "./"; // reloading the page
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("Wrong");
      }
    }
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
    //         <label htmlFor="title">Email</label>
    //         <input
    //           value={this.state.data.email}
    //           type="email"
    //           name="email"

    //           id="email"
    //           onChange={this.handleChange}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="body">Password</label>
    //         <input
    //           value={this.state.data.password}
    //           name="password"
    //           type="password"

    //           id="password"

    //           onChange={this.handleChange}
    //         />
    //       </div>

    //       <button className="btn btn-primary m-2">Login</button>
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
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.email}
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              placeholder="abc@xyz.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.password}
              name="password"
              type="password"
              id="password"
              onChange={this.handleChange}
              placeholder="******************"
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

export default loginForm;
