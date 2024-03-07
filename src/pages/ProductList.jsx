import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import Products from "../components/Products.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
const ProductList = () => {
  return (
    <div className="prductlist ">
      <Navbar />
      <Annoncement />
      <h1 className="title mb-5   text-center">DRESSES</h1>
      <div className="Filtercontainer flex justify-between">
        <div className="product_Filter mb-5 ">
          <span className=" text-[20px] font-[600] flitertext ">Products</span>
          <select className=" w-[200px] mr-5 p-[10px]">
            <option disabled selected>
              Color
            </option>
            <option>Black</option>
            <option>white</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yelloe</option>
            <option>Green</option>
          </select>

          <select className=" w-[200px] mr-5 p-[10px]">
            <option disabled selected>
              Size
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
            <option>Super Extral Large</option>
            <option>Extral Small</option>
          </select>
        </div>
        <div className="product_Filter mb-5">
          <span className=" text-[20ppx] font-[600]  border-none flitertext">
            {" "}
            Sort Product
          </span>
          <select className=" w-[200px]   bg-teal-600 text-white  mr-5 p-[10px]">
            <option disabled selected>
              Price
            </option>
            <option> less than 50$</option>
            <option> Not more than 100$</option>
            <option> Less than 150$</option>
            <option>Not more than 200$</option>
            <option> Not more than 250$</option>
            <option>300 And above</option>
          </select>
        </div>
      </div>
      <Products />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
