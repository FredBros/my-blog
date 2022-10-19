import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from "../components/ScrollToTop"
import FadeTop from "../components/FadeTop"
import FadeBottom from "../components/FadeBottom"

function Layout({children}) {
  return (
    <div className="page-container">
      <FadeTop/>
      <Header />
      <div className="content-container">
        {children}
        <ScrollToTop />
      </div>
      <Footer />
      <FadeBottom/>

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
