import { useEffect, useReducer } from "react";

const initialState = { users: [] };

function reducer(state, action) {
  switch (action.type) {
    case "fetchUsers":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "fetchUsers", payload: json }));
  }, []);

  console.log(state.users);

  return(
  <>
    <h1>UseCallback</h1>
    {state.users.map(item => {
      console.log(item)
      return <div key={item.id}>{item.name}</div>
    })}
  </>
  );
};
