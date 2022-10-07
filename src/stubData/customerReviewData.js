import { v4 as uuidv4 } from "uuid";
import ProImgq1 from "../assets/proImg/pro-img-1.png";
import ProImgq2 from "../assets/proImg/pro-img-2.jpg";
import ProImgq3 from "../assets/proImg/pro-img-3.jpg";
import ProImgq4 from "../assets/proImg/pro-img-4.jpg";
import ProImgq5 from "../assets/proImg/pro-img-5.jpg";

const CustomerReviewData = [
  {
    id: uuidv4(),
    name: "Jean Hunter",
    title: "Founder Circle",
    proImage: ProImgq1,
    quote:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    id: uuidv4(),
    name: "Laura Lewis",
    title: "CEO Circle",
    proImage: ProImgq2,
    quote:
      "My co-worker Mohamed has one of these. He says it looks brown. this Coca-Cola is smooth.",
  },
  {
    id: uuidv4(),
    name: "Michael Bell",
    title: "CTO Arrow",
    proImage: ProImgq3,
    quote:
      "There is a letter generator here, useful for scattergories if you lost your letter dice. I thought the 1 star score was unfair. It almost made me overlook this app.",
  },
  {
    id: uuidv4(),
    name: "Landon Butler",
    title: "Founder Arrow",
    proImage: ProImgq4,
    quote:
      "Google has created this problem by creating this new Local Guide points and its affecting businesses reputation and Google is unwilling to do anything about it??",
  },
  {
    id: uuidv4(),
    name: "Bessie Moreno",
    title: "COO BENQ",
    proImage: ProImgq5,
    quote:
      "Google seems to be taking down reviews without even making an effort to ascertain if the reviews are real or fake these days.",
  },
];

export default CustomerReviewData;
