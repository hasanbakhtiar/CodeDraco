import React from "react";
import  ReactDOM  from "react-dom";
import './sass/style.scss';
import myImg from './img/nnsplash.jpg';

class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello, react with webpack my best technology</h1>
            <div className="box"></div>
            <p>Hello webpack dev server</p>
            <img width="300" src={myImg} alt="" />

            </>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));