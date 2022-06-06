import React, { Component } from "react";
import { saveHeadline, getHeadline } from "../services/headlineService";
// import { saveHeadline } from "../services/fakeHeadlineService";
import { register } from "./../services/userService";
import auth from "../services/authService";

class registerForm extends Component {
  state = {
    data: {
      email: "",
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const response = await register(this.state.data);
    auth.loginWithJwt(response.headers["x-auth-token"]);
    window.location = "./";
  };

  handleChange = (e) => {
    const data = { ...this.state.data };

    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    return (
      <div className="w-full max-w-xs">
        <form
          onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.data.username}
              type="username"
              name="username"
              id="username"
              onChange={this.handleChange}
              placeholder="Eren"
            />
          </div>
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

export default registerForm;
