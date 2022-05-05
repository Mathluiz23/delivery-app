import React, { useState } from 'react';
import RegisterError from './registerError';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return(
    <form>
      <h3>Cadastro</h3>
      <label>
        Nome:
        <input 
          data-testid="common_register__input-name"
          id="input-name"
          type="text"
          placeholder="Seu nome"
        />
      </label>
      <label>
        Email:
        <input 
          data-testid="common_register__input-email"
          id="input-email"
          type="text"
          placeholder="seu-nome@site.com.br"
        />
      </label>
      <label>
        Senha:
        <input 
          data-testid="common_register__input-password"
          id="input-password"
          type="password"
          placeholder="digite um senha..."
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="submit"
        id="button-register"
      >
        Cadastrar
      </button>
      <RegisterError />
    </form>
  );
}

export default Register;
