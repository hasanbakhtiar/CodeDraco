import axios from 'axios';
import React, { Component } from 'react'
import Nav from './Nav'
import Search from './Search'
import Users from './Users';

export class App extends Component {
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.state={
            users:[]
        }
    }
    searchUser(keyword){
        axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res)=> this.setState({users: res.data.items}))
    }
  render() {
    return (
      <div>
        <Nav icon="fa-brands fa-github-alt" title=" Github" url="https://github.com"/>
        <Search searchValue={this.searchUser}/>
        <Users uservalue={this.state.users}/>
        {/* {console.log(this.state.users)} */}
      </div>
    )
  }
}

export default App