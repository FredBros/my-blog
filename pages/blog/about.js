import React from 'react'
import {getAuthor} from "../../blog/services"
import Author from "../../blog/components/modules/Author"
import Loader from "../../blog/components/utils/Loader";
import { useRouter } from "next/router";

function about({author}) {

  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

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
