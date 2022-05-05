import React from 'react';
import RegisterError from './registerError';

function Register() {
  <form>
    <h3>Cadastro</h3>
    <label>
      Nome:
      <input 
        datatest-id="common_register__input-name"
        id="input-name"
        type="text"
        placeholder="Seu nome"
      />
    </label>
    <label>
      Email:
      <input 
        datatest-id="common_register__input-email"
        id="input-email"
        type="text"
        placeholder="sume-nome@site.com.br"
      />
    </label>
    <label>
      Senha:
      <input 
        datatest-id="common_register__input-password"
        id="input-password"
        type="password"
        placeholder="digite um senha..."
      />
    </label>
    <button
      datatest-id="common_register__button-register"
      type="button"
      id="button-register"
    >
      Cadastrar
    </button>
    <RegisterError />
  </form>
}

export default Register;
