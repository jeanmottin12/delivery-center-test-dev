import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import { FiLogOut, FiUser } from 'react-icons/fi';

import { Container } from './styles';

import imgLogo from '../../assets/logo.png';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <div>
        <Link to="/home" className="logo">
          <img src={imgLogo} alt="Logo Delivery Center"/>
        </Link>

        <ul>
          <li className="user-info">
            <FiUser size={24} />
            Bem vindo, {user.email}
          </li>
          <li>
            <button type="button" onClick={signOut}>
              <FiLogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </Container>
  )
}
