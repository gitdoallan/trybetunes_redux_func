import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as EmailValidator from 'email-validator';

import '../styles/pages/Login.css';

export default function Login() {
  const [dados, setDados] = useState({ nome: '', email: '' });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const history = useHistory();
  const { nome, email } = dados;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOGIN', payload: { name: nome, email } });
    history.push('/search');
  };

  const onChange = ({ target: { value, name } }) => {
    setDados({ ...dados, [name]: value });
  };

  useEffect(() => {
    const MIN_LENGTH = 3;
    const validateEmail = EmailValidator.validate(email);
    if (nome.length >= MIN_LENGTH && validateEmail) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [nome, email]);

  return (
    <div className="container-login">
      <section className="login-content">
        <h1>Login</h1>
        <form onSubmit={ handleSubmit }>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              name="nome"
              id="nome"
              value={ nome }
              onChange={ onChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ onChange }
            />
          </label>
          <button
            disabled={ btnDisabled }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
