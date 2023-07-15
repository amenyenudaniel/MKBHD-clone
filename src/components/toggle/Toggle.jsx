import React from "react";
import "./Toggle.css";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Toggle = ({ darkmode, setDarkmode }) => {
  return (
    <div className="toggle__">
      <div
        className="toggle__icon__container"
        onClick={() => (darkmode ? setDarkmode(false) : setDarkmode(true))}
      >
        <i className="moon">
          <BsMoonFill />
        </i>
        <i className="sun">
          <BsFillSunFill />
        </i>
        <div
          className="round__btn"
          style={darkmode ? { left: "2.2rem" } : { right: "2.2rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
