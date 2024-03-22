import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Test for the PostComment component', () => {
    it('Should render the component correctly', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Add two comments', () => {
        render(<PostComment/>);

        // Get textarea id
        const textarea = screen.getByTestId('textarea-for-comments')

        // Test first comment
        fireEvent.change(textarea, {target: {value: 'First comment'}})
        fireEvent.submit(screen.getByTestId('add-comment'))

        // Test Second comment
        fireEvent.change(textarea, {target: {value: 'Second comment'}})
        fireEvent.submit(screen.getByTestId('add-comment'))

        // Expected two comments in screen
        expect(screen.getByText('First comment')).toBeInTheDocument()
        expect(screen.getByText('Second comment')).toBeInTheDocument()
    });
});