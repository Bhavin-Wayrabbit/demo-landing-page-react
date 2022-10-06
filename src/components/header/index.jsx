import "./style.css";
import heroImg from "../../assets/icons/hero.png";
import React from "react";
import ButtonLabled from "../buttons/button_labled";

export default function Header() {
  return (
    <div className={"header"}>
      <div className="header-body">
        <div className="header-body-l">
          <h2 className="header-body-heading">Virtual healthcare for you</h2>
          <p className="header-body-content">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <ButtonLabled lable={"Consult today"} />
        </div>
        <div className="header-body-r">
          <img src={heroImg} alt="" className="header-hero-img" />
        </div>
      </div>
    </div>
  );
}
