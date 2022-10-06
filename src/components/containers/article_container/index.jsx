import CardArticle from "../../cards/article_card";
import "./style.css";

export default function ArticleContainer({ data }) {
  return (
    <div className="article-card-container">
      {data.map(function (article) {
        return (
          <CardArticle
            cDis={article.discription || ""}
            cImg={article.img || ""}
            cTitle={article.title || ""}
            key={article.id || ""}
          />
        );
      })}
    </div>
  );
}
