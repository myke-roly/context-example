import axios from "axios";
import React, { useState, createContext } from "react";
import { useHistory } from 'react-router-dom'

export const ContextSignin = createContext();

const SigninContext = (props) => {
  const { children } = props
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    //guardar el estado
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    //guardar el estado
    setPassword(e.target.value);
  };

  // enviar formulario
  const data = {
    email: email,
    password: password
  };

  const saveToken = (token) => {
    //guardando el token
    localStorage.setItem("TOKEN_AUTH", token);
  };

  const sendForm = async (e) => {
    let url = "https://caps-arg.herokuapp.com/api/auth";
    e.preventDefault(); //para que no recargue el form se pone el preventdefault

    const res = await axios.post(url, data);
    const status = res.status
    if(status === 200) {
      // guardamos el token en el localStorage
      saveToken(res.data.token);
      history.push('/')
    }
  };

  const isAuth = () => {
    const token = localStorage.getItem("TOKEN_AUTH"); //traer si esta el token o si esta logueado

    return token ? true : false; //si existe return retorna
  };

  return (
    <ContextSignin.Provider
      value={{ data, isAuth, handleChangeEmail, handleChangePassword, sendForm }}
    >{children}
    </ContextSignin.Provider>
  )
};

export default SigninContext;
