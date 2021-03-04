import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 35px;
  margin-bottom: 45px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: var(--orange);
      color: var(--white);
      border: 2px solid var(--orange);
      border-radius: 4px;
      margin-left: 40px;

      width: 120px;
      height: 40px;

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
  }

  nav {
    margin-top: 30px;
  }
`;
