import React from "react";
import Link from "next/link";

function BtnReadMore({slug}) {
  return (
    <div className="button">
      <Link href={`/post/${slug}`}>Lire plus</Link>

      <style jsx>{`
        .button {
          display: block;
          padding: 5px;
          cursor: pointer;
          margin: 20px auto;
          width: 100px;
          background-color: var(--color4);
          font-family: "Bebas Neue", cursive;
          color: var(--background);
          text-align: center;
          letter-spacing: .1rem;
        }
      `}</style>
    </div>
  );
}

export default BtnReadMore;
