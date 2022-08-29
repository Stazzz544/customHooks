import { useEffect, useRef } from "react";

export const useScroll = (child, callback, page, stopFetching) => {

  const observer = useRef()

  useEffect(() => {
    if (!stopFetching) {
      const chidElem = child.current

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
  
      observer.current = new IntersectionObserver(([target]) => {
        if (target.isIntersecting) {
          console.log('intersected')
          callback()
        }
      }, options);
      observer.current.observe(chidElem);
      return function() {
        observer.current.unobserve(chidElem)
      }
    }
  },[callback, child, page]);
};
