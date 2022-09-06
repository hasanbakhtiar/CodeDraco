import React, { Component } from 'react'
import ProductItem from "./ProductItem";
import products from '../data/productdata'
import { useState } from 'react';


const Products  =()=> {
  const [style1,setStyle1] = useState('d-flex');
  const [style2,setStyle2] = useState('d-none');
  const [style3,setStyle3] = useState('d-none');
    return (
      <div className='container mt-5'>
        <div className="row">
          <div className='d-flex flex-column justify-content-center align-items-center mb-2'>
            <h6 className='text-muted'>WOODEN ACCESSORIES</h6>
            <h4 className='text-dark fw-bold my-3'>FEATURED PRODUCTS</h4>
            <p className='text-muted'>Visit our shop to see amazing creations from our designers.</p>
          </div>
          <div className='d-flex justify-content-center align-items-center mb-4'>
          <button onClick={()=>{setStyle1('d-flex');setStyle2('d-none');setStyle3('d-none')}} type="button" className="btn border-0 fw-semibold">BEST SELLERS</button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-flex');setStyle3('d-none')}} type="button" className="btn border-0 fw-semibold">FEATURED</button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-none');setStyle3('d-flex')}} type="button" className="btn border-0 fw-semibold">SALES</button>
          </div>
            

            <div className={style1}>
            {products[0].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" icon4="fa-solid fa-arrows-rotate" />
            })}
            </div>  
            <div className={style2}>
            {products[1].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" icon4="fa-solid fa-arrows-rotate" />
            })}
            </div>  
            <div className={style3}>
            {products[2].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" icon4="fa-solid fa-arrows-rotate" />
            })}
            </div>  


        
        </div>
      </div>
    )
  }

export default Products;