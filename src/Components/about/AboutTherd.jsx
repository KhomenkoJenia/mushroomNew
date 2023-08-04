import React from "react";
import "./about.scss";
import myImageTherd from "./aboutTherd.png";

const AboutContantTherd = () => {
  return (
    <div className="about">
      <div className="about__descripthon">
        Mushroom Kombucha — насичена та ігриста, виготовлена з повністю
        натуральних інгридієнтів, корисна та смачненька. Незвичайне поєднання
        смакових дескрипторів викликає бажання та зацікавленість аудиторії
        скуштувати кожний з них.
        <br />
        <br />
        Ми розробили перші 3 смаки, з якими залітаємо на ринок безалкогольних
        напоїв у влучний момент тепла та високої потреби ваших клієнтів у
        якісних освіжаючих прохолодних напоях.
        <br />
        <br />
        Додатково у розробці Mushroom знаходиться ще 2 смаки, які ми будемо
        готові презентувати найближчим часом.
        <br />
        <br />
      </div>
      <div className="about__img">
        <img className="img-fluid" src={myImageTherd} alt="Some description" />
      </div>
    </div>
  );
};

export default AboutContantTherd;
