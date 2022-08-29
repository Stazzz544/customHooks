import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export const UseFetchPage = () => {
  const [page, setPage] = useState(0)

  const users = useFetch('https://jsonplaceholder.typicode.com/users')
  const posts = useFetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`, page)

  return(
    <>
    <h1>UseFetch</h1>
      {
        users.map(user => {
          return <div key={user.id}>{user.name}</div>
        })
      }
      <hr/>
      {
        posts.map(post => {
          return <div key={post.id}>{post.title}</div>
        })
      }
      <div>page num {page}</div>
      <button onClick={()=>{setPage(page-1)}}>prev page</button>
      <button onClick={()=>{setPage(page+1)}}>next page</button>
    </>
  )
}