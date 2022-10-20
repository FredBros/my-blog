import React from 'react'
import {getAuthor} from "../../blog/services"
import Author from "../../blog/components/modules/Author"

function about({author}) {
  return (
    <>
      <Author author= {author}/>
    </>
  );
}
about.layout = "blog"
export default about


export async function getStaticProps() {
  
    const data = await getAuthor("fredb");
    console.log(data)
  return {
    props: {
      author: data,
    },
    revalidate: 6000,
  };
    
  };
