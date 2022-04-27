import React from 'react';

function Login() {
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
            placeholder="example: email@test.com"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="common_login__input-password"
            id="password"
            type="password"
            placeholder="digite sua senha..."
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
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
