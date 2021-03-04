import React from 'react';
import { RiLoader5Line } from 'react-icons/ri';

import { Container } from './styles';

function Loader() {
  return (
    <Container>
      <RiLoader5Line size={40} />
      <span>Carregando...</span>
    </Container>
  );
}

export default Loader;
