import "./style.css";
import React from "react";
import CardService from "../../cards/service_cards";

export default function CardContainer({ data = [] }) {
  return (
    <div className="service-content-cards-container">
      {data.map(function (data, index) {
        return (
          <CardService
            cardTitle={data.title}
            cardImg={data.img}
            cardBody={data.body}
            key={data.id}
          />
        );
      })}
    </div>
  );
}
