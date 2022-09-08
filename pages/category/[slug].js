import React, { useEffect, useState } from "react";
import {
  getPostsByCategory,
  getCategories,
  getCategoryName,
} from "../../services/index";
import { useRouter } from "next/router";
import PostCard from "../../components/PostCard";
import { v4 as uuidv4 } from "uuid";

function PostByCategory({posts, slug}) {
  

const [categoryName, setCategoryName] = useState()
useEffect(() => {
  getCategoryName(slug).then((newCategory) => {
    setCategoryName(newCategory);
    
  });
}, [slug]);

  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }


  return (
    <div className="category-container">
      <span className="title">{categoryName}</span>

      <section>
        {posts.map((post, index) => (
          <PostCard key={uuidv4()} index={index} post={post.node} />
        ))}
      </section>

      <style jsx>{`
        .category-container {
          width: 90%;
          max-width: 850px;
          margin: 40px auto 80px auto;
        }
        section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .title {
          padding: 7px 10px 5px;
          min-width: 100px;
          background-color: var(--color4);
          font-family: "Bebas Neue", cursive;
          color: var(--background);
          text-align: center;
          letter-spacing: 0.2rem;
          border: none;
          font-size: var(--font-size-base);
        }
      `}</style>
    </div>
  );
}


export async function getStaticProps({params}) {
  
  const posts = await getPostsByCategory(params.slug);
  
  return {
    props: { posts, slug: params.slug }, // will be passed to the page component as props
    revalidate: 6000,
  };
}




export async function getStaticPaths() {
    const categories = await getCategories()

  return {
    paths: categories.map(({slug}) => ({ params: {slug}})),
    fallback: true, // can also be true or 'blocking'
  };
}



export default PostByCategory;