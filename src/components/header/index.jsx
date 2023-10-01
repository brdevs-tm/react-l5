import React, { Component } from "react";

import battery from "../../assets/header/battery.svg";
import antenna from "../../assets/header/antenna.png";

import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <div className="time">
            <span>16:46</span>
          </div>
          <div className="notifs"></div>
        </div>
        <div className="center">
          <div className="camera">
            <div className="cam-dot"></div>
          </div>
        </div>
        <div className="right">
          <div className="antenna">
            <img src={antenna} alt="antenna" />
          </div>
          <div className="battery">
            <img src={battery} alt="battery" />
          </div>
        </div>
      </div>
    );
  }
}
