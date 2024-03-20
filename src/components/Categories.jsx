import { categories } from "../data.js";
import CategoryItem from "./CategoryItem.jsx";

const Categories = () => {
  return (
    <div className="flex m-auto  justify-between items-center p-[20px] categories">
      {categories.map((item, index) => (
        <CategoryItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Categories;
