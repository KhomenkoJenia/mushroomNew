import React, { Component } from "react";
import "./ward.scss";

class WardObs extends Component {
  render() {
    return (
      <div class="loader">
        <div class="head"></div>

        <div class="flames">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>

        <div class="eye"></div>
      </div>
    );
  }
}

export default WardObs;
