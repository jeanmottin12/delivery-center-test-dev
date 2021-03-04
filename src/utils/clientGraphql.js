import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientGraphql = new ApolloClient({
  uri: process.env.REACT_APP_API_GRAPHQL_URL,
  cache: new InMemoryCache()
});

export default clientGraphql;
