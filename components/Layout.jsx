import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from "../components/ScrollToTop"

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop/>
      <Footer />
    </>
  );
}

export default Layout
