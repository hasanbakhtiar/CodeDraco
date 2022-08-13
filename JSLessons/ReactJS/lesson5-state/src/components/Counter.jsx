import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decerement = this.decerement.bind(this);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decerement() {
  if (this.state.count > 0) {
    this.setState({
        count: this.state.count - 1,
      });
  }
  }
  render() {
    return (
      <div className="container mt-5">
        <button onClick={this.decerement} className="btn btn-danger">
          -1
        </button>
        <span className="mx-2">{this.state.count}</span>
        <button onClick={this.increment} className="btn btn-success">
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
