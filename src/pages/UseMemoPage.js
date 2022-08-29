import { useMemo, useState } from "react";

const outSideVar = 1

export const UseMemoPage = ({array}) => {
  const [num, setNum] = useState(0)
  console.log('==================component render====================')
    
  const [render, setRender] = useState(true);
  console.log(render)


  const sortArr = (arr) => {
    console.log('function sortArr')
    return arr.sort((a,b) => a-b)
  }

  const someFunc = () => {
    console.log('func someFunc')
  }

  const otherSomeFunc = (e) => {
    console.log('func otherSomeFunc: ', e)
  }

  useMemo(() => {someFunc()}, [num])
  useMemo(() => {otherSomeFunc(outSideVar)}, [num])

  const sortedArr = useMemo(() => sortArr(array), [array]) 


  return (
  <>
    <button onClick={() => setRender(e=>!e)}>render!</button>
    <button onClick={()=>{setNum(num+1)}}>num ++</button>
    {sortedArr.map(item => <div key={item}>{item}</div>)}
  </>
  )
}