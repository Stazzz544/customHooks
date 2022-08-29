import { memo } from "react"

export const CallbackChildOne = memo(({num, setNum, parentArray}) => {
  console.log('-----------render CallbackChild One-----------')
  return(
    <>
    <h3>CallbackChildOne</h3>
    <p>Компонент завёрнут в memo, а функция, которая передаётся в компнент завёрнута в useCallback. При перерендере родителя компонент не перерендеривается. В дочернем компоненте идёт привязка к значению, которое этот же сам компонент изменяет в стэйте родителя</p>
    <span>Это значение находится в стэйте родителя : {num} </span>
    <div/>
    <button onClick={()=>{setNum()}}>Increase parent state</button>
    <div>Также  передаётся массив завёрнутый в useMemo и ниже он мапится:</div>
    {parentArray.map(e=>{
      return <div key={e}>{e}</div>
    })}
    </>
    
  )
})