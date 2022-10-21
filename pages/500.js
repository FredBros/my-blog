import React from "react";

function FiveOhOh() {
  return (
    <div className="error">
      <h1>error 500</h1>
      <h1 className="text">problème réseau :&apos;(</h1>
      <style jsx>{`
        .error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
FiveOhOh.layout = "blog"
export default FiveOhOh;
