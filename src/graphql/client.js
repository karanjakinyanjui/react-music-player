import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://thorough-treefrog-22.hasura.app/v1/graphql",
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
