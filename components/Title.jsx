import React from "react";

function Title({ text }) {
  return (
    <>
      <div className="title">
        <span className="title-text">{text}</span>
      </div>
      <style jsx>{`
        .title {
          font-family: "Bebas Neue", cursive;
          color: var(--background);
          letter-spacing: 0.2rem;
          border: none;
          font-size: var(--font-size-xl);
          display: flex;
          justify-content: center;
        }
        .title-text {
          min-width: 200px;
          background-color: var(--color4);
          padding: 0 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Title;
