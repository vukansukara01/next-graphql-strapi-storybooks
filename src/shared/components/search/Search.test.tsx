import { fireEvent, render } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';

describe('Search', () => {
    const setup = () => {
        const setSearchTerm = jest.fn();

        const utils = render(<Search setSearchTerm={setSearchTerm} />);
        const input = utils.getByPlaceholderText(
            /search.../i
        ) as HTMLInputElement;
        return {
            input,
            ...utils,
        };
    };
    test('search term should be updated on change', () => {
        const { input } = setup();

        fireEvent.change(input, {
            target: { value: 'test' },
        });

        expect(input.value).toBe('test');
    });
});
