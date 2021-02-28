import { useContext } from "react";
import { ContextSignin } from "../context/sign-in"

const Login = () => {
  const { sendForm, data, handleChangeEmail, handleChangePassword, isAuth } = useContext(ContextSignin)

  if(isAuth()) {
    return <h1>HOME</h1>
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={sendForm}>
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