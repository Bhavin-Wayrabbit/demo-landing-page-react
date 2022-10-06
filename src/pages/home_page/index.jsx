import "./style.css";
import React from "react";
import Header from "../../components/header";
import Seprator from "../../components/seprator";

import ButtonLabledTransparent from "../../components/buttons/button_transparent";

import CardContainer from "../../components/containers/cards_container";
import MainBodyContainer from "../../components/containers/main_body_container";
import ArticleContainer from "../../components/containers/article_container";

import MainContentData from "../../stubData/mainBodyContainer";
import SmallCardContainer from "../../stubData/smallCardContainer";
import ArticleData from "../../stubData/articleData";

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

        <CardContainer data={SmallCardContainer} />
        <ButtonLabledTransparent lable={"Learn more"} />
      </div>

      <MainBodyContainer data={MainContentData} />

      <div className="home-article">
        <div className="article-heading">Check out our latest article</div>
        <Seprator />
        <ArticleContainer data={ArticleData} />
        <ButtonLabledTransparent lable={"View all"} />
      </div>
    </div>
  );
}
