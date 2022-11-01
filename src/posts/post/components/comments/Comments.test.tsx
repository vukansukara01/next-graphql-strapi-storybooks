import {Comments} from "./index";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {UserModel} from "../../../model/UserModel";


describe('Comments component',()=>{
    const user: UserModel = {
        id: 1,
        name: 'Emisija SAT',
        username: '',
        email: '',
        phone: '',
        website: '',
    };

    test('comments should be rendered',()=>{
        render(<Comments  dateAdded={'22.08.2022'} text={'Testing comments'} user={user}/>);

        const text = screen.getByText(/testing comments/i);

        expect(text).toBeInTheDocument();
    })
})