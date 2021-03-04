import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientGraphql = new ApolloClient({
  uri: 'https://teste.deliverycenter.io/graphql',
  cache: new InMemoryCache()
});

export default clientGraphql;
