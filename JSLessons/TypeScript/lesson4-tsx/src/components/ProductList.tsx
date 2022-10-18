import { PropsTypeArr } from '../types/TypeConfig'
const ProductList = (props:PropsTypeArr) => {
  return (
    <div>
    {props.product.map((fd)=>(
     <div>
       <div>{fd.title}</div>
      <div>{fd.price}</div>
     </div>
    ))}
    
    </div>
  )
}

export default ProductList