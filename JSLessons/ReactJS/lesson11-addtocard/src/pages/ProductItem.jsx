import React from 'react'

const ProductItem = ({photo,brandp,modelp,yearp,colorp,pricep}) => {
  return (
    <div className="card col-12 col-sm-6 col-md-3" >
  <img src={photo} className="card-img-top" alt={photo}/>
  <div className="card-body">
    <h5 className="card-title">{brandp}</h5>
    <p className="card-text">{modelp}</p>
    <p className="card-text">{yearp}</p>
    <p className="card-text">{colorp}</p>
    <p className="card-text">{pricep}$</p>
    <a href="#" className="btn btn-primary">add to cart</a>
  </div>
</div>
  )
}

export default ProductItem