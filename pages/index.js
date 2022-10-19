import Head from "next/head";
import React  from "react";
import { getPostsByPage, getEdito } from "../services";
import PostCard from "../components/PostCard";
import Edito from "../components/Edito"
import { v4 as uuidv4 } from "uuid";
import Pagination from "../components/Pagination";
import emailjs from "@emailjs/browser";
require("default-passive-events");



  const limit = parseInt(process.env.NEXT_PUBLIC_NB_OF_POSTS_BY_PAGES) || 10;



export default function Home({ edito, currentPageNumber, hasNextPage, hasPreviousPage, posts, count }) {
  
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API_KEY);

 

  return (
    <>
      <Head>
        <title>Blog de Tranquil Fred</title>
        <meta
          name="description"
          content="Blog développement web de Tranquil Fred"
        />
      </Head>
      <main>
        <div className="main-container">
          <div className="edito-container">
            <Edito edito={edito[0]} />
          </div>
          <div className="posts-container">
            <section >
              {posts.map((post, index) => (
                <PostCard key={uuidv4()} index={index} post={post.node} />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Pagination
        limit={limit}
        currentPageNumber={currentPageNumber}
        count={count}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />

      <style jsx>{`
        .main-container {
          width: 90%;
          max-width: 850px;
          margin: 40px auto 80px auto;
        }
        section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
}

// export async function getStaticProps() {
  
//   const data = (await getHomeData()) || [];
//   const edito = data.editos
//   const posts = data.postsConnection.edges
//   return {
//     props: { edito, posts  },
//     revalidate: 6000
//   };
// }

export async function getStaticProps() {
  const offset = 0;
  const data = await getPostsByPage(limit, offset);
const edito = await getEdito();
  const { aggregate, edges, pageInfo } = data;

  return {
    props: {
      currentPageNumber: 1,
      ...aggregate,
      posts: edges,
      ...pageInfo,
      edito,
    },
    revalidate: 6000,
  };
}


