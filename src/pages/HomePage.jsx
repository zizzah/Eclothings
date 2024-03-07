import Annoncement from "../components/Annoncement.jsx";
import Categories from "../components/Categories.jsx";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Products from "../components/Products.jsx";
import NewLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewLetter />
      <Footer />
    </>
  );
};

export default HomePage;
