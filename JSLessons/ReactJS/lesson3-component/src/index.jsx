import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./sass/style.css";
import MyList from './components/List'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <h2>Hello1</h2>
        <MyList />
 
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
