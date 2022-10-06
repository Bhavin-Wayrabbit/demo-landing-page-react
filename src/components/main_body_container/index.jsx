import "./style.css";
import React from "react";
import imgHelthCProvider from "../../assets/images/helth-c-provider.png";
import imgMobileApp from "../../assets/images/mobile-app.png";
import LargeCard from "../body_large_card";

export default function MainBodyContainer() {
  const data = [
    {
      img: imgHelthCProvider,
      title: "Leading healthcare providers",
      discription:
        "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    },
    {
      img: imgMobileApp,
      title: "Download our mobile apps",
      discription:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
  ];
  return (
    <div className="main-body-content">
      {data.map(function (elem, index) {
        return (
          <LargeCard
            lcImage={elem.img}
            lcDis={elem.discription}
            lcTitle={elem.title}
            key={index}
          />
        );
      })}
    </div>
  );
}
