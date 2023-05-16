import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import React from "react";

const Nav = () => {
  return (
    <center>
      <div className="divNav">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="diva">
          <Link className="aNav" to="home">
            Home
          </Link>
          <Link className="aNav" to="livre">
            Livre
          </Link>
          <Link className="aNav" to="contact">
            Contact
          </Link>
        </div>
      </div>
    </center>
  );
};
export default Nav;
