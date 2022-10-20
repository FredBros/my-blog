import React from "react";

function FadeBottom() {
  return (
    <div className="fade-bottom">
      <style jsx>{`
        .fade-bottom {
          z-index: 2;
          position: fixed;
          bottom: 0;
          width: 100vw;
          height: 70px;
          background: var(--background);
          background: linear-gradient(
            to bottom,
            transparent,
            30%,
            var(--background)
          );
        }
      `}</style>
    </div>
  );
}

export default FadeBottom;
