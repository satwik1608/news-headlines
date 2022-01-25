import React, { Component } from "react";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import addHeadline from "./components/addHeadline";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/add-headline" component={addHeadline}></Route>
          <Route path="/" component={Cards}></Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
