import { useEffect, useState } from "react";

export const UseStatePage = () => {

  const [num, setNum] = useState(0);
  const [value, setValue] = useState('')
  const [render, setRender] = useState(0)
  const [unmountCounter, setUnmountCounter] = useState(0)

  console.log("render");

  useEffect(() => {
    console.log("useEffect");
    setRender(render+1)
    return function(){
      console.log('unmount')
      setUnmountCounter(prev => prev+1) //! если setUnmountCounter(unmountCounter+1) то не работает
    }
  }, [num, value]);

  return (
    <>
      <h1>Test page</h1>
      <div>num is: {num}</div>
      <div>text in input: {value}</div>
      <hr />
      <div>render: {render}</div>
      <div>unmount counter: {unmountCounter}</div>
      <hr/>
      <button onClick={()=>{setNum(num+1)}}>num +</button>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
    </>
  );
};
