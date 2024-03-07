import { popularProducts } from "../data.js";
import Product from "./Product.jsx";
const Products = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
