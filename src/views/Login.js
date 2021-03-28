import { useContext, useEffect } from "react";
import { ContextSignin } from "../context/sign-in"
import { useHistory } from 'react-router-dom'

const Login = () => {
  const { sendForm, data, handleChangeEmail, handleChangePassword, isAuth } = useContext(ContextSignin)
  const history = useHistory()

  
  useEffect(() => {
    if(isAuth()) {
      history.push('/')
    }
  }, [isAuth, history])

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={async (e) => {
        await sendForm(e)
        history.push('/')
      }
        }>
        <label>Nombre </label>
        <input type="text" value={data.email} onChange={handleChangeEmail} required />
        <br />
        <label>Contraseña</label>
        <input
          type="password"
          value={data.password}
          onChange={handleChangePassword}
          required
        />
        <br />
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;