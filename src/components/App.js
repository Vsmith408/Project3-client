import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../components/App.css";
import Navbar from "../components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/HomePage";

import Profile from "./pages/Profile";

import Favorites from "./pages/Favorites";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/favorite">
              <Favorites />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
