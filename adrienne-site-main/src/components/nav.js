import React, { useEffect } from "react";
import { Link } from "gatsby";

const Nav = ({ navData }) => {
  return (
    <header>
      <div className="header-wrapper">
        <Link to="/">
          <div className="logo-image">
            <img src="/ar-logo.png" />
            <h1>Adrienne Reisman</h1>
          </div>
        </Link>
        <div className="links-wrapper">
          <div className="links">
            <Link
              className={navData === "retouching" ? "active" : ""}
              to="/retouching"
            >
              Retouching
            </Link>
            <Link
              className={navData === "journals" ? "active" : ""}
              to="/journals"
            >
              Journals
            </Link>
            <Link className={navData === "about" ? "active" : ""} to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
