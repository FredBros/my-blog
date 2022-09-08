import Head from "next/head";
import React, { useState, useEffect } from "react";
import { getPosts } from "../services";
import PostCard from "../components/PostCard";
import { v4 as uuidv4 } from "uuid";
import emailjs from "@emailjs/browser";
require("default-passive-events");



  


export default function Home({ posts }) {

  

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
        <div className="posts-container">
          <section>
            {posts.map((post, index) => (
              <PostCard key={uuidv4()} index={index} post={post.node} />
            ))}
          </section>
        </div>
      </main>

      <style jsx>{`
        .posts-container {
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

export async function getStaticProps() {
  
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 6000
  };
}


