import { v4 as uuidv4 } from "uuid";

import icnSearch from "../assets/icons/icn_search.svg";
import icnPharma from "../assets/icons/icn_pharma.svg";
import icnConsult from "../assets/icons/icn_consult.svg";
import icnDInfo from "../assets/icons/icn_d_info.svg";
import icnEcCare from "../assets/icons/icn_ec_care.svg";
import icnTracking from "../assets/icons/icn_tracking.svg";

const SmallCardContainer = [
  {
    id: uuidv4(),
    img: icnSearch,
    title: "Search doctor",
    body: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    id: uuidv4(),
    img: icnPharma,
    title: "Online pharmacy",
    body: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    id: uuidv4(),
    img: icnConsult,
    title: "Consultation",
    body: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    id: uuidv4(),
    img: icnDInfo,
    title: "Details info",
    body: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    id: uuidv4(),
    img: icnEcCare,
    title: "Emergency care",
    body: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    id: uuidv4(),
    img: icnTracking,
    title: "Tracking",
    body: "Track and save your medical history and health data",
  },
];

export default SmallCardContainer;
