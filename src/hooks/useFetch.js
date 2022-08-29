import { useEffect, useState } from "react";

export const useFetch = (url, deps=null) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [deps]);
  return data
};

//        async variant
// export const useFetch = (url, deps=null) => {
//   const [data, setData] = useState([]);
//   useEffect(async () => {
//     const temp = await fetch(url)
//       .then((response) => response.json())
//       .then((json) =>json);
//       console.log(temp)
//     setData(temp)
//   }, [deps]);
//   return data
// };
