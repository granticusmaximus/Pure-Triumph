import '../App.css';
import React from 'react';
import { Router, Route } from 'react-router';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { Media } from '../pages/media';
import { Portfolio } from '../pages/portfolio';

const NaviRoute = () => (
  <div className={"navbar-default"} style={{ backgroundColor: "#263342", height: "60px", color: "white" }}>
    <div className={"container-fluid"}>
        <div className={"row"}>
            <div className={"navbar"}>
              <Router>
                <Route component={MainLayout}>
                  <Route path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/media" component={Media} />
                  <Route path="/portfolio" component={Portfolio} />
                </Route>
              </Router>
            </div>
        </div>
    </div>
  </div>
);

export default NaviRoute;