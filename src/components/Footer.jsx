import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className=" footer_container flex">
      <div className="left flex-1 flex flex-col ">
        <h1 className="logo text-center">EL-ZIZZAH.</h1>
        <p className="discription  text-center  m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a
          explicabo ad facere nihil repudiandae voluptas obcaecati. Fugiat
          aliquam, sint qui distinctio necessitatibus totam vero accusantium
          tempora explicabo! Quisquam, fugit.
        </p>
        <div className="socialContent flex">
          <div className="socialIcon w-10 h-10  rounded-[50%] text-white bg-blue-800 ">
            <FacebookIcon />
          </div>
          <div className="socialIcon w-10 h-10  rounded-[50%] text-white bg-pink-700">
            <InstagramIcon />
          </div>

          <div className="socialIcon w-10 h-10  rounded-[50%] text-white  bg-black ">
            <XIcon />
          </div>
          <div className="socialIcon w-10 h-10  rounded-[50%] text-white  bg-pink-500 ">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="footer_center flex-1  p-5 ">
        <h3 className="title  mb-[30px]">Useful links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Men Fashion </li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Acoount</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right flex-1 p-5  bg-[#fff8f8 ]">
        <h1 className=" mb-5   font-semibold">Contact</h1>
        <h3 className=" mb-5 items-center justify-center ">
          {" "}
          <LocationOnIcon className=" mr-5" />
          33 Odo street obalende lagos
        </h3>
        <h3 className=" mb-5  justify-center items-center ">
          {" "}
          <PhoneIcon className=" mr-5" />
          +2348166999441
        </h3>
        <h3 className=" mb-5 items-center justify-center ">
          <EmailIcon className=" mr-5" />
          contact@elzzizah@gmail.com
        </h3>
        <img
          className="image h-[80px] w-[50%]  "
          src="https://d28wu8o6itv89t.cloudfront.net/images/TYPESOFDEBITCARDJPG-1578919599688.jpeg"
          alt="cards"
        />
      </div>
    </div>
  );
};

export default Footer;
