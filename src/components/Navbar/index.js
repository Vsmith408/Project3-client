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
        {/* <div className="container"> */}
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
<<<<<<< HEAD
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
        {/* </div> */}
      </nav>
    );
  }
=======
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
>>>>>>> b4922bf781a8f33b960e4b4b45a7cd80259a51bf
}

export default Navbar;