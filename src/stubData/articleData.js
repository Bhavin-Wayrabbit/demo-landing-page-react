import { v4 as uuidv4 } from "uuid";
import ArticleImg1 from "../assets/images/img-1.jpg";
import ArticleImg2 from "../assets/images/img-2.jpg";
import ArticleImg3 from "../assets/images/img-3.jpg";

const ArticleData = [
  {
    id: uuidv4(),
    img: ArticleImg1,
    title: "Disease detection, check up in the laboratory",
    discription:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    id: uuidv4(),
    img: ArticleImg2,
    title: "Herbal medicines that are safe for consumption",
    discription:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    id: uuidv4(),
    img: ArticleImg3,
    title: "Natural care for healthy facial skin",
    discription:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

export default ArticleData;
