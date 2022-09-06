import React from "react";
import ProductItem from "./ProductItem";
import cars from "../data/cars";
const Products = () => {
  return (
    <div className="mt-5 container">
      <div className="row">
        {cars.map((fd, i) => (
          <ProductItem 
            photo={fd.img}
            brandp={fd.brand}
            modelp={fd.model}
            yearp={fd.year}
            pricep = {fd.price}
            colorp = {fd.color}
            key={i}
            />
        ))}
      </div>
    </div>
  );
};

export default Products;
