import '../App.css';
import React from 'react';
import { Router, Route } from 'react-router'
import MainLayout from './layouts/main_layout.jsx';
import EmptyLayout from './layouts/empty_layout.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/not_found.jsx';
import SignIn from './pages/sign_in.jsx';

const NaviRoute = () => (
  <Router>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
    <Route component={EmptyLayout}>
      <Route path="/sign-in" component={SignIn} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
);

export default NaviRoute;