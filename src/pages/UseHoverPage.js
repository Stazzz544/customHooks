import { useRef } from "react";
import { useHover } from "../hooks/useHover";

export const UseHoverPage = () => {

  const ref1 = useRef()
  const ref2 = useRef()

  const isHovering1=useHover(ref1)
  const isHovering2=useHover(ref2)

  return (
    <>
      <h1>UseHoverPage</h1>
      <div 
        ref={ref1} 
        style={{background: isHovering1? 'red': 'green'}} 
        className="box">
      </div>

      <div 
        ref={ref2} 
        style={{background: isHovering2? 'coral': 'blue'}} 
        className="box">
      </div>
    </>
  );
};
