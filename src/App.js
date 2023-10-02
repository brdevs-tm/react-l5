import React, { Component } from "react";

import "./App.css";
// import { Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

export default class App extends Component {
  render() {
    return (
      <div className="screen">
        <div className="relative-screen">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}
