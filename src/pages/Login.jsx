import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import postUser from '../services/login';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false)
    if (user.length>=3 && password.length>=6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {username:user, password}
    try {
      const result = await postUser(data);
      localStorage.setItem("token", result.token);
      navigate('/tasks');
    } catch (error) {
      setError(true);
    }
  }

  return(
    <>
      <div className="Main_Login">
        <form className="Form_Fild" onSubmit={ handleSubmit }>
        <h1 className="Login_Title">Faça login para ver sua lista de tarefas</h1>
          {
            error && <span>Dados inválidos</span>
          }
          <input
            className="Login_Input" 
            type="text"
            name ="user"
            placeholder="usuário"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className="Login_Input"
            type="password"
            name ="senha"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="Login_Button"
            type="submit"
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  )
}
export default Login;