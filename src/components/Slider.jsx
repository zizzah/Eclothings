import { useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { sliderItems } from "../data.js";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden slider">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === slideIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1500 ease-in-out absolute top-0 bottom-0 left-0 right-0`}
            style={{ background: item.bg }}
          >
            <div
              className={`h-full w-full flex items-center justify-center bg-[${item.bg}]`}
            >
              <img
                src={item.img}
                alt="kom"
                className="h-80 w-80 md:h-96 md:w-96"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl font-medium mb-12">
                  {item.desc}
                </p>
                <button
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg
                 font-medium border-2 border-black rounded-full hover:bg-black
                  hover:text-white transition-all duration-300 ease-in-out"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <KeyboardArrowLeftRoundedIcon onClick={() => handleClick("left")} />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <KeyboardArrowRightRoundedIcon onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default Slider;
