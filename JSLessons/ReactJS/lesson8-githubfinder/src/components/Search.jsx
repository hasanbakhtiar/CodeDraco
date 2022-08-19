import React, { Component } from "react";

class Search extends Component {
    constructor(props){
            super(props);
            this.inputChange = this.inputChange.bind(this);
            this.inputSubmit = this.inputSubmit.bind(this);
            this.state={
                keyword:""
            }
    }
    inputChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    inputSubmit(e){
            e.preventDefault();
            this.props.searchValue(this.state.keyword)
    }
  render() {
    return (
      <form onSubmit={this.inputSubmit}>
        <div className="container my-3">
          <div className="input-group">
            <input onChange={this.inputChange} type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
        {/* {this.state.keyword} */}
      </form>
    );
  }
}

export default Search;
