import "./style.css";
import React from "react";
import CardLarge from "../../cards/body_large_card";

export default function MainBodyContainer({ data = [] }) {
  return (
    <div className="main-body-content">
      {data.map(function (elem) {
        return (
          <CardLarge
            lcImage={elem.img}
            lcDis={elem.discription}
            lcTitle={elem.title}
            key={elem.id}
          />
        );
      })}
    </div>
  );
}
