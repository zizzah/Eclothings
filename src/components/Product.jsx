import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
/* eslint-disable react/prop-types */
const Product = ({ item }) => {
  return (
    <div
      className="card ml-[5px] mt-2 min-h-[280px] flex h-[350px] w-[380px] 
     justify-center items-center border rounded-md bg-[#f5fbfd] relative"
    >
      <div className="circle w-[200px] h-[200px] rounded-[50%] bg-[#fff] absolute"></div>
      <img
        src={item.img}
        alt="product"
        className="product h-[75%] w-[75%] card-img-top z-[2]"
      />

      <div
        className="info  flex items-center  justify-center absolute w-[100%] 
      h-[100%] left-0 top-0 z-[3]  "
      >
        <div
          className="icons h-[40px] w-[40px] flex justify-center
         items-center rounded-[50%] bg-white  m-[10px]"
        >
          <ShoppingCartOutlinedIcon />
        </div>
        <div
          className="icons icons h-[40px] w-[40px] flex justify-center items-center
         rounded-[50%] bg-white m-[10px]"
        >
          <SearchRoundedIcon />
        </div>
        <div
          className="icons icons h-[40px] w-[40px] flex justify-center items-center 
        rounded-[50%] bg-white m-[10px]"
        >
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
