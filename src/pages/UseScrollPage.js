import { useRef, useState } from "react";
import { useScroll } from "../hooks/useScroll";

export const UseScrollPage = () => {
  const child = useRef();

  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [stopFetching, setStopFetching] = useState(false)
  const limit = 20;


  useScroll(child, ()=>fetchTodos(page, limit), page, stopFetching)


  function fetchTodos(page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then((response) => {
        // if (todos.length >=response.headers.get('X-Total-Count'))return false
        if (todos.length >=response.headers.get('X-Total-Count')){
          setStopFetching(true)
          return false
        }
        return response.json()
        
      })
      .then((json) => {
        if (!json) return 
        setTodos(prev => [...prev, ...json])
        setPage(prev => prev+1)
      })
  };


  return (
    <div className="parent">
      <h1>UseScrollPage</h1>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            {todo.id}: {todo.title}
          </div>
        );
      })}
      <div ref={child} className="scrollChild" />
    </div>
  );
};
