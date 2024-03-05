import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/hotels-styles/header.css"
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span style={{fontWeight: "700"}}>RAW <span style={{color:"white"}}>-TheExplorers</span></span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item marg">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item  marg">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item  marg">
              <NavLink
                exact
                to="/hotels"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item marg">
              <NavLink
                exact
                to="/flights"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Flights
              </NavLink>
            </li>
            <li className="nav-item marg">
              <NavLink
                exact
                to="/buses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buses
              </NavLink>
            </li>
            <li className="nav-item">
            <button className="btg">
            <a href="/"> Log In</a>
            </button>
            </li>
            <li className="nav-item">
            <button className="btr">
               <a href="/"> Register </a>
            </button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
 