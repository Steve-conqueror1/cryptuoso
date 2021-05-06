import { InMemoryCache, ApolloClient } from "@apollo/client";

const uri = "https://hasura.dev.cryptuoso.com/v1/graphql";
const cache = new InMemoryCache();

export const client = new ApolloClient({
    uri, cache  
});


