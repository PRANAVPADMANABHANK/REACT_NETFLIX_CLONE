import React from "react";
import { ImSearch } from "react-icons/im";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="navtitle">
        <a className="tags" href="/">
          Tv Shows
        </a>
        <a className="tags" href="/">
          Movies
        </a>
        <a className="tags" href="/">
          Recently Added
        </a>
        <a className="tags" href="/">
          My List
        </a>
      </div>
      <div className="search-icon">
        <ImSearch />
      </div>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
