import styled from 'styled-components';

export const OrderList = styled.div`
  background: var(--white);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 50px;

  span {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;

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

  .no-orders {
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
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

    border-bottom: 1px solid #EEEEEE;

    padding: 20px 0;
    color: var(--text-table);

    transition: background .2s;

    &:hover {
      background: rgba(0,0,0,0.02)
    }

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

  &:last-child a {
    border-bottom: 0;
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
      width: 250px;
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
    margin-left: 40px;

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
`;
