import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    totalUniqueItems,
    totalItems,
    cartTotal,
    emptyCart,
    isEmpty,
    removeItem,
    updateItemQuantity,
    items
  } = useCart();
  if(isEmpty) return <div className="d-flex align-items-center justify-content-center"><img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" /></div>;
  return (
    <div className='container'>
      <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">img</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">Quantitiy</th>
      <th scope="col">Del</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fditem,i)=>{
      return(
        <tr>
      <th scope="row">{i+1}</th>
      <td><img src={fditem.img} width='100' alt="" /></td>
      <td>{`${fditem.brand}:${fditem.model}`}</td>
      <td>{fditem.price*fditem.quantity}$</td>
      <td>
        <button className='btn btn-danger btn-xs' onClick={()=>updateItemQuantity(fditem.id,fditem.quantity - 1)}>-</button>
        <span className='mx-2'>{fditem.quantity}</span>
        <button className='btn btn-success btn-xs' onClick={()=>updateItemQuantity(fditem.id,fditem.quantity + 1)}>+</button>
      </td>
      <td><button onClick={()=>removeItem(fditem.id)} className='btn btn-danger btn-sx'>X</button></td>
    </tr>
      )
    })}
   
  </tbody>
</table>
<button className='btn btn-warning' onClick={()=>{emptyCart()}}>Cart Clear</button>
<p className='mt-3'>Total price: {cartTotal}$</p>
<p className='mt-3'>Total cart: {totalUniqueItems}</p>
<p className='mt-3'>Total items: {totalItems}</p>
    </div>
  )
}

export default Cart