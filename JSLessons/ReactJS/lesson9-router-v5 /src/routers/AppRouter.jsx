import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
