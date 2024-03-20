import { useEffect, useState } from "react";
import { popularProducts } from "../data.js";
import Product from "./Product.jsx";
import axios from "axios";
const Products = ({ filters, sorted, category }) => {
  const [products, setProducts] = useState([]);
  const [filtersProducts, setFilterProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/app/product?category=tshirt"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
