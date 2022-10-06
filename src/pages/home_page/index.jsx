import "./style.css";
import React from "react";
import Header from "../../components/header";
import CardContainer from "../../components/cards_container";
import Seprator from "../../components/seprator";
import ButtonLabledTransparent from "../../components/button_transparent";
import MainBodyContainer from "../../components/main_body_container";

export default function HomePage() {
  return (
    <div className="home-page">
      <header>
        <Header />
      </header>

      <div className="services">
        <div className="services-heading">Our services</div>
        <Seprator />
        <div className="services-content">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </div>
        <CardContainer />
        <ButtonLabledTransparent lable={"Learn more"} />
      </div>
      <MainBodyContainer />
    </div>
  );
}
