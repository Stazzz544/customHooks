import { useCallback, useMemo, useState } from "react"
import { CallbackChildOne } from "./CallbackChildOne"
import { CallbackChildThree } from "./CallbackChildThree"
import { CallbackChildTwo } from "./CallbackChildTwo"

export const UseCallbackPage = () => {
  console.log('==========Render Parent Component==========')
  const [num, setNum] = useState(0)
  const [reset, setReset] = useState(false) //only for rerender component



  const multiply = useCallback((a, b) => {
    console.log('вызвана функция multiply')
    return (a * b)
  }, [])



  const setNumFunc = useCallback(() => {
    setNum(num+1)
  },[num])



  const parentArray = useMemo(()=>[1, 2, 3], [])

  return(
    <>
    <h1>UseCallback</h1>
    <hr />
    <CallbackChildOne num={num} setNum={setNumFunc} parentArray={parentArray}/>
    <hr />
    <CallbackChildTwo />
    <hr />
    <CallbackChildThree multiply={multiply} />
    <hr/>
    <button onClick={()=>{setReset(e=>!e)}}>reset parent component</button>
    </>
  )
}