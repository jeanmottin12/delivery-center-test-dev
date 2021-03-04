import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 20px;

  svg {
    color: var(--orange);
    animation: rotate 1s linear infinite;
  }

  span {
    margin-top: 16px;
    font-size: 0.4em;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
