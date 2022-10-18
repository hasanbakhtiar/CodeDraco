import { useState } from "react";
import ProductList from "./components/ProductList";
import productData from "./data/productData";
import { PropsType } from "./types/TypeConfig";

const List = (props: PropsType) => {
  return (
    <ul>
      <li>{props.title}</li>
      <li>{props.price}</li>
    </ul>
  );
};

const UserData = () => {
  return (
    <>
      <List title="BMW" price={10000} />
      <ProductList product={productData} />
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = ()=>{
    setIsLoggedIn(true);
  }
  const handleLogout = ()=>{
    setIsLoggedIn(false);
  }
  return <div className="App">
    <div>User data:<div>
    {isLoggedIn ? <UserData /> : 'logout user'}
      </div></div>
    <button onClick={handleLogin}>Log in</button>
    <button onClick={handleLogout}>Log out</button>

  </div>;
}

export default App;
