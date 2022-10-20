import React from 'react'
import {getAuthor} from "../../blog/services"
import Author from "../../blog/components/modules/Author"

function About({author}) {

  

  return (
    <>
      <Author author= {author}/>
    </>
  );
}
About.layout = "blog"
export default About


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
