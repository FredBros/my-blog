import React from "react";
import {getNumberOfPosts, getPostsByPage} from "../../services"
import { v4 as uuidv4 } from "uuid";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import numberOfPages from "../../../my_blog/services/numberOfPages";



const limit = parseInt(process.env.NEXT_PUBLIC_NB_OF_POSTS_BY_PAGES) || 10;
function posts({ currentPageNumber, hasNextPage, hasPreviousPage, posts, count }) {
  return (
    <>
      <div className="main-container">
        <section>
          {posts.map((post, index) => (
            <PostCard key={uuidv4()} index={index} post={post.node} />
          ))}
        </section>
        <Pagination
          limit={limit}
          currentPageNumber={currentPageNumber}
          count={count}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
        />
      </div>
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
         {
        }
      `}</style>
    </>
  );
}

export default posts;


export async function getStaticPaths(){
  const total = await getNumberOfPosts();

  
  const paths = [
    ...numberOfPages({
      total,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params}){

  const offset= Number((params.page -1)* limit)
  const data = await getPostsByPage(limit, offset);

  const { aggregate, edges, pageInfo } = data; 
  return {
    props: {
      currentPageNumber: Number(params.page),
      ...aggregate,
      posts: edges,
      ...pageInfo,
    },
    revalidate: 6000,
  };
}