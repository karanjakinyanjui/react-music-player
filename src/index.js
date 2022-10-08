import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import client from "./graphql/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
