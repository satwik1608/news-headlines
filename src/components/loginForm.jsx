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
      await auth.login(data.username, data.password);
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
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
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

          <button className="btn btn-primary m-2">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default loginForm;
