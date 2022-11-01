import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

type IApolloProvider = {
    children: React.ReactNode;
};

const StrapiApolloProvider: FC<IApolloProvider> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;
