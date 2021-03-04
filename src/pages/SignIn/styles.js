import styled from 'styled-components';

export const Container = styled.div`
  background: var(--orange);
  height: 100vh;
  width: 100%;

  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: var(--white);

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 450px;

    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,0.1);

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    label {
      margin-bottom: 10px;
      display: block;
    }

    input {
      margin-bottom: 20px;

      height: 45px;
      border-radius: 5px;
      border: 1px solid var(--text);
      padding: 10px;
      background: var(--white);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      border: 0;
      border-radius: 5px;
      background: var(--orange);
      color: var(--white);
      text-transform: uppercase;
      font-weight: 500;
      height: 55px;

      cursor: pointer;

      transition: background 0.2s;

      svg {
        margin-right: 10px;
      }

      &:hover {
        background: var(--text);
      }
    }

    span {
      color: var(--error);
    }
  }

  @media (min-width: 768px) {
    form {
      padding: 30px 40px;
    }
  }
`;
