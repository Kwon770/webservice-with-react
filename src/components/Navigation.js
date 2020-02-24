import React from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";
import "./Navigation.css";

// To use "Link" from "react-router-dom", be mind usage from App.js
function Navigation() {
  // "a" with "href" will kill and refresh react to load new things
  // "link" with "to" will not kill and jus refresh react
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
