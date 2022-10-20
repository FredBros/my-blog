import React from 'react'
import RSHeader from "./RSHeader"

function Footer() {
  const year = new Date().getFullYear(); 
  return (
    <div className="footer-container">
      <p className="copyright">©{year} Tranquil Fred</p>
      <RSHeader />
      <style jsx>{`
        .footer-container {
          background-color: var(--color5);
          color: var(--main-bg-color);
          padding: 10px;
          margin-top: 20px;
          height: 100px;
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 5;
        }
        .copyright {
          margin: 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Footer