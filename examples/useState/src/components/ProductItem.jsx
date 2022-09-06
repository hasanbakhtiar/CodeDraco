import React from 'react'
import { useState } from 'react';

const ProductItem =props=> {
  const [count,setCount] = useState(0);
    return (
      <div className="card col-12 col-sm-6 col-md-4 p-0 border-0 border-secondary my-5 rounded-0 mx-2 mx-auto" style={{ width: "285px" }} id='kart'>
        <div id='picture' className='m-2'><img src={props.photo1} className="card-img" id='resm1' alt="..." />
        <img src={props.photo2} className="card-img d-none" id="resm2" alt="..." />
          <div className='text-end m-2 border-bottom' id="metn"><a href="#" className='text-dark fs-4 '><i className={props.icon4}></i></a>
          </div>
        </div>
        <div className="card-body text-center p-0">
          <h6 className="card-title">{props.title}</h6>
          <p className="card-text">{props.model}</p>
          <h6 id="reng">{props.price}</h6>
        </div>
        <div id='metn'>
          <p className='text-center px-3 text-muted'>{props.text}</p>
          <div className='px-2 d-flex justify-content-center justify-content-around mb-3'>
            <a href="#" className='fs-4 text-dark'><i className={props.icon1}></i></a>
            <button className='btn rounded-0 text-white fs-6' id='viewBtn'>{props.button}</button>
            <a href="#" className='fs-4 text-dark'><i className={props.icon3}></i></a>
          </div>
          <span>{count}</span>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
      </div>
    )
  }

export default ProductItem;