import "./style.css";
import React from "react";

export default function Seprator({ style }) {
  return (
    <div className="services-seprator-container">
      <div className="services-seprator" style={style}></div>
    </div>
  );
}
