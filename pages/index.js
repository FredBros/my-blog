import Head from "next/head";
import React  from "react";
import Link  from "next/link"


function Home() {

  return (
    <>
      <Head>
        <title>Tranquil Fred</title>
        <meta
          name="description"
          content="Tranquil Fred nouveau développeur web"
        />
      </Head>
      <main>
        <h1>hello world</h1>
        <Link href="./blog">
          <button> blog </button>
        </Link>
        <Link href="./portfolio">
          <button> portfolio </button>
        </Link>
      </main>
      <style jsx>{`
              button{
      margin : 30px;
      }
            `}</style>
    </>
  );
}

Home.layout = "default"
export default Home
