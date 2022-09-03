import React, { Component, Fragment } from "react";
import './sass/style.css';
import ReactDOM from "react-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Hello</h1>
//       </Fragment>
//     );
//   }
// }


// function App(){
//   return(
//     <h1>Hello1</h1>
//   )
// }


// const App =()=>{
//   return(
//     <h1>Hello2</h1>
//   )
// }

ReactDOM.render(<App />, document.querySelector("#root"));
