import Layout from "../components/shared/Layout";
import { createApolloClient } from "./../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const client = createApolloClient();

    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;
