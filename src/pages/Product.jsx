import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../RequestMethod.js";

const Product = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState({});
  const id = pathname.split("/")[2];
  console.log(product.color);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`product/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className="productPage">
      <Navbar />
      <Annoncement />

      <div className="product_wrepper p-[50px] flex">
        <div className="imageContainer flex-1">
          <img
            src={product.img}
            alt="image"
            className="product_img w-[100%] h-[90vh] object-cover"
          />
        </div>
        <div className="product_infoContainer flex-1 px-[50px]">
          <h1 className="product_title font-[200]">{product.title}</h1>
          <p className="product_discription my-5">{product.desc}</p>
          <span className="product_price text-[40px] font-[100]">
            ${product.price}
          </span>
          <div className="filterContainer flex justify-between  w-[50%] my-[30px]">
            <div className="filter flex items-center">
              <span className="Title text-[20px] font-[200] ">Color</span>
              {product.color &&
                product.color.map((color) => (
                  <div
                    className="filterColor  bg-slate-400 w-5 h-5 rounded-[50%] mx-[5px] cursor-pointer"
                    key={color}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
            </div>
            <div className="filter flex items-center">
              <span className="title ">Size</span>
              <div className="filterSize">
                <select name="" id="" className="select ml-5 p-2">
                  {product.size &&
                    product.size.map((size) => (
                      <option value="" key={size}>
                        {size}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="AddContainer flex items-center w-[50%] justify-between">
            <div className="AmountContainer flex   items-center font-[700]">
              <RemovenCircleIco />
              <span
                className=" w-[30px] h-[30px] rounded-[10px] flex justify-center items-center mx-[5px]"
                style={{ border: "solid 1px teal" }}
              >
                1
              </span>
              <AddIcon />
            </div>
            <button className="btn_cart">ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Product;
