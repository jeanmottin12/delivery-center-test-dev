import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './context/authContext';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.css';

import Routes from './routes';

import clientGraphql from './utils/clientGraphql';

function App() {
  return (
    <ApolloProvider client={clientGraphql}>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
