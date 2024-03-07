import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
import RemovenCircleIco from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
const Product = () => {
  return (
    <div className="productPage">
      <Navbar />
      <Annoncement />

      <div className="product_wrepper p-[50px] flex">
        <div className="imageContainer flex-1">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="image"
            className="product_img w-[100%] h-[90vh] object-cover"
          />
        </div>
        <div className="product_infoContainer flex-1 px-[50px]">
          <h1 className="product_title font-[200]">Denim Jumpsuit</h1>
          <p className="product_discription my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            omnis hic impedit fuga rerum magni, sapiente facilis consequuntur
            harum quidem libero. Numquam ab voluptatibus, quo voluptatum
            reprehenderit sequi ea vitae!
          </p>
          <span className="product_price text-[40px] font-[100]">
            Price 30$
          </span>
          <div className="filterContainer flex justify-between  w-[50%] my-[30px]">
            <div className="filter flex items-center">
              <span className="Title text-[20px] font-[200] ">Color</span>
              <div className="filterColor bg-black w-5 h-5 rounded-[50%] mx-[5px] cursor-pointer"></div>
              <div className="filterColor   bg-blue-700 w-5 h-5  rounded-[50%] mx-[5px] cursor-pointer"></div>
              <div className="filterColor  bg-gray-500 w-5 h-5 rounded-[50%] mx-[5px] cursor-pointer"></div>
            </div>
            <div className="filter flex items-center">
              <span className="title ">Size</span>
              <div className="filterSize">
                <select name="" id="" className="select ml-5 p-2">
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
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
