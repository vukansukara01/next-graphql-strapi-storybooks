import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom';

describe('Card', () => {

    test('card should be rendered', () => {
        const handleOpen = jest.fn();

        render(
            <Card
                user={'Emisija SAT'}
                id={1}
                title={'Novi audi a4'}
                body={'Predstavljen 2023 u Mihnenu'}
                handleOpenPost={handleOpen}
            />
        );

        const titleComponent = screen.getByText(/Emisija Sat/i);

        expect(titleComponent).toBeInTheDocument();
    });

    test('when card is clicked, it should not show the posts page', async () => {
        const handleOpen = jest.fn();

        render(
            <Card
                user={'Emisija SAT'}
                id={1}
                title={'Novi audi a4'}
                body={'Predstavljen 2023 u Mihnenu'}
                handleOpenPost={handleOpen}
            />
        );

        fireEvent.click(screen.getByTestId('card'));

        expect(handleOpen).toBeCalled();
    });
});
