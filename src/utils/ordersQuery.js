import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  {
    orders {
      _id
      store
      amount
      deliveryFee
      customer {
        name
      }
      address {
        _id
        number
        neighborhood
        complement
        city
        state
        street
      }
      items {
        _id
        name
        amount
        quantity
        note
      }
      payments {
        _id
        method
        amount
      }
    }
  }
`;

export const GET_ORDERS_SHORT = gql`
  {
    orders {
      _id
      store
      amount
      deliveryFee
      reference
      customer {
        name
      }
      payments {
        _id
        method
        amount
      }
    }
  }
`;
