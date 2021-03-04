import styled from 'styled-components';

export const Box = styled.div`
  background: var(--white);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 25px;
  margin-bottom: 30px;

  h3 {
    margin-bottom: 30px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  h4 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .field-3 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0
  }

  button {
    background: var(--orange);
    color: var(--white);
    border: 2px solid var(--orange);
    border-radius: 4px;
    margin-top: 20px;

    width: 220px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background: var(--white);
      color: var(--orange);
      border: 2px solid var(--orange);
    }
  }

  @media (min-width: 768px) {
    .field-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px
    }
  }
`;
