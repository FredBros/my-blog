import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from "../components/ScrollToTop"

function Layout({children}) {
  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        {children}
        <ScrollToTop />
      </div>
      <Footer />

      <style jsx>{`
        .page-container {
          position: relative;
          min-height: 100vh;
        }
        .content-container {
          padding-bottom: 120px; /* Footer height  + 20px*/
        }
      `}</style>
    </div>
  );
}

export default Layout
