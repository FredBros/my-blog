import React from "react";

function FadeTop() {
  return (
    <div className="fade-top">
      <style jsx>{`
        .fade-top {
          z-index: 2;
          position: fixed;
          top: 0;
          width: 100vw;
          height: 70px;
          background: var(--background);
          background: linear-gradient(
            to top,
            transparent,
            30%,
            var(--background)
          );
        }
      `}</style>
    </div>
  );
}

export default FadeTop;
