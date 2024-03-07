import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
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
          <h1 className=" text-center my-2 font-bold  nav_logo ">EL-ZIZZAH</h1>
        </div>

        <div className=" flex flex-1 gap-2 h-12  nav_right   justify-end">
          <div className="menu text-sm ml-[25] my-2 nav_menu  cursor-pointer">
            REGISTER
          </div>
          <div className="menu text-sm ml-12 my-2 cursor-pointer nav_menu">
            SIGNIN
          </div>
          <div className="menu text-sm ml-12 my-2 cursor-pointer nav_menu">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
