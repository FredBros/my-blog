import React from 'react'
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { v4 as uuidv4 } from "uuid";


import {
  getNumberOfPostsByCategory,
  getNumberOfPosts,
  getCategories,
  getPostsByCategoryByPage,
} from "../../services";

//! changer limit à 10
const limit = 2;

function postsByCategory({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
  count,
}) {
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

export default postsByCategory

const numberOfPostsByCategoryFoo = async () => {
  const categories = await getCategories();
  const value = await Promise.all(
    categories.map((category) => getNumberOfPostsByCategory(category.slug))
  );
  // const data = categories.map ((index, {slug})=> {return { slug, numberOfPosts: value[index]};})
  const data = categories.map((category, index) => ({
    ...category,
    value: value[index],
  }));
  return data;
};


export async function getStaticPaths(){
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

  const arraysOfPaths = numberOfPostsByCategory.map((category) =>
    [
      ...numberOfPages({
        total: category.value,
        limit,
      }),
    ].map((page) => ({
      params: { category: category.slug, page: String(page) },
    }))
  );
  const paths = arraysOfPaths.flat();
  return {
    paths,
    fallback: true,
  };
}


export async function getStaticProps({ params }) {
  const offset = Number((params.page - 1) * limit);
  const data = await getPostsByCategoryByPage(params.category, limit, offset);

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