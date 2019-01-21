import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { Platform } from 'react-native';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all'
  }
}

const httpLink = createHttpLink({
  uri: Platform.OS === "ios" ? 'http://localhost:4000/graphql' : "http://10.0.2.2:4000/graphql",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  onError: (e) => {
    console.log(e)
  },
  defaultOptions: defaultOptions
});

export default apolloClient;