import { Link } from "react-router-dom";
import React from "react";

function Nav(props) {
  return (
    <div className="navBar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/news">
        <div>News</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}

export default Nav;