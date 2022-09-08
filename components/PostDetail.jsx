import { useRef } from "react";
import Image from "next/image";
import imgRatio from "../utils/imgRatio";
import { RichText } from "@graphcms/rich-text-react-renderer";
import ProgressBar from "./ProgressBar";
import Date from "./Date"
import Button from "../components/Button";
import Link from "next/link";
import Sharebutton from "./Sharebutton"





function PostDetail({ post }) {
  
  const imageRatio = imgRatio(
    post.featuredImage.width,
    post.featuredImage.height
  );

  
  const divToScroll = useRef(null);
  


  return (
    <>
      <ProgressBar div={divToScroll} />
      <div className="post-container" ref={divToScroll}>
        <div className="post-header">
          <h1>{post.title}</h1>
          <div className="share-button">
            <Sharebutton />
          </div>
        </div>
        <Image
          src={post.featuredImage.url}
          alt="image illustrative"
          layout="responsive"
          className="image"
          objectFit="contain"
          width="100%"
          height={`${imageRatio * 100}%`}
        />
        {post.categories.length > 0 && (
          <div className="tags">
            {post.categories.map((categorie, index) => (
              <Link key={index} href={`/category/${categorie.slug}`}>
                <div className="tag-button">
                  <Button text={categorie.name}></Button>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="content-container">
          <Date date={post.publishedAt} />
          <RichText
            content={post.content.raw}
            renderers={{
              h1: ({ children }) => <h1 className="h1">{children}</h1>,
              h2: ({ children }) => <h2 className="h2">{children}</h2>,
              h3: ({ children }) => <h3 className="h3">{children}</h3>,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .post-container {
          width: 90vw;
          max-width: 850px;
          margin: 50px auto;
          font-size: var(--font-size-base);
        }
        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: top;          
        }
        .share-button{
          min-width: 38px;
          margin-left: 10px;
        }
         .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 20px 5px;
        }

        .h1 {
          font-size: var(--font-size-xxl);
        }
        .h2 {
          font-size: var(--font-size-lg);
        }
        .h3 {
          font-size: var(--font-size-md);
        }
      `}</style>
    </>
  );
}

export default PostDetail;
