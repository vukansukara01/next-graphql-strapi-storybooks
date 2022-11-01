import {
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';

import { PostsDocument } from './graphql/posts.generated';
import { Posts } from './index';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mocks = [
    {
        request: {
            query: PostsDocument,
            variables: {
                id: '1',
            },
        },
        result: {
            data: {
                attributes: {
                    title: 'Breaking news',
                    body: 'New macbook pro has been announced',
                    userName: 'verge',
                },
            },
        },
    },
];

describe('Posts page', () => {
    test('render posts', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const spinnerElement = await screen.getByTestId('spinner');

        expect(spinnerElement).toBeInTheDocument();
    });

    test('search input should be rendered', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const searchInputElement = await screen.findByPlaceholderText(
            /search.../i
        );
        await waitFor(() => expect(searchInputElement).toBeInTheDocument());
    });

    test('spinner should be rendered while fetching', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const spinnerInputElement = await screen.getByTestId('spinner');

        expect(spinnerInputElement).toBeInTheDocument();
    });

    test('spinner should not be rendered after fetching', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const spinnerInputElement = screen.getByTestId('spinner');

        await waitFor(() =>
            expect(spinnerInputElement).not.toBeInTheDocument()
        );
    });

    test('should not display the page after the click on the any of the cards', async () => {
        const user = userEvent.setup();

        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const spanElement = await screen.queryByTestId('card');

        await user.click(spanElement);

        await waitFor(() => expect(spanElement).not.toBeInTheDocument());
    });

});

