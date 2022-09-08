import React, { useEffect, useState } from "react";
import Image from "next/image";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <Image src="/chevron-up.svg" alt="menu" width={30} height={20} />
        </div>
      )}

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          background-color: var(--color5);
          cursor: pointer;
          bottom: 10px;
          right: 10px;
          padding: 4px;
          border-radius: 4px;
          height: 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}



export default ScrollToTop