import React, { Component } from 'react'

class Dropdown extends Component {
  render() {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.carname}
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">{this.props.model1}</a></li>
          <li><a className="dropdown-item" href="#">{this.props.model2}</a></li>
       
        </ul>
      </li>
    )
  }
}

export default Dropdown