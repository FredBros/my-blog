import React from 'react'
import {getAuthor} from "../services"
import Author from "../components/Author"

function about({author}) {
  return (
    <>
      <Author author= {author}/>
    </>
  );
}

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
