import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
