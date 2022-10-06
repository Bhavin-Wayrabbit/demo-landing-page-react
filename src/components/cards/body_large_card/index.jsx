import "./style.css";
import React from "react";
import Seprator from "../../seprator";
import ButtonLabledTransparent from "../../buttons/button_transparent";

export default function CardLarge({ lcImage, lcTitle, lcDis }) {
  return (
    <div className="m-body-content-card">
      <div className="m-body-content-image">
        <img src={lcImage} alt="" />
      </div>
      <div className="m-body-content-b">
        <div className="m-body-content-b-title">{lcTitle}</div>
        <Seprator />
        <div className="m-body-content-b-dis">{lcDis}</div>
        <ButtonLabledTransparent lable={"Learn more"} />
      </div>
    </div>
  );
}
