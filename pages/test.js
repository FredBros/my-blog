import React, { useState, useEffect } from "react";
import {
  getNumberOfPostsByCategory,
  getNumberOfPosts,
  getCategories,
  getPostsByPage,
} from "../services";

//! changer limit à 10
const limit = 2;

function test() {
  

  // const [categories, setCategories] = useState([]);

  const numberOfPostsByCategoryFoo =  async () => {
    const categories = await getCategories()
    const value = await Promise.all(categories.map((category) => 
      getNumberOfPostsByCategory(category.slug)))
    // const data = categories.map ((index, {slug})=> {return { slug, numberOfPosts: value[index]};})
    const data = categories.map((category, index) => ({
      ...category,
      value: value[index],
    }));
      return data
    
  };


(async () => {
  const numberOfPostsByCategory = await numberOfPostsByCategoryFoo();

 function* numberOfPages({ total, limit }) {
   let page = 1;
   let offset = 0;

   while (offset < total) {
     yield page;

     page++;
     offset += limit;
   }
 }

 const arraysOfPaths = numberOfPostsByCategory.map((category) => [
  ...numberOfPages({
    total: category.value,
    limit,
  })
 ].map((page) =>({params : {category: category.slug, page: String(page)},}))
 )
 const paths = arraysOfPaths.flat()
  console.log(paths);   
})();


  return <div>test</div>;
}

export default test;
