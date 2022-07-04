import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_SERVER_URI = "https://api.spacex.land/graphql/";

const client = new ApolloClient({
  uri: GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;
