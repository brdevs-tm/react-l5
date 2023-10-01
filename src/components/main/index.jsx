import React, { Component } from "react";

import "./index.css";

import app from "../../assets/screen/app.svg";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="app">
          <img src={app} alt="app" />
          <span className="app-name">Cardmon</span>
        </div>
      </div>
    );
  }
}
