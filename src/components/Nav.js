import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {

  return (
    <nav>
      <div>Logo</div>
      <ul className="navItems" >
        <Link className="link" to="/about" >
          <li>About</li>
        </Link>
        <Link className="link" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
