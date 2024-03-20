import Navbar from "../components/Navbar.jsx";
import Annoncement from "../components/Annoncement.jsx";
import Products from "../components/Products.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const { pathname, search, hash } = useLocation();

  const [filters, setFilters] = useState({});
  const [sorted, setSorted] = useState('newest');


  // ... rest of your component code

  const category = pathname.split("/")[2];
 

    const handleFilters =(e)=>{
      const value = e.target.value;
      setFilters({...filters,
        [e.target.name]:value
      })
    }

     
  return (
    <div className="prductlist ">
      <Navbar />
      <Annoncement />
      <h1 className="title mb-5   text-center">DRESSES</h1>
      <div className="Filtercontainer flex justify-between">
        <div className="product_Filter mb-5 ">
          <span className=" text-[20px] font-[600] flitertext ">Products</span>
          <select
            className=" w-[200px] mr-5 p-[10px]" 
            name='color'
            onChange={handleFilters}
          >
            <option  >color</option>

            <option >Black</option>

            <option >white</option>
            <option >Red</option>
            <option >Blue</option>
            <option >Yellow</option>
            <option >Green</option>
          </select>

          <select
            className=" w-[200px] mr-5 p-[10px]"
            name='size'
            onChange={handleFilters}
          >
            <option >Size</option>
            <option >Small</option>
            <option >Medium</option>
            <option >Large</option>
            <option >Extral Large</option>
            <option >Super Extral Large</option>
            <option >Extral Small</option>
          </select>
        </div>
        <div className="product_Filter mb-5">
          <span className=" text-[20ppx] font-[600]  border-none flitertext">
            {" "}
            Sort Product
          </span>
          <select
            className=" w-[200px]   bg-teal-600 text-white  mr-5 p-[10px]"
           onChange={(e)=>setSorted(e.target.value)}
          >
            <option value='newest'>newest</option>
            <option value='price (asc)' >price (asc)</option>
            <option value='price (desc)' > price (desc)</option>
           
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sorted={sorted} />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
