import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterError from './registerError';
import registerErrors from '../../errors/registerErrors';
import '../../styles/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [registerSucess, setRegisterSucess] = useState(0);

  const handleRegister = (userName, userEmail, userPassword) => {
    const minPasswordLength = 6;
    const minNameLength = 12;
    // Regex retirado do site
    // https://pt.stackoverflow.com/questions/1386/expressão-regular-para-validação-de-e-mail

    const regex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (regex.test(userEmail) && userPassword.length >= minPasswordLength
    && userName.length >= minNameLength) {
      return false;
    }
    return true;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const bodyRequest = { email, password, name };

    try {
      await axios.post('http://localhost:3001/register', bodyRequest);
      navigate('/customer/products');
    } catch (error) {
      setRegisterSucess(registerErrors.ERR_CONFLICT);
    }
  };

  return (
    <div className="forms-register">
      <form>
        <h3>Cadastro</h3>
        <label htmlFor="input-name">
          Nome:
          <input
            data-testid="common_register__input-name"
            id="input-name"
            type="text"
            placeholder="Seu nome"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="input-email">
          Email:
          <input
            data-testid="common_register__input-email"
            id="input-email"
            type="text"
            placeholder="seu-nome@site.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            data-testid="common_register__input-password"
            id="input-password"
            type="password"
            placeholder="digite uma senha..."
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          onClick={ handleRegisterSubmit }
          id="button-register"
          disabled={ handleRegister(name, email, password) }
        >
          Cadastrar
        </button>
        { registerSucess === registerErrors.ERR_CONFLICT
          && <RegisterError /> }
      </form>
    </div>
  );
}

export default Register;
