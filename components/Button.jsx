import React from "react";

function Button({ text }) {
  return (
    <button className="button">
      {text}

      <style jsx>{`
        .button {
          padding: 7px 10px 5px;
          cursor: pointer;
          min-width: 100px;
          background-color: var(--color4);
          font-family: "Bebas Neue", cursive;
          color: var(--background);
          text-align: center;
          letter-spacing: 0.2rem;
          border: none;
          font-size: var(--font-size-base);
          transition: transform 0.1s;
        }
        .button:hover {
          transform: scale(1.2);
        }
      `}</style>
    </button>
  );
}

export default Button;
