import React, { Component } from "react";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import addHeadline from "./components/addHeadline";
import registerForm from "./components/registerForm";
import loginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route
              path="/add-headline/:id"
              render={(props) => {
                if (!user) return <Redirect to="/login" />;
                return <addHeadline {...props} />;
              }}
            />
            <Route path="/register-user" component={registerForm}></Route>
            <Route path="/login" component={loginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/" component={Cards}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
