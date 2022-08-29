import { memo } from "react"

export const CallbackChildTwo = memo(() => {
  console.log('-----------render CallbackChild Two-----------')
  return(
    <>
    <h3>CallbackChildTwo</h3>
    <p>Компонент обёрнут в memo и не рендерится когда изменяется стейт родителя, у компонента нет пропсов и стэйта</p>
    </>
  )
})