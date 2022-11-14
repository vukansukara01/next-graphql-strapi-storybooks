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
                post: {
                    data: {
                        id: '1',
                        attributes: {
                            title: 'Iphone 14 Pro review',
                            body: "Last year I ordered the Pro Max version of the iPhone 13 because I felt that the larger screen real estate was more convenient for photo editing. While that assumption was valid, the larger form factor was also inconvenient for everyday use.\n\nNowadays I use an iPad mini 6 for editing photos while traveling.\n\nSo this year, I bought the smaller iPhone 14 Pro. The screen is 0.6\" smaller compared to the iPhone 14 pro max. In terms of pixels, you'll get 3,01 million pixels with the iPhone 14 Pro, while you'll have 3,6 million pixels on an iPhone 14 Pro Max. That's just 17% fewer pixels on an iPhone 14 Pro than the iPhone 14 Pro Max. I can live with that. The pixel density (PPI) is identical for both iPhone 14 Pro models at 460 PPI.",
                            users_permissions_user: {
                                data: {
                                    attributes: {
                                        name: 'Marques Brownlee',
                                    },
                                },
                            },
                            comments: {
                                data: [
                                    {
                                        attributes: {
                                            text: 'Awesome blog',
                                            dateAdded:
                                                '2022-10-31T07:30:00.000Z',
                                            users_permissions_user: {
                                                data: {
                                                    attributes: {
                                                        name: 'Aleksej Vucic',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    {
                                        attributes: {
                                            text: 'Cool post, keep up the good work',
                                            dateAdded:
                                                '2022-10-04T22:00:00.000Z',
                                            users_permissions_user: {
                                                data: {
                                                    attributes: {
                                                        name: 'Emisija SAT',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                            productImage: {
                                data: {
                                    attributes: {
                                        formats: {
                                            thumbnail: {
                                                name: 'thumbnail_iphone-14-pro-model-unselect-gallery-1-202209.jpeg',
                                                hash: 'thumbnail_iphone_14_pro_model_unselect_gallery_1_202209_b996876517',
                                                ext: '.jpeg',
                                                mime: 'image/jpeg',
                                                width: 245,
                                                height: 138,
                                                size: 4.48,
                                                url: '/uploads/thumbnail_iphone_14_pro_model_unselect_gallery_1_202209_b996876517.jpeg',
                                            },
                                            large: {
                                                name: 'large_iphone-14-pro-model-unselect-gallery-1-202209.jpeg',
                                                hash: 'large_iphone_14_pro_model_unselect_gallery_1_202209_b996876517',
                                                ext: '.jpeg',
                                                mime: 'image/jpeg',
                                                width: 1000,
                                                height: 563,
                                                size: 29.51,
                                                url: '/uploads/large_iphone_14_pro_model_unselect_gallery_1_202209_b996876517.jpeg',
                                            },
                                            medium: {
                                                name: 'medium_iphone-14-pro-model-unselect-gallery-1-202209.jpeg',
                                                hash: 'medium_iphone_14_pro_model_unselect_gallery_1_202209_b996876517',
                                                ext: '.jpeg',
                                                mime: 'image/jpeg',
                                                width: 750,
                                                height: 422,
                                                size: 19.24,
                                                url: '/uploads/medium_iphone_14_pro_model_unselect_gallery_1_202209_b996876517.jpeg',
                                            },
                                            small: {
                                                name: 'small_iphone-14-pro-model-unselect-gallery-1-202209.jpeg',
                                                hash: 'small_iphone_14_pro_model_unselect_gallery_1_202209_b996876517',
                                                ext: '.jpeg',
                                                mime: 'image/jpeg',
                                                width: 500,
                                                height: 281,
                                                size: 11.13,
                                                url: '/uploads/small_iphone_14_pro_model_unselect_gallery_1_202209_b996876517.jpeg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
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

    test('after fetch comments should render', async ()=>{
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Post id={1} />
            </MockedProvider>
        );

        const comments = await screen.findByText(/Awesome blog/i);

        await waitFor(()=> expect(comments).toBeInTheDocument());
    })
});
