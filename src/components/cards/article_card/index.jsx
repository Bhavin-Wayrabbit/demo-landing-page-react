import ButtonArrow from "../../buttons/button_arrow";
import "./style.css";

export default function CardArticle({ cImg, cTitle, cDis }) {
  return (
    <div className="article-card">
      <div className="article-card-img-con">
        <img src={cImg} alt="" className="article-card-img" />
      </div>
      <div className="article-card-main-cont">
        <div className="article-card-title">{cTitle}</div>
        <div className="article-card-dis">{cDis}</div>
        <ButtonArrow />
      </div>
    </div>
  );
}
