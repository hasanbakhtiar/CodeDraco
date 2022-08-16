import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Products />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
