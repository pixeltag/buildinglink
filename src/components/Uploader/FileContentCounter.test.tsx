import { render, screen } from '@testing-library/react';
import FileContentCounter from './FileContentCounter';

test('Should render table of sorted words and it repeated counts', () => {
    const content = 'This is a test. This is only a test.'
    render(<FileContentCounter data={content} />);
    const table = screen.getByTestId('words-table');
    const rows = screen.getAllByTestId('table-rows');
    expect(table).toBeInTheDocument();
    expect(rows).toHaveLength(5);

})

test('It renders correctly', () => {
    const content = 'This is a test. This is only a test.'
    const element = render(<FileContentCounter data={content} />);
    expect(element).toMatchSnapshot();
})
