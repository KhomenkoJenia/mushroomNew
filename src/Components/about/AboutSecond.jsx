import React from "react";
import "./about.scss";
import myImageAbout from "./aboutSecond.png";

const AboutContantSecond = () => {
  return (
    <div className="about">
      <div className="about__descripthon">
        - креативні професіонали, що розвиваються в індустрії маркетингу, IT,
        дизайну, наприклад: фотографи, відеографи, контент-креатори, графічні
        дизайнери, ілюстратори, smm-менеджери, креативні копірайтери,
        арт-директори і т.д <br />
        <br />
        - власники креативних бізнесів, старт-апів, агенцій, власники брендів,
        що прагнуть розвивати економіку та підтримувати один одного
        <br />
        <br />
        - мікро-інфлюєнсери, які висвітлюють свій спосіб життя у соціальних
        мережах та готові ділитися зі своєю аудиторією новими ідеямми та
        продуктами на ринку України
        <br />
        <br />
        - молоді та креативні люди, що готові вкладати час та гроші у
        саморозвиток, цінують якісні та стильні продукти, обожнюють новинки
        <br />
        <br />- ентузіастіи моди та дизайну, які стежать за останніми трендами
        та хочуть виглядати круто та стильно, цінують дизайн та естетику, готові
        вкладати час та гроші, щоб виглядати на висоті
      </div>
      <div className="about__img">
        <img
          className="second-about-img"
          src={myImageAbout}
          alt="Some description"
        />
      </div>
    </div>
  );
};

export default AboutContantSecond;
