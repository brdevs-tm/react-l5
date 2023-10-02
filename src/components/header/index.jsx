import React, { Component } from "react";

import battery from "../../assets/header/battery.svg";
import antenna from "../../assets/header/antenna.png";

import "./index.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }
  render() {
    const { time } = this.state;
    const formattedTime = time.toLocaleTimeString(undefined, {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
      <div className="header">
        <div className="left">
          <div className="time">
            <span>{formattedTime}</span>
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
