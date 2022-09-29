import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components/main";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Naruto"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategoy={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
