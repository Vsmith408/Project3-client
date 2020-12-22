import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Project Name
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={
                  window.location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
