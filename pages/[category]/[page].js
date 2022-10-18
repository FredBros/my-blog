import React from 'react'
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { v4 as uuidv4 } from "uuid";
import numberOfPages from "../../services/numberOfPages"


import {
  getNumberOfPostsByCategory,
  getNumberOfPosts,
  getCategories,
  getPostsByCategoryByPage,
} from "../../services";

const limit = parseInt(process.env.NEXT_PUBLIC_NB_OF_POSTS_BY_PAGES) || 10;

function postsByCategory({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
  count,
  categoryName,
}) {
  return (
    <>
      <div className="main-container">
        <div className="category-name">
          <span className="category-name_span">{categoryName}</span>
        </div>

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
        .category-name {
          min-width: 100px;
          font-family: "Bebas Neue", cursive;
          color: var(--background);
          letter-spacing: 0.2rem;
          border: none;
          font-size: var(--font-size-xl);
          display : flex;
          justify-content : center;
        }
        .category-name_span {
          background-color: var(--color4);
          padding: 10px;
          text-align: center;
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
  const data = categories.map((category, index) => ({
    ...category,
    value: value[index],
  }));
  return data;
};


export async function getStaticPaths(){
  const numberOfPostsByCategory = await numberOfPostsByCategoryFoo();

 

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

  const { aggregate, edges, pageInfo } = data.postsConnection;
  const {name : categoryName} = data.category
  return {
    props: {
      currentPageNumber: Number(params.page),
      ...aggregate,
      posts: edges,
      ...pageInfo,
      categoryName,
    },
    revalidate: 6000,
  };
}