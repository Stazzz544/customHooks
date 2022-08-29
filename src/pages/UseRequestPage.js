import axios from "axios";
import { useRequest } from "../hooks/useRequest";

export const UseRequestPage = () => {
  const fetchTodos = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  const [loading, data, error] = useRequest(fetchTodos);

  return (
    <>
      <h1>UseRequestPage</h1>
      {loading && <h1>loading data...</h1>}
      {error && <h1>{error}</h1>}
      {data && data.map(e => {
        return <div key={e.id}>{e.name}</div>
      })}
    </>
  );
};
