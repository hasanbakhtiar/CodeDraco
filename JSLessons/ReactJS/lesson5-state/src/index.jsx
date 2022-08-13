import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BookList />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
