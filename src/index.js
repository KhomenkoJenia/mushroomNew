import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Components/menu/Navbar";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Components/slider/Mainslider.jsx";
import "./Components/UI/button/MyButton.module.css";
import Card from "./Components/card/Card";
import LogoAnima from "./Components/UI/logo/LogoAnima";

import "./assets/fonts.scss";
import CityAnimathion from "./Components/city/CityAnimathion";
import WardObs from "./Components/ward/WardObs";
import MyContacts from "./Components/contact/Contacts";

import AboutContant from "./Components/about/about";
import AboutContantSecond from "./Components/about/AboutSecond";
import AboutContantTherd from "./Components/about/AboutTherd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="app-container">
      <div className="canvas-background">
        <App />
      </div>
      <Navbar />

      <WardObs />
      <MyContacts />
      <LogoAnima />
      <div className="box-card">
        {<Card />}
        {<Card />}
        {<Card />}
      </div>
      <div className="box-card">
        {<Card />}
        {<Card />}
      </div>

      <div className="main-contant">
        <h2>Комбуча — цу стиль життя, це про креатив, свободу, легкість</h2>

        <Slider />
      </div>
      <div className="main-contant">
        <h2>Де нас можна знайти та умови співпраці</h2>
        <h4>Гуртова ціна - 40 грн/пляшка (будь-який смак)</h4>
        <h4>Замовлення від 30 шт (пляшок)/ 1 ящик</h4>
        <h4>Доставка по Київу:</h4>
        <h4>- при замовленні до 3-х ящиків, курʼєрська доставка — 150 грн</h4>
        <h4>
          - при замовлення від 3-х ящиків, курʼєрська доставка — безкоштовна на
          наступний день після оплати
        </h4>
        <h4>Доставка по Україні:</h4>
        <h4>
          - при замовленні до 4-х ящиків, доставка згідно тарифами Нової пошти
        </h4>
        <h4>
          - при замовленні від 4-х ящиків, доставка Новою поштою безкоштовна до
          дверей вашого закладу
        </h4>
        <CityAnimathion />
      </div>
      <div className="main-contant">
        <h2>Про нас</h2>
        <AboutContant />
      </div>
      <div className="main-contant">
        <h2>Цільова аудиторія Mushroom — це:</h2>
        <AboutContantSecond />
      </div>
      <div className="main-contant">
        <h2>Наші особливості</h2>
        <AboutContantTherd />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
