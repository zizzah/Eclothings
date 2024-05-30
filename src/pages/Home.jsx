const Home = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            EL ZZIZAP APP
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Home</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <div className="mainPage flex h-[90vh] ">
        <div className="sidebar w-[25%] border-r border-gray-400  flex flex-col items-center justify-around ">
          <div>homePage</div>
          <div>List</div>
          <div>Products</div>roducts
          <div>Groups</div>
          <div>Pages</div>
          <div>Photes</div>
          <div>Videoes</div>
          <div>WissList</div>
          <div>Settings</div>
          <div>Logout</div>
        </div>
        <div className="center w-[50%] p-4 border-r border-gray-400">
          <div className="updateACount">
            <h2>Update Your Account</h2>
            <p className=" bg-[#EEEDBF]">
              deleting your account can not be undone{}, you should comfirm your
              password to delete your account
            </p>
            <button className=" bg-[#dc746b] text-white p-2 rounded">
              Delete Account
            </button>
            <hr />

            <div>
              <h3>Profile Picture</h3>
              <div className="  flex gap-2 justify-start items-center ">
                <div className="  bg-gray-300 h-[70px] p-3  w-[70px] rounded-[50%] flex justify-center items-center">
                  <img
                    className="w-[50px] h-[50px] rounded  "
                    src="https://i.ibb.co/DG69bQ4/2.png"
                    alt="profile"
                  />
                </div>
                <span>Change</span>
              </div>
            </div>
            <div className="details flex flex-col">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                placeholder="john"
                className=" border mt-2"
              />
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                placeholder="@email"
                className=" border mt-2"
              />
              <label htmlFor="">password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className=" border mt-2"
              />
              <button className=" btn-success bg-[#4D7B78] p-1 mt-2 rounded  text-white  w-[20%]">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="rigtSide  w-[25%] p-2 items-center justify-center">
          <div className="  flex  items-start  flex-col ">
            <span className=" items-start mb-2 justify-start">
              Recommeded for JOHN {}
            </span>
            <div className=" border rounded  items-center justify-center  p-2">
              <img
                className=" h-[100px] w-[300px]"
                src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </div>
          </div>

          <div className="  flex  items-start  flex-col ">
            <span className=" items-start mb-2 justify-start">
              Popular On El-Zizzah APP
            </span>
            <div className=" border rounded  items-center justify-center  p-2">
              <img
                className=" h-[100px] w-[300px]"
                src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="  flex  items-start  flex-col ">
            <span className=" items-start mb-2 justify-start">
              Editor Choice
            </span>
            <div className=" border rounded  items-center justify-center  p-2">
              <img
                className=" h-[100px] w-[300px]"
                src="https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg"
                alt=""
              />
            </div>
          </div>
          <button className=" btn btn-outline-success w-[100%]">
            see more 🔻{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
