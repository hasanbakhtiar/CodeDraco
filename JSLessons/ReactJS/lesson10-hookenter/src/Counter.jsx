import React from 'react';
import { useState } from 'react'


const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = ()=>{if (count > 0) {
        setCount(count-1)
        localStorage.setItem('value',count);
    }}

  return (
    <div className='container mt-5'>
        <button onClick={increment} className='btn btn-danger mx-2'>-</button>

        <span>{localStorage.getItem('value')}</span>

        <button onClick={()=>{
            setCount(count+1)
            localStorage.setItem('value',count);
        
        }} className='btn btn-success mx-2'>+</button>
    </div>
  )
}

export default Counter