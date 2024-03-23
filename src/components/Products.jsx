/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Product from "./Product.jsx";
import axios from "axios";
const Products = ({ filters, sorted, category }) => {
  const [products, setProducts] = useState([]);
  const [filtersProducts, setFilterProducts] = useState([]);
  console.log(sorted);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/app/product?category=${category}`
            : "http://localhost:5000/app/product"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [category]);

  useEffect(() => {
    category
      ? setFilterProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )
      : setFilterProducts(products.slice(0, 8));
  }, [category, products, filters]);

  useEffect(() => {
    if (sorted === "newest") {
      setFilterProducts((pre) =>
        [...pre].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sorted === "price (asc)") {
      setFilterProducts((pre) => [...pre].sort((a, b) => a.price - b.price)); // Corrected typo: "b.prece" -> "b.price"
    } else {
      setFilterProducts((pre) => [...pre].sort((a, b) => b.price - a.price)); // Corrected typo: "b.prece" -> "b.price"
    }
  }, [sorted]);

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {filtersProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Products;
