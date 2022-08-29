import { useState } from "react"
import { useDebaunce } from "../hooks/useDebounce"

export const UseDebouncePage = () => {
  const [value, setValue] = useState('')

  const debauncedSearch = useDebaunce(search, 500)

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_query`)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
      })
  };



  const onChange = e => {
    setValue(e.target.value)
    debauncedSearch(e.target.value)
  }

  return (
  <>
  <h1>UseDebouncePage</h1>
  <input value={value} onInput={onChange}/>
  </>
  )
}