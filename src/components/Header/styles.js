import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--orange);
  height: 80px;

  > div {
    width: 100%;
    height: 100%;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;

    img {
      width: 200px;
    }
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      color: var(--white);

      button {
        background: var(--white);
        color: var(--orange);
        border: 2px solid var(--white);
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
          background: var(--orange);
          color: var(--white);
          border: 2px solid var(--white);
        }
      }

      &.user-info {
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }
      }

      &:first-child {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    ul li:first-child {
      display: flex;
    }
  }

  @media (min-width: 992px) {
    > div {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`;
