import React from "react";
import Image from "next/image";
import imgRatio from "../utils/imgRatio"
import BtnReadMore from "./BtnReadMore";

function PostCard({ post }) {
  console.log(post); 

  const imageRatio = imgRatio(post.featuredImage.width, post.featuredImage.height);
  
  return (
    <>
      <article className="postcard">
        <div className="image-container">
          <Image
            src={post.featuredImage.url}
            layout="responsive"
            className="image"
            objectFit="contain"
            width="100%"
            height={`${imageRatio * 100}%`}
          />
        </div>
        <div className="content">
          <div className="title">
            <h1>{post.title}</h1>
          </div>
          <div className="excerpt">
            <p>{post.excerpt}</p>
          </div>
          <BtnReadMore slug={post.slug}/>
        </div>
      </article>
      <style jsx>{`
        .postcard {
          width: 90%;
          margin: 40px auto 80px auto;
          max-width: 400px;
          
        }
        .image-container {
          position: relative;
          width: 80%;
          margin: 20px auto;
          margin-bottom: 3px;
        }
        .image {
        }
        .title {
          text-align: center;
        }
        .content {
          border: solid 2px var(--foreground);
          padding: 10px 20px;
        }
      `}</style>
    </>
  );
}

export default PostCard;
