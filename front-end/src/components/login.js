import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (userEmail, userPassword) => {
    const minPasswordLength = 6;
    // Regex retirado do site
    // https://pt.stackoverflow.com/questions/1386/expressão-regular-para-validação-de-e-mail

    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (regex.test(userEmail) && userPassword.length >= minPasswordLength) return false;

    return true;
  };

  return (
    <>
      <img alt="beer" src="https://w7.pngwing.com/pngs/644/125/png-transparent-beer-festival-computer-icons-food-beer-food-text-beer-festival.png" width={ 40 } height={ 40 } />
      <h3>Trybeer</h3>
      <form>
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
        <span data-testid="common_login__element-invalid-email"> </span>
        <button
          data-testid="common_login__button-register"
          type="submit"
        >
          Ainda não tenho conta
        </button>
      </form>
    </>
  );
}

export default Login;
