import React, { useEffect, useRef } from "react";
import Image from "next/image";
import imgRatio from "../../utils/imgRatio";
import useScaleInOut from "../../utils/useScaleInOut";
import Button from "../ui/Button";
import Link from "next/link";

function PostCard({ post, index }) {
  const imageRatio = imgRatio(
    post.featuredImage.width,
    post.featuredImage.height
  );
  const isEvenFoo = (index) => index % 2 === 0;
  const isEven = isEvenFoo(index);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    useScaleInOut(element);
  }),
    [];

  return (
    <div className="postcard" ref={ref}>
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
          <h2>{post.title}</h2>
        </div>
        <div className="excerpt">
          <p>{post.excerpt}</p>
        </div>
        <div className="read-more-btn">
          <Link href={`/post/${post.slug}`}>
            <div>
              <Button text="Lire plus"></Button>
            </div>
          </Link>
        </div>
      </div>

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
        h2 {
          font-family: "Bebas Neue";
        }
        .content {
          border: solid 2px var(--foreground);
          padding: 10px 20px;
          line-height: 1.5;
        }
        .read-more-btn {
          display: flex;
          justify-content: center;
          align-items: center;
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
        }
      `}</style>
    </div>
  );
}

export default PostCard;
