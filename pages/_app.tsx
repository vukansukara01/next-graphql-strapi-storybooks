import React from 'react';
import type { AppProps } from 'next/app';
import PostsContextProvider from '../src/posts/context/PostsContext';
import '../src/styles/globals.css';
import StrapiApolloProvider from '../src/core/apollo/apollo';


function MyApp({ Component, pageProps }: AppProps) {

    return (
            <StrapiApolloProvider>
                <PostsContextProvider>
                    <Component {...pageProps} />
                </PostsContextProvider>
            </StrapiApolloProvider>
    );
}

export default MyApp;
