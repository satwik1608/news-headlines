import React, { Component } from "react";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import addHeadline from "./components/addHeadline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/add-headline/:id" component={addHeadline}></Route>
          <Route path="/" component={Cards}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
