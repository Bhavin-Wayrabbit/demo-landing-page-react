import "./style.css";
import LogoWhite from "../../assets/logos/logo-white.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="fooret-info">
          <div className="footer-info-b-logo">
            <img src={LogoWhite} alt="" className="f-info-b-img" />
          </div>
          <div className="f-info-dis">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </div>
          <div className="f-info-c-r">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-menu-container">
            <div className="f-menu-title">Company</div>
            <div className="f-menu-items">About</div>
            <div className="f-menu-items">Testimonials</div>
            <div className="f-menu-items">Find a doctor</div>
            <div className="f-menu-items">Apps</div>
          </div>
          <div className="footer-menu-container">
            <div className="f-menu-title">Region</div>
            <div className="f-menu-items">Indonesia</div>
            <div className="f-menu-items">Singapore</div>
            <div className="f-menu-items">Hongkong</div>
            <div className="f-menu-items">Canada</div>
          </div>
          <div className="footer-menu-container">
            <div className="f-menu-title">Help</div>
            <div className="f-menu-items">Help center</div>
            <div className="f-menu-items">Contact support</div>
            <div className="f-menu-items">Instructions</div>
            <div className="f-menu-items">How it works</div>
          </div>
        </div>
      </div>
    </div>
  );
}
