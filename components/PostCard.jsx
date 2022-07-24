import React from "react";
import Image from "next/image";
import imgRatio from "../utils/imgRatio"
import BtnReadMore from "./BtnReadMore";

function PostCard({ post, index }) {
  console.log(index); 

  const imageRatio = imgRatio(post.featuredImage.width, post.featuredImage.height);
  const isEvenFoo = index => (index % 2 ===0) ;
  const isEven = isEvenFoo(index) 
  console.log(index, isEven);
  
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
          <BtnReadMore slug={post.slug} />
        </div>
      </article>
      <style jsx>{`
        .postcard {
          width: 90%;
          margin: 40px auto 80px auto;
          max-width: 400px;
          position: relative;
        }
        .image-container {
          position: relative;
          width: 80%;
          margin: 20px auto 3px auto;
        }

        .title {
          text-align: center;
        }
        .content {
          border: solid 2px var(--foreground);
          padding: 10px 20px;
        }
        @media screen and (min-width: 768px) {
          .postcard {
            max-width: 850px;
            margin: 0 auto 0 auto;
          }
          .image-container {
            width: 40%;
            margin: 0;
            transform: translateY(100px);
            float: ${isEven ? "left" : "right"};
          }
          .content {
            position: relative;
            width: 66%;
            right: 0;
            z-index: 1;
            background-color: var(--background);
            float: ${isEven ? "right" : "left"};
          }
          .title {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}

export default PostCard;
