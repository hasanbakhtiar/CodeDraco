import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const initialCount = {
  count:0
};
const store = createStore((state=initialCount,action)=>{
    switch(action.type){
      case "INCREMENT":
        const newdata = 
        typeof action.newvalue === 'number' ? action.newvalue : 1;
        return {count: state.count + newdata};
      case "DECEREMENT":
        return {count:state.count -newdata };
      case "RESET":
        return {count:0};
      default:
      return {count:state.count};
    }
  })
  store.subscribe(()=>{

    console.log(store.getState());
  })

store.dispatch({
  type:"INCREMENT",
  newvalue:10
})


store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"DECREMENT"
})






class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
