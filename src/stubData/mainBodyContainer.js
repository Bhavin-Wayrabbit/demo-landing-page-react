import { v4 as uuidv4 } from "uuid";
import imgHelthCProvider from "../assets/images/helth-c-provider.png";
import imgMobileApp from "../assets/images/mobile-app.png";

const MainContentData = [
  {
    id: uuidv4(),
    img: imgHelthCProvider,
    title: "Leading healthcare providers",
    discription:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
  },
  {
    id: uuidv4(),
    img: imgMobileApp,
    title: "Download our mobile apps",
    discription:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
];

export default MainContentData;
