import React from 'react'
import PostCard from "../../../blog/components/modules/PostCard";
import Pagination from "../../../blog/components/modules/Pagination";
import { v4 as uuidv4 } from "uuid";
import numberOfPages from "../../../blog/services/numberOfPages"
import Title from "../../../blog/components/ui/Title";
import { useRouter } from "next/router";
import Loader from "../../../blog/components/ui/Loader";





import {
  getNumberOfPostsByCategory,
  getCategories,
  getPostsByCategoryByPage,
} from "../../../blog/services";

const limit = parseInt(process.env.NEXT_PUBLIC_NB_OF_POSTS_BY_PAGES) || 10;

function PostsByCategory({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
  count,
  categoryName,
}) {

 const router = useRouter();
 if (router.isFallback) {
   return <Loader />;
 }

  return (
    <>
      <div className="main-container">
          <Title text={categoryName} />
        
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
PostsByCategory.layout = "blog"
export default PostsByCategory

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