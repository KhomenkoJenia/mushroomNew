import React from "react";
import "./slidermain.scss";

const Option = ({
  optionBackground,
  iconClass,
  mainText,
  subText,
  onClick,
  isActive,
}) => (
  <div
    className={`option ${isActive ? "active" : ""}`}
    style={{
      "--optionBackground": `url(${optionBackground})`,
      backgroundSize: "cover",
    }}
    onClick={onClick}
  >
    <div className="shadow"></div>
    <div className="label">
      <div className="icon">
        <div class="spinner">
          <div class="spinner1"></div>
        </div>
      </div>
      <div className="info">
        <div className="main">{mainText}</div>
        <div className="sub">{subText}</div>
      </div>
    </div>
  </div>
);

const Options = () => {
  const optionsData = [
    {
      optionBackground: require("./sildery.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./sliderw.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./slidere.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./sliderr.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./slidert.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./sliderq.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./slideru.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./sliderw.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },
    {
      optionBackground: require("./sliderq.png"),
      iconClass: "fas fa-walking",
      mainText: "Blonkisoaz",
      subText: "Omuke trughte a otufta",
    },

    // Add other option data objects here
  ];

  const [activeOption, setActiveOption] = React.useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="options">
      {optionsData.map((option, index) => (
        <Option
          key={index}
          optionBackground={option.optionBackground}
          iconClass={option.iconClass}
          mainText={option.mainText}
          subText={option.subText}
          onClick={() => handleOptionClick(index)}
          isActive={index === activeOption}
        />
      ))}
    </div>
  );
};

const Apple = () => (
  <div>
    <Options />
  </div>
);

export default Apple;
