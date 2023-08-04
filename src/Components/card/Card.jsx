import React, { Component } from "react";
import "./card.css";
import myImage from "./shopfoto.png";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div>
          <img src={myImage} alt="Описание изображения"></img>
        </div>
        <p class="heading">Кавун Диня</p>
        <p>тонізуючий, кислотний, смачний</p>
        <button>Спробувати</button>
      </div>
    );
  }
}

export default Card;
