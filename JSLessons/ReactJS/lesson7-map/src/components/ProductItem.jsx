import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    return (
        <div className="card col-12 col-sm-6 col-md-4">
        <img height="300" src={this.props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.model}</p>
        </div>
      </div>
    )
  }
}

export default ProductItem