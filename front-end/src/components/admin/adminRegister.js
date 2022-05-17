import React, { useState } from 'react';
import axios from 'axios';

const typeRoles = [
  { seller: 'Vendedor' },
  { administrator: 'Administrador' },
  { customer: 'Cliente' },
];

function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [role, setRole] = useState(Object.keys(typeRoles[2]).toString());

  function validateRegister(nameRegister, emailRegister, passwordRegister) {
    const regex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const maxNameLength = 12;
    const minPasswordLength = 6;

    if (nameRegister.length < maxNameLength) return true;

    if (!regex.test(emailRegister)) return true;

    if (passwordRegister.length < minPasswordLength) return true;

    return false;
  }

  const createUser = async (payload) => {
    console.log('aqui', payload);

    const payloadRegister = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role,
    };

    try {
      const response = await axios
        .post('http://localhost:3001/users/admin', payloadRegister);
      console.log(response);

      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };

  const handleRegister = async () => {
    const payload = { name, email, password, role };

    const userCreated = await createUser(payload);

    if (!userCreated) return setError(true);
  };

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
          name="name"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="admin_manage__input-email"
          name="email"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="admin_manage__input-password"
          name="email"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        value={ role }
        onChange={ ({ target }) => setRole(target.value) }
      >
        {
          typeRoles.map((roles, index) => (
            (
              <option value={ Object.keys(roles) } key={ index }>
                {Object.values(roles)}
              </option>
            )))
        }
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="button"
        disabled={ validateRegister(name, email, password) }
        onClick={ handleRegister }
      >
        Cadastrar

      </button>
      <span
        hidden={ !error }
        data-testid="admin_manage__element-invalid-register"
      >
        Erro: Parâmetros inválidos para cadastro!
      </span>
    </form>
  );
}

export default AdminRegister;
