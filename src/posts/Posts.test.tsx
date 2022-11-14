import {
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';

import { Posts } from './index';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {HomeDocument} from "./graphql/home.generated";

const mocks = [
    {
        request: {
            query: HomeDocument,
        },
        result: {
            "data": {
                "home": {
                    "data": {
                        "attributes": {
                            "post": [
                                {
                                    "title": "Iphone 14 Pro review",
                                    "body": "Last year I ordered the Pro Max version of the iPhone 13 because I felt that the larger screen real estate was more convenient for photo editing. While that assumption was valid, the larger form factor was also inconvenient for everyday use.\n\nNowadays I use an iPad mini 6 for editing photos while traveling.\n\nSo this year, I bought the smaller iPhone 14 Pro. The screen is 0.6\" smaller compared to the iPhone 14 pro max. In terms of pixels, you'll get 3,01 million pixels with the iPhone 14 Pro, while you'll have 3,6 million pixels on an iPhone 14 Pro Max. That's just 17% fewer pixels on an iPhone 14 Pro than the iPhone 14 Pro Max. I can live with that. The pixel density (PPI) is identical for both iPhone 14 Pro models at 460 PPI.",
                                    "id": "1",
                                    "users_permissions_user": {
                                        "data": {
                                            "attributes": {
                                                "name": "Marques Brownlee"
                                            }
                                        }
                                    }
                                },

                            ]
                        }
                    }
                }
            }
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

    test('card should be rendered', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Posts />
            </MockedProvider>
        );

        const card = await screen.findByText(/Marques Brownlee/i);

        await waitFor(() =>
            expect(card).toBeInTheDocument()
        );
    });

});

