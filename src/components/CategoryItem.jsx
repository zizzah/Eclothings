/* eslint-disable react/prop-types */
const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" flex-1 m-1 h-3/4  relative categoryItems ">
      <img
        src={item.img}
        alt="clothes"
        className=" h-screen rounded   w-screen object-cover"
      />
      <div className="  justify-center  absolute h-[100%] w-[100%] top-0 left-0 flex items-center flex-col">
        <h1 className=" font-bold text-xl text-white  p-1 mb-[20px]">
          {item.title}
        </h1>
        <button
          className="px-1 py-1 md:px-8 md:py-4 text-[10px] md:text-lg bg-white
          font-medium border-2 border-white rounded-full hover:bg-black
           hover:text-white transition-all duration-300 ease-in-out"
        >
          SHOW NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
