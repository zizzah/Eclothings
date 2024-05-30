/* eslint-disable no-unused-vars */
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { cardActionAreaClasses } from "@mui/material";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const quant = useSelector((state) => state.cart);

  console.log(quant)
  const [order, setOrder]=useState(function(){
    const store = localStorage.getItem('cart')
    return JSON.parse(store) || []
  })


  return (
    <div className="     h-16 nav_container ">
      <div className="  py-[8px] px-5 flex flex-wrap  gap-1 justify-between nav_wrapper  ">
        <div className="  flex flex-1  h-12  items-center  justify-around">
          <span className=" lang cursor-pointer mx-1 text-sm">EN</span>
          <div className=" border   border-solid-[0.5px]">
            <input
              type="text"
              className=" border-none nav_input"
              placeholder="Search"
            />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div className="flex-1  h-12   items-center  ">
          <a href={`/`} className="  no-underline text-black">
            <h1 className=" text-center my-1 font-bold  nav_logo ">
              EL-ZIZZAH
            </h1>
          </a>
        </div>

        <div className=" flex flex-1 gap-2 h-12  nav_right   justify-end">
          <div className="menu text-sm ml-[25] my-2 nav_menu  cursor-pointer">
            <a href={`/register`} className="  no-underline text-black">
              REGISTER
            </a>
          </div>

          <div className="menu text-sm ml-12 my-2 cursor-pointer nav_menu">
            <a href={`/login`} className="  no-underline text-black">
              {" "}
              SIGNIN
            </a>
          </div>
          <div className="menu text-sm ml-12 my-2 cursor-pointer nav_menu">
            <a href={`/payment`} className="  no-underline text-black">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
