import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';

import { PostDocument } from '../graphql/post.generated';
import Post from './Post';

const mocks = [
    {
        request: {
            query: PostDocument,
            variables: {
                id: '1',
            },
        },
        result: {
            data: {
                attributes: {
                    title: 'Ide gas',
                    body: 'Sad na max',
                    userName: 'baka prase',
                },
            },
        },
    },
];

describe('Post component renders', () => {
    test('spinner should be rendered while fetching', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Post id={1} />
            </MockedProvider>
        );

        const spinnerElement = await screen.getByTestId('spinner');

        expect(spinnerElement).toBeInTheDocument();
    });

    test('spinner should not be rendered after fetching', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Post id={1} />
            </MockedProvider>
        );

        const spinnerInputElement = screen.getByTestId('spinner');

        await waitFor(() =>
            expect(spinnerInputElement).not.toBeInTheDocument()
        );
    });
});
