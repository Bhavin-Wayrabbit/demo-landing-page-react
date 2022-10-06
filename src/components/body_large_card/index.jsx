import "./style.css";
import React from "react";
import Seprator from "../../components/seprator";
import ButtonLabledTransparent from "../../components/button_transparent";

export default function LargeCard({ lcImage, lcTitle, lcDis }) {
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
