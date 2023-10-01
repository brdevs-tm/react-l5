import React, { Component } from "react";

import "./index.css";

import callIcon from "../../assets/footer/call.png";
import smsIcon from "../../assets/footer/sms.png";
import contactIcon from "../../assets/footer/contacts.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="apps call">
          <img src={callIcon} alt="call Icon" />
        </div>
        <div className="apps sms">
          <img src={smsIcon} alt="sms Icon" />
        </div>
        <div className="apps contacts">
          <img src={contactIcon} alt="contact Icon" />
        </div>
      </div>
    );
  }
}
