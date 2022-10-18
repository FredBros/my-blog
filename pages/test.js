import React, { useState, useEffect } from "react";
import {
  getNumberOfPostsByCategory,
  getNumberOfPosts,
  getCategories,
  getPostsByPage,
} from "../services";

function test() {
  

  const [categories, setCategories] = useState([]);

  const getNumberOfPostsByCategory =  async () => {
    const categories = await getCategories()
    const value = await Promise.all(categories.map((category) => 
      getNumberOfPostsByCategory(category.slug)))
    // const data = categories.map ((index, {slug})=> {return { slug, numberOfPosts: value[index]};})
    // const data = categories.map((category, index) => ({
    //   ...category,
    //   value: value[index],
    // }));
      return categories
    
  };


// (async () => {
//   const { categories, value } = await getNumberOfPostsByCategory();
//   const data = categories.map((category, index) => ({
//     ...category,
//     value: value[index],
//   }));
//   console.log(data);   
// })();

(async()=> {
  const  categories  = await getNumberOfPostsByCategory()
  console.log(categories);
})()

  return <div>test</div>;
}

export default test;
