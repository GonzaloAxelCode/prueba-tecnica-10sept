import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URL_BASE_GRAPHQL } from "../constants";

export const clientGHQL = new ApolloClient({
    uri: URL_BASE_GRAPHQL,
    cache: new InMemoryCache(),
});

