import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.props.uservalue.map((u,index)=>(
            <User calluser={u} key={index}/>
            ))}
        </div>
      </div>
    )
  }
}

export default Users