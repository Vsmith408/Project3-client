import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../components/App.css";
import Navbar from "../components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/HomePage";
import Favs from "./pages/Favs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="./pages/About">
              <About />
            </Route>
            <Route path="./pages/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="./pages/favs">
                <Favs />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
