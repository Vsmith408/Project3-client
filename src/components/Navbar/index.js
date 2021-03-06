import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import { withAuth0 } from '@auth0/auth0-react'

import Login from '../pages/Login'
import Logout from '../pages/Logout'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    console.log(this.props)
    return (
      <nav className="navbar ">
        {/* <div className="container"> */}
        <Link className="navbar-brand" to="/">
          Travel App
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === '/about'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/favorite"
              className={
                window.location.pathname === '/favorite'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Favorites
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === '/profile'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Profile
            </Link>
          </li>

          <div className="loginAuth">
            <li className="nav-item">
              <Login>
                {window.location.pathname === '/login'
                  ? 'nav-link active'
                  : 'nav-link'}
              </Login>{' '}
              <Logout />
            </li>
          </div>
        </ul>
      </nav>
    )
  }
}

export default withAuth0(Navbar)
