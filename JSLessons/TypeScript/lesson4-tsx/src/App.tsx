import ProductList from "./components/ProductList";
import productData from "./data/productData";
import { PropsType } from "./types/TypeConfig";

const List =(props:PropsType)=>{
  return(
    <ul>
      <li>{props.title}</li>
      <li>{props.price}</li>
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <List title="BMW" price={10000} />
      <ProductList product={productData}/>
    </div>
  );
}

export default App;
