import React from "react";
import "./about.scss";
import myImageSecond from "./sildery.png";

const AboutContant = () => {
  return (
    <div className="about">
      <div className="about__descripthon">
        Mushroom — молодий та амбіційний виробник комбучі, що поєднує досвід у
        створені якісної продукції з крутим маркетингом та точним розумінням
        цільової аудиторії.
        <br />
        Ми створюємо нові стандарти на ринку безалкогольних напоїв та прагнемо
        змінити Україну одним ковтком за раз.
        <br />
        Mushroom — не просто продукція.
        <br />
        Mushroom — це стиль життя.
        <br />
        Наша мета — виступити смачною та корисною заміною
        <br />
        традиційним солодким газованим напоям і допомогти вашим
        <br />
        клієнтам кайфувати від життя, без шкоди для здоровʼя.
        <br />
        Приєднуйтесь до нашої революції та відкрийте для себе нові
        <br />
        можливості безалкогольних напоїв.
        <br />
      </div>
      <div className="about__img">
        <img className="img-fluid" src={myImageSecond} alt="Some description" />
      </div>
    </div>
  );
};

export default AboutContant;
