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
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="title">Username</label>
            <input
              value={this.state.data.username}
              type="text"
              name="username"
              className="form-control"
              id="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="title">Email</label>
            <input
              value={this.state.data.email}
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Password</label>
            <input
              value={this.state.data.password}
              name="password"
              type="password"
              className="form-control"
              id="password"
              rows="3"
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-primary m-2">Register</button>
        </form>
      </React.Fragment>
    );
  }
}

export default registerForm;
