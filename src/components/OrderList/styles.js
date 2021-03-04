import styled from 'styled-components';

export const OrderListContainer = styled.div`
  .view-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

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

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;

export const OrderList = styled.div`
  background: var(--white);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 50px;
  overflow-x: auto;
  white-space: nowrap;

  span {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;

    &:nth-child(1) {
      min-width: 140px;
    }
    &:nth-child(2) {
      min-width: 120px;
    }
    &:nth-child(3) {
      min-width: 170px;
    }
    &:nth-child(4) {
      min-width: 120px;
    }
    &:nth-child(5) {
      min-width: 140px;
    }
    &:nth-child(6) {
      min-width: 160px;
    }
    &:nth-child(7) {
      min-width: 50px;
    }
  }

  .no-orders {
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    span {
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 15%;
      }
      &:nth-child(5) {
        width: 15%;
      }
      &:nth-child(6) {
        width: 15%;
      }
      &:nth-child(7) {
        width: 5%;
      }
    }
  }
`;

export const OrderListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;


export const OrderListItem = styled.div`
  > a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--text-table);

    transition: background .2s;

    &:hover p {
      background: rgba(0,0,0,0.02)
    }

    p {
      border-bottom: 1px solid #EEEEEE;
      height: 70px;
      padding: 0;
      display: flex;
      align-items: center;

      &:nth-child(1) {
        min-width: 140px;
      }
      &:nth-child(2) {
        min-width: 120px;
      }
      &:nth-child(3) {
        min-width: 170px;
      }
      &:nth-child(4) {
        min-width: 120px;
      }
      &:nth-child(5) {
        min-width: 140px;
      }
      &:nth-child(6) {
        min-width: 160px;
      }
      &:nth-child(7) {
        min-width: 50px;
      }
    }
  }

  &:last-child a p {
    border-bottom: 0;
  }

  @media (min-width: 768px) {
    > a {
      p {
        &:nth-child(1) {
          width: 15%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 20%;
        }
        &:nth-child(4) {
          width: 15%;
        }
        &:nth-child(5) {
          width: 15%;
        }
        &:nth-child(6) {
          width: 15%;
        }
        &:nth-child(7) {
          width: 5%;
        }
      }
    }
  }
`;

export const Filters = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    position: relative;
    display: flex;
    align-items: center;

    input {
      height: 45px;
      border-radius: 5px;
      border: 1px solid var(--text);
      padding: 10px;
      background: var(--white);
      padding-right: 40px;
      width: 200px;
    }

    svg {
      position: absolute;
      right: 10px;
    }
  }

  & > a {
    background: var(--orange);
    color: var(--white);
    border: 2px solid var(--orange);
    border-radius: 4px;

    width: 120px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .2s;

    svg {
      margin-right: 3px;
    }

    &:hover {
      background: var(--white);
      color: var(--orange);
      border: 2px solid var(--orange);
    }
  }

  @media (min-width: 768px) {
    form {
      input {
        width: 260px;
      }
    }
  }
`;
