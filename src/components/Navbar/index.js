import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../pages/Login";
import Logout from "../pages/Logout";



class Navbar extends Component {
state = { clicked: false }

handleClick = () => {
  this.setState({ clicked: !this.state.clicked })
}

  render() {
    return (
      <nav className="navbar ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Travel App
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            
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