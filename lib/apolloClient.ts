import { InMemoryCache ,ApolloClient, HttpLink, from } from "@apollo/client";
import {onError} from '@apollo/client/link/error';


const cache = new InMemoryCache()




const link = from([ 
     new HttpLink({uri: "https://hasura.dev.cryptuoso.com/v1/graphql"})
    ])

export const client = new ApolloClient({
    link,
    cache  
});


