import "./style.css";
import React from "react";

export default function Card({ cardTitle, cardImg, cardBody }) {
  return (
    <div className="s-card">
      <div className="s-card-content">
        <div className="s-card-img-container">
          <img src={cardImg} alt="" className="s-card-img" />
        </div>
        <div className="s-card-title">{cardTitle}</div>
        <div className="s-card-body">{cardBody}</div>
      </div>
    </div>
  );
}
