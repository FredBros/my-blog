import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function useScaleInOut(element) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(element, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3,
    scrollTrigger: {
      toggleActions: "play complete reverse reset",
      trigger: element,
      start: "60% top",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });
  //   gsap.from(element, {
  //     opacity: 0,
  //     scale: 0.5,
  //     scrollTrigger: {
  //       toggleActions: "play complete reverse reset",
  //       duration: 0.3,
  //       trigger: element,
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       scrub: false,
  //       markers: true,
  //     },
  //   });

  return <div>useScaleInOut</div>;
}

export default useScaleInOut;
