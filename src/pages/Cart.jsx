import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [color, setColor] = useState("black");
  const cart = useSelector((state) => state.cart);
  const {total , product}= cart;
   console.log(product[1].product)

  return (
    <div>
      <Navbar />
      <Annoncement />

      <div className="cart_Wrapper p-5">
        <h1 className="title font-[300] text-center"> YOUR BAGS</h1>
        <div className="top p-5 flex items-center justify-between">
          <Link to={'/'}>
          <button
            className="topbutton p-[10px] font-[600] bg-transparent "
            style={{ border: "solid 1px black" }}
          >
            {" "}
            CONTINUE SHOPPING
          </button>
          </Link>
          <div className="topTexts">
            <span className="topText underline cursor-pointer mx-[10px] ">
              Shopping Bag(2)
            </span>
            <span className="topText underline cursor-pointer mx-[10px]">
              {" "}
              uc Your Wishlist(0)
            </span>
          </div>
          <Link to={'/checkout'}>
          <button className="topbutton p-[10px] font-[600] bg-black text-white">
            {" "}
            CHECK OUT NOW{" "}
          </button>
          </Link>
        </div>
        <div className="bottom flex items-center  justify-between bg-[#008080] text-white">
          <div className="information  flex-[3]">
            
           {product.map((item,index)=>
          
          <div  key={index}>
          <div className="product flex justify-between">
      <div className="productDetails flex-[2] flex">
        <img
          src={item.product.img}
          alt="imag"
          className="productImage w-[200px]"
        />
        <div className="details p-5  flex flex-col   justify-around">
          <span>
            <b>PRODUCT:</b>{''} {item.product.title}
          </span>
          <span>
            <b>PRODUCT ID: </b> {item.product._id}
          </span>
          <div
            className="product_color  w-5 h-5 rounded-[50%]"
            style={{ backgroundColor: color }}
          >
            <span> {''}</span>
          </div>
          <span>
            <b>PRODUCT SIZE :</b> {}
          </span>
        </div>
      </div>
      <div className="priceDetails flex-1 justify-center items-center flex-col">
        <div className="productAmountContainer flex items-center mb-5 ">
          <AddIcon />
          <div className="product_amount text-[24px] m-[5px]">{item.quantity}</div>
          <RemovenCircleIco />
        </div>
        <div className="product_price text-[30px] font-[300] ">
          $ {item.quantity * item.product.price}
        </div>
      </div>
    </div>
    <hr className=" bg-[#eee] border-none h-[1px] my-2" />

</div>

          
          )}


          </div>

          <div
            className="summary flex-1  rounded-[10px] p-5 h-[60vh]"
            style={{ border: "solid 0.5px lightgray" }}
          >
            <h1 className="summarytitle font-[500]">ORDER SUMMARY</h1>
            <div className="summaryitem">
              <span className="summaryItemText">SubTotal </span>
              <span className="summaryItemPrice"> $90</span>
            </div>
            <div className="summaryitem">
              <span className="summaryItemText"> Estimated Shipping</span>
              <span className="summaryItemPrice">$5.90</span>
            </div>
            <div className="summaryitem">
              <span className="summaryItemText"> Shipping Discount</span>
              <span className="summaryItemPrice"> $-5.90</span>
            </div>
            <div className="summaryitem">
              <span className="summaryItemText text-[24px] font-[500]">
                {" "}
                Total
              </span>
              <span className="summaryItemPrice text-[24px] font-[500]">
                {" "}
                ${total}
              </span>
            </div>
            <button className=" bg-black text-white w-[100%] font-[500]">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <hr className=" mb-10" />
      <Footer />
    </div>
  );
};

export default Cart;
