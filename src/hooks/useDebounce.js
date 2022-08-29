import { useEffect } from "react";

export const useDebaunce = (callback, delay) => {
  const func = (value) => {
    console.log('insideHook: ', value)
  }
  useEffect(() => {
    const debaunceSeach = setTimeout(callback, delay)
    return function(){
      clearTimeout(debaunceSeach)
    }
  })
  

  return  func;
}