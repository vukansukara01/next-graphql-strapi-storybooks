import React from 'react';
import type { AppProps } from 'next/app';
import PostsContextProvider from '../src/posts/context/PostsContext';
import '../src/styles/globals.css';
import StrapiApolloProvider from '../src/core/apollo/apollo';
import { ThemeProvider } from '@mui/material';
import { customTheme } from '../src/core/theme/Theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StrapiApolloProvider>
            <ThemeProvider theme={customTheme}>
                <PostsContextProvider>
                    <Component {...pageProps} />
                </PostsContextProvider>
            </ThemeProvider>
        </StrapiApolloProvider>
    );
}

export default MyApp;
