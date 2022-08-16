import React, { Component } from 'react'
import ProductItem from './ProductItem'
import produtcs from '../data/productdata'
class Products extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <div className="row">
            
            {produtcs.map((fd)=>{
              return <ProductItem photo={fd.img} name={fd.name} model={fd.model} />
            })}

        
        </div>
      </div>
    )
  }
}

export default Products