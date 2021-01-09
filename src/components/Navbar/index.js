import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../pages/Login";
import Logout from "../pages/Logout";



class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Travel App
          </Link>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              {/* <Link
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
            </li> */}
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
            <div class="loginAuth">
                <li className="nav-item">
                  <Login>{
                    
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                    }
                <Logout/> : </Login>
              </li>
          </div>    
        </ul>
      </div>
    </nav>
  );
}
}

export default Navbar;