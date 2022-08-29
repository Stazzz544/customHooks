import { useInput } from "../hooks/useInput"

export const UseInputPage = () => {
  const login = useInput()
  const password = useInput()

  return(
    <div>
      <h1>UseInputPage</h1>
      <input {...login} placeholder='login'></input>
      <input {...password} type='password' placeholder='password'></input>
      <div>login: {login.value}</div>
      <div>password: {password.value}</div>
    </div>
  )
}