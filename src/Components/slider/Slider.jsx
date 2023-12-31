import React, { Component, useEffect, useRef, useState } from "react";
import "./slider.css";
import "./slider";

class Slider extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <div className="cardList">
            <button className="cardList__btn btn btn--left">
              <div className="icon">
                <svg>
                  <use href="#arrow-left"></use>
                </svg>
              </div>
            </button>

            <div className="cards__wrapper">
              <div className="card current--card">
                <div className="card__image">
                  <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                </div>
              </div>

              <div className="card next--card">
                <div className="card__image">
                  <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                </div>
              </div>

              <div className="card previous--card">
                <div className="card__image">
                  <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                </div>
              </div>
            </div>

            <button className="cardList__btn btn btn--right">
              <div className="icon">
                <svg>
                  <use href="#arrow-right"></use>
                </svg>
              </div>
            </button>
          </div>

          <div className="infoList">
            <div className="info__wrapper">
              <div className="info current--info">
                <h1 className="text name">Highlands</h1>
                <h4 className="text location">Scotland</h4>
                <p className="text description">The mountains are calling</p>
              </div>

              <div className="info next--info">
                <h1 className="text name">Machu Pichu</h1>
                <h4 className="text location">Peru</h4>
                <p className="text description">Adventure is never far away</p>
              </div>

              <div className="info previous--info">
                <h1 className="text name">Chamonix</h1>
                <h4 className="text location">France</h4>
                <p className="text description">Let your dreams come true</p>
              </div>
            </div>
          </div>

          <div className="app__bg">
            <div className="app__bg__image current--image">
              <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
            </div>
            <div className="app__bg__image next--image">
              <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
            </div>
            <div className="app__bg__image previous--image">
              <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
            </div>
          </div>

          <div className="loading__wrapper">
            <div className="loader--text">Loading...</div>
            <div className="loader">
              <span></span>
            </div>
          </div>

          <div className="support">
            <a href="https://twitter.com/DevLoop01" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://dribbble.com/devloop01" target="_blank">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
        );
      </div>
    );
  }
}

export default Slider;
