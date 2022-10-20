import React from 'react'
import { ThreeCircles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
  return (
    <>
    
      <ThreeCircles
        className="loader"
        height="100"
        width="100"
        color="#DD826F"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#F69F82"
        middleCircleColor="#6D9891"
      />
      <style jsx>{`
              .loader{
      position : absolute;
      top : 50%;
      left : 50%;

      }
            `}</style>
    </>
  );
}

export default Loader