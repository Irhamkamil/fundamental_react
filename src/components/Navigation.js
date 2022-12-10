import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FcHome, FcPlus, FcDatabase } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FcHome />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FcPlus />
          </Link>
        </li>
        <li>
          <Link to="/arsip">
            <FcDatabase />
          </Link>
        </li>
        <li>
          <section onClick={logout}>
            {name}
            <FiLogOut />
          </section>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
