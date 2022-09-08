import React from 'react'
import RSHeader from "./RSHeader"

function Footer() {
  const year = new Date().getFullYear(); 
  console.log(year);
  return (
    <div className="footer-container">
      <p className="copyright">©{year} Tranquil Fred</p>
      <RSHeader />
      <style jsx>{`
        .footer-container {
          background-color: var(--color5);
          color: var(--main-bg-color);
          padding: 10px;
        }
        .copyright{
          margin: 0;
          text-align:center;
        }
      `}</style>
    </div>
  );
}

export default Footer