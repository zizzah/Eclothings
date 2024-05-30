
import { useState } from "react";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const CartProduct = () => {

    const [color, setColor] = useState("black");
    const cart = useSelector((state) => state.cart);
    const {total , product}= cart;
     console.log(product[1].product)
  
  return (
    <div>
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
            <hr className=" bg-[#eee] border-none h-[1px] my-2" />

    </div>
  )
}

export default CartProduct
