import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginErrors from '../../errors/loginErrors';
import LoginError from './loginError';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSucess, setLoginSucess] = useState(0);
  const navigate = useNavigate();

  const redirectByRole = (role) => {
    switch (role) {
    case 'customer':
      navigate(`/${role}/products`);
      break;
    case 'seller':
      navigate(`/${role}/orders`);
      break;
    case 'administrator':
      navigate(`/${role}/manage`);
      break;
    default:
      break;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const bodyRequest = { email, password };

    try {
      const response = await axios.post('http://localhost:3001/login', bodyRequest);
      redirectByRole(response.data.role);
    } catch (error) {
      setLoginSucess(loginErrors.ERR_NOT_FOUND);
    }
  };

  const handleLogin = (userEmail, userPassword) => {
    const minPasswordLength = 6;
    // Regex retirado do site
    // https://pt.stackoverflow.com/questions/1386/expressão-regular-para-validação-de-e-mail

    const regex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (regex.test(userEmail) && userPassword.length >= minPasswordLength) return false;

    return true;
  };

  return (
    <>
      <img alt="beer" src="https://w7.pngwing.com/pngs/644/125/png-transparent-beer-festival-computer-icons-food-beer-food-text-beer-festival.png" width={ 40 } height={ 40 } />
      <h3>Trybeer</h3>
      <form onSubmit={ handleFormSubmit }>
        <label htmlFor="email">
          Login:
          <input
            data-testid="common_login__input-email"
            id="email"
            type="text"
            value={ email }
            placeholder="example: email@test.com"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="common_login__input-password"
            id="password"
            type="password"
            value={ password }
            placeholder="digite sua senha..."
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ handleLogin(email, password) }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
        >
          Ainda não tenho conta
        </button>
        { loginSucess === loginErrors.ERR_NOT_FOUND
          && <LoginError /> }
      </form>
    </>
  );
}

export default Login;
