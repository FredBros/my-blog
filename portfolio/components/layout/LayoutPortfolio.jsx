import React from 'react'

function LayoutPortfolio({children}) {
  return  (
  <>
    <header>
      <h2>header portfolio</h2>
    </header>
    <div>{children}</div>
    <footer>footer portfolio
    </footer>
    <style jsx>{`
      header, footer {
        background-color: #2596be;
      }
    `}</style>
  </>
  );
}

export default LayoutPortfolio