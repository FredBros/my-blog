import React from "react";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";

function Author({ author }) {
  console.log(author);
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <div className="picture-container">
            <Image
              src={author.photo.url}
              width={author.photo.width}
              height={author.photo.height}
              layout="responsive"
              objectFit="cover"
              className="image"
            />
          </div>
          <div className="content-about-container">
            <h2 className="author-name">{author.name}</h2>
            <RichText
              content={author.bioDigest.raw}
              renderers={{
                p: ({ children }) => <p className="font-size-sm">{children}</p>,
              }}
            />
          </div>
        </div>
        <div className="bio">
          <RichText content={author.bio.raw} />
        </div>
      </div>

      <style jsx>{`
        .about-container {
          width: 90%;
          max-width: 850px;
          margin: 30px auto;
        }
        .about-header {
          width: 60%;
          min-width: 250px;
          max-width: 280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: solid 2px var(--foreground);
          padding: 5px;
        }
        .author-name {
          margin: 0;
        }
        .picture-container {
          width: 70%;
          max-width: 200px;
          background-color: var(--color6);
          margin-right: 5px;
        }
        .image {
        }
        .font-size-sm {
          font-size: var(--font-size-sm);
        }
        @media screen and (min-width: 768px) {
          .about-header {
            flex-direction: row;
            align-items: flex-start;
            width: 600px;
            max-width:600px;
          }
        } ;
      `}</style>
    </>
  );
}

export default Author;
