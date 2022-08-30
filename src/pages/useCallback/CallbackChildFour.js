import { memo } from "react"

export const CallbackChildFour = () => {
  console.log('-----------render CallbackChild Four-----------')
  return(
    <>
    <h3>CallbackChildFour</h3>
    <p>Компонент обновляется всегда так как он является немемоизированным ребёнком родительской компоненты. Когда родительская компонента ререндерится - ререндерится и ребенок</p>
    </>
  )
}