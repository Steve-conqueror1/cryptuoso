import { InMemoryCache ,ApolloClient, HttpLink, from } from "@apollo/client";
import {onError} from '@apollo/client/link/error';


const cache = new InMemoryCache()

const errorLink = onError(({graphqlErrors, networkError}) => {
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path}) => {
            alert(`Graphql error ${message}`)
        })
    }
})


const link = from([
    errorLink,
     new HttpLink({uri: "https://hasura.dev.cryptuoso.com/v1/graphql"})
    ])

export const client = new ApolloClient({
    link,
    cache
  
});


