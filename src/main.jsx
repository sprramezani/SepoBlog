import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from "react-router-dom";

const link = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_API_URL,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
