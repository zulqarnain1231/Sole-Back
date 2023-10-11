import React from "react";
import CategoryCard from "./CategoryCard";
import { AiOutlinePlus } from "react-icons/ai";

const Categories = () => {
  const categories = [
    "All",
    "Health & Beauty",
    "Apparel",
    "Electronics corporation",
    "Travel Company",
  ];
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-5 px-4 py-8">
      <p className="text-black-main text-2xl font-semibold">
        Shopping Category
      </p>
      <p className="xl:w-[60%] lg:w-[70%] w-full text-black-off text-lg font-medium font-manrope">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      {categories.map((item: any, index: number) => (
        <CategoryCard key={index} name={item} />
      ))}
      <button className="h-[67px] w-full flex items-center justify-start gap-4 text-xl text-brand-main font-semibold px-4 border-2 border-black-greish rounded-md">
        <AiOutlinePlus className="text-2xl text-brand-main flex-shrink-0" />
        Add Category
      </button>
    </div>
  );
};

export default Categories;
