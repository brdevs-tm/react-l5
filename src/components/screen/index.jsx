import React, { Component } from "react";

import "./index.css";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";

export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="relative-screen">
          <Header />
          <Footer />
          <Main />
        </div>
      </div>
    );
  }
}
