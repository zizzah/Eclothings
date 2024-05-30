/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../RequestMethod.js";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState({});
  const id = pathname.split("/")[2];
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const quant = useSelector((state) => state.cart);

  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [order, setOrder]=useState(function(){
    const store = localStorage.getItem('cart')
    return JSON.parse(store) || []
  })
 // const cartQuantity = useSelector((state) => state.cart);


 useEffect(() => {
   // Optional dependency array to prevent unnecessary re-renders
   // (not strictly needed in this case, but good practice)
 }, [order,setOrder]);

 const handleClick = () => {
   dispatch(addProduct({ ...product, quantity, color, size }));

   const newProduct = { product, quantity, color, size };
   setOrder((prevOrder) => [...prevOrder, newProduct]); // Create a new array
 };


  const handleQuanty = (qant) => {
    if (qant === "des") {
      if (quantity === 1) {
        return;
      } else {
        setQuantity(quantity - 1);

      }
    } else {
      return setQuantity(quantity + 1);
    }
  };

  

  /* useEffect(() => {
    const storedQuantity = localStorage.getItem("cartQuantity");
    if (storedQuantity) {
     // setQuantity(parseInt(storedQuantity, 10));
    }
  }, []); */
  
   useEffect(function(){
    localStorage.setItem('cart', JSON.stringify(order))

   },[order,setOrder])
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
              {product.color?.map((color) => (
                <div
                  className="filterColor  bg-slate-400 w-5 h-5 rounded-[50%] mx-[5px] cursor-pointer"
                  key={color}
                  style={{
                    backgroundColor: color,
                    border: "2px solid black",
                  }}
                  onClick={() => setColor(color)}
                ></div>
              ))}
            </div>
            <div className="filter flex items-center">
              <span className="title ">Size</span>
              <div className="filterSize">
                <select
                  name=""
                  id=""
                  className="select ml-5 p-2"
                  onChange={(e) => setSize(e.target.value)}
                >
                  {product.size?.map((sizes) => (
                    <option value={sizes} key={sizes}>
                      {sizes}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="AddContainer flex items-center w-[50%] justify-between">
            <div className="AmountContainer flex   items-center font-[700]">
              <RemovenCircleIco onClick={() => handleQuanty("des")} />
              <span
                className=" w-[30px] h-[30px] rounded-[10px] flex justify-center items-center mx-[5px]"
                style={{ border: "solid 1px teal" }}
              >
                {quantity}
              </span>
              <AddIcon onClick={() => handleQuanty("inc")} />
            </div>
            <button className="btn_cart  rounded-md " onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Product;
