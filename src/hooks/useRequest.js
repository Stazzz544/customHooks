import { useEffect, useState } from "react"

export const useRequest = (request) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    setLoading(true)
    setError('')
    setTimeout(() => {
      request()
      .then(response => setData(response.data))
      .catch(error => setError(error.code))
      .finally(() => setLoading(false))
    }, 500);
  }, [])
  return [loading, data, error]
}