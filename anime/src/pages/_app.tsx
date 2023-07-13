import { ApolloProvider } from "@apollo/client";
import client from "@/config/apollo";

export default function MyApp({Component, pageProps}: any) {
    return (
        <ApolloProvider client={client}>
            <Component { ...pageProps}/>
        </ApolloProvider>
    )
}