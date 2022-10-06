import "./style.css";
import ArrowRsvg from "../../../assets/vectors/arrow-r.svg";

export default function ButtonArrow({ lable = "Read ore" }) {
  return (
    <div className="btn-read-more">
      {lable}
      <div className="btn-arrow-r">
        <img src={ArrowRsvg} alt="" className="btn-arrow-r-img" />
      </div>
    </div>
  );
}
