import Head from "next/head";
import React from "react";


function Home() {
  return (
     <>
       <Head>
         <title>Portfolio de Tranquil Fred</title>
         <meta
           name="description"
           content="Portfolio de Tranquil Fred nouveau développeur web"
         />
       </Head>
       <main>
         <h1>portfolio en construction</h1>
       </main>
     </>
     )
}

Home.layout = "portfolio";
export default Home;
