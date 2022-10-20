import React from 'react'
import Footer from './Footer'
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import FadeTop from "./FadeTop";
import FadeBottom from "./FadeBottom";

function LayoutBlog({children}) {
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

export default LayoutBlog
