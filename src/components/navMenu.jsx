import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Media } from "../pages/media";
import { Portfolio } from "../pages/portfolio";

const NaviRoute = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/media"} className="nav-link">
              Media
            </Link>
          </li>
          <li>
            <Link to={"/portfolio"} className="nav-link">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/media" component={Media} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  </Router>
);

export default NaviRoute;
