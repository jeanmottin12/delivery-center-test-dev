import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import * as Yup from 'yup';

import { FiLogIn } from 'react-icons/fi';

import { Container } from './styles';

export default function SignIn() {
  const { signIn } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const data = {
        email: email,
        password: password
      };

      console.log(data);

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: email,
        password: password,
      });

      history.push('/home');
    } catch (err) {
      const validationErrors = {};

      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });

      setErrors(validationErrors);

      console.log(validationErrors);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          <FiLogIn  size={20} />
          Entrar
        </button>

        {errors && errors.email && <span>{errors.email}</span>}
        {errors && errors.password && <span>{errors.password}</span>}
      </form>
    </Container>
  )
}
