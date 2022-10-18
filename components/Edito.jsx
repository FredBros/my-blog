import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import dayjs from "dayjs";
import Image from "next/image";

function Edito({ edito }) {
  const date = edito.createdAt;
  return (
    <div className="edito-container">
      <div className="date">{dayjs(date).format("DD/MM/YYYY")}</div>
      <h2>{edito.title}</h2>
      <div className="content">
        <div className="image-container">
          <Image
            className="image"
            src={edito.featuredImage.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text">
          <RichText
            content={edito.content.raw}
            renderers={{
              h1: ({ children }) => <h1 className="h1">{children}</h1>,
              h2: ({ children }) => <h2 className="h2">{children}</h2>,
              h3: ({ children }) => <h3 className="h3">{children}</h3>,
              a: ({ children, href, openInNewTab }) => (
                <a
                  className="link"
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .edito-container {
          line-height: 1;
          padding: 20px;
        }
        .content {
          
        }
        .link {
          font-weight: bold;
          background-color: var(--color4);
          padding: 3px 5px;
        }
        .image-container {
          height: 250px;
          position: relative;

          
        }
      `}</style>
    </div>
  );
}

export default Edito;
