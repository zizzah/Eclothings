import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";

const Cart = () => {
  const [color, setColor] = useState("black");
  return (
    <div>
      <Navbar />
      <Annoncement />

      <div className="cart_Wrapper p-5">
        <h1 className="title font-[300] text-center"> YOUR BAGS</h1>
        <div className="top p-5 flex items-center justify-between">
          <button
            className="topbutton p-[10px] font-[600] bg-transparent "
            style={{ border: "solid 1px black" }}
          >
            {" "}
            CONTINUE SHOPPING
          </button>
          <div className="topTexts">
            <span className="topText underline cursor-pointer mx-[10px] ">
              Shopping Bag(2)
            </span>
            <span className="topText underline cursor-pointer mx-[10px]">
              {" "}
              Your Wishlist(0)
            </span>
          </div>
          <button className="topbutton p-[10px] font-[600] bg-black text-white">
            {" "}
            CHECK OUT NOW{" "}
          </button>
        </div>
        <div className="bottom flex items-center  justify-between bg-[#008080] text-white">
          <div className="information  flex-[3]">
            <div className="product flex justify-between ">
              <div className="productDetails flex-[2] flex">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="imag"
                  className="productImage w-[200px]"
                />
                <div className="details p-5  flex flex-col  justify-around">
                  <span>
                    <b>PRODUCT:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>PRODUCT ID:</b> 97989
                  </span>
                  <div
                    className="product_color  w-5 h-5 rounded-[50%]"
                    style={{ backgroundColor: color }}
                  >
                    <span></span>
                  </div>
                  <span>
                    <b>PRODUCT SIZE:</b> 39
                  </span>
                </div>
              </div>
              <div className="priceDetails flex-1 justify-center items-center  flex-col">
                <div className="productAmountContainer    flex items-center mb-5 ">
                  <AddIcon />
                  <div className="product_amount text-[24px] m-[5px]">2</div>
                  <RemovenCircleIco />
                </div>
                <div className="product_price text-[30px] font-[300] ">
                  $ 300
                </div>
              </div>
            </div>

            <hr className=" bg-[#eee] border-none h-[1px] my-2" />
            <div className="product flex justify-between">
              <div className="productDetails flex-[2] flex">
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="imag"
                  className="productImage w-[200px]"
                />
                <div className="details p-5  flex flex-col  justify-around">
                  <span>
                    <b>PRODUCT:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>PRODUCT ID:</b> 93813718293
                  </span>
                  <div
                    className="product_color  w-5 h-5 rounded-[50%]"
                    style={{ backgroundColor: color }}
                  >
                    <span></span>
                  </div>
                  <span>
                    <b>PRODUCT SIZE:</b> 37
                  </span>
                </div>
              </div>
              <div className="priceDetails flex-1 justify-center items-center flex-col">
                <div className="productAmountContainer flex items-center mb-5 ">
                  <AddIcon />
                  <div className="product_amount text-[24px] m-[5px]">2</div>
                  <RemovenCircleIco />
                </div>
                <div className="product_price text-[30px] font-[300] ">
                  $ 300
                </div>
              </div>
            </div>
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
                $90
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
