import "./style.css";
import React from "react";
import icnSearch from "../../assets/icons/icn_search.svg";
import icnPharma from "../../assets/icons/icn_pharma.svg";
import icnConsult from "../../assets/icons/icn_consult.svg";
import icnDInfo from "../../assets/icons/icn_d_info.svg";
import icnEcCare from "../../assets/icons/icn_ec_care.svg";
import icnTracking from "../../assets/icons/icn_tracking.svg";
import Card from "../cards";

export default function CardContainer() {
  const data = [
    {
      img: icnSearch,
      title: "Search doctor",
      body: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      img: icnPharma,
      title: "Online pharmacy",
      body: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      img: icnConsult,
      title: "Consultation",
      body: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: icnDInfo,
      title: "Details info",
      body: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: icnEcCare,
      title: "Emergency care",
      body: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      img: icnTracking,
      title: "Tracking",
      body: "Track and save your medical history and health data",
    },
  ];
  return (
    <div className="service-content-cards-container">
      {data.map(function (data, index) {
        return (
          <Card
            cardTitle={data.title}
            cardImg={data.img}
            cardBody={data.body}
            key={index}
          />
        );
      })}
    </div>
  );
}
