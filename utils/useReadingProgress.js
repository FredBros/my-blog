import { useEffect, useState } from "react";

export function useReadingProgress(div) {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {

      if (div.current != null) {
        const divHeight = div.current.scrollHeight;
        const divTop = div.current.offsetTop;

        // see how much we have scrolled
        const currentProgress = window.scrollY;
        // see how much total scroll is available
        let scrollHeight = divHeight - (window.innerHeight - divTop);
        if (scrollHeight) {
          setCompletion(
            Number((currentProgress / scrollHeight).toFixed(2)) * 100
          );
        }
      } else {
        setCompletion(0);
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}
