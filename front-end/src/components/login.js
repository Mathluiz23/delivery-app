import React from 'react';

function Login () {
  return (
    <>
      <img src="https://w7.pngwing.com/pngs/644/125/png-transparent-beer-festival-computer-icons-food-beer-food-text-beer-festival.png" width={40} height={40} />
      <h3>Trybeer</h3>
      <form>
        <label htmlFor="email">
          Login:
          <input id="email" type="text" placeholder="example: email@test.com"/>
        </label>
        <label htmlFor="password">
          Senha:
          <input id="password" type="password" />
        </label>
        <button type="submit">Login</button>
        <button type="submit">Ainda não tenho conta</button>
      </form>
    </>
  );
}

export default Login;
