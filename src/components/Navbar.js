import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const appCtx = useContext(AppContext);
  const { toggleTheme, theme } = appCtx;
  console.log("Theme is::", theme);
  const classes =
    theme === "light" ? "fa fa-moon-o fa-2x" : "fa fa-sun-o fa-2x";

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            <i className="nav_icons fa fa-home fa-2x"></i>
            <span className="nav_text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">
            <i className="nav_icons fa fa-camera fa-2x"></i>
            <span className="nav_text">Gallery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            <i className="nav_icons fa fa-envelope-o fa-2x"></i>
            <span className="nav_text">FAQ</span>
          </NavLink>
        </li>
        {/* <li>
          <button onClick={toggleTheme}>
            <i className={classes}></i>
          </button>
        </li> */}
      </ul>
    </nav>
  );
};
export default Navbar;
