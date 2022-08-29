import { memo, useState } from "react"

export const CallbackChildThree = memo(({multiply}) => {
  const [localNum, setLocalNum] = useState(0)
  console.log('-----------render CallbackChild three-----------')
  

  const num = multiply(localNum, 6)

  return(
    <>
    <h3>CallbackChildThree</h3>
    <div>У компонента есть стэйт : {localNum}, и ему передаётся функция multiply</div>
    <div>local num: {localNum}</div>
    <button onClick={() => {setLocalNum(localNum + 1)}}>set local num</button>
    <div>Результат функции multyply num : {num}</div>
    </>
  )
})