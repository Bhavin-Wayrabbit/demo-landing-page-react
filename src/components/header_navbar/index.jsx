import "./style.css";
import logoImg from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import React from "react";

export default function HeaderNavbar() {
  return (
    <div className={"header-navbar"}>
      <div className={"header-logo"}>
        <img
          src={logoImg}
          alt="logo wil be here.."
          className={"header-logo-image"}
        />
      </div>
      <div className={"header-menu"}>
        <div className={"header-menu-container"}>
          <div className={`header-menu-items active`}>
            <Link exact="true" to="/" className="link">
              Home
            </Link>
          </div>

          <div className={`header-menu-items`}>Find a doctor</div>
          <div className={`header-menu-items`}>Apps</div>
          <div className={`header-menu-items`}>Testimonials</div>
          <div className={`header-menu-items`}>About us</div>
        </div>
      </div>
    </div>
  );
}
