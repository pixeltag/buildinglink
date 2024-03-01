import { render, screen, cleanup } from '@testing-library/react';
import Home from './index';

test('Should render Home component', () => {
    render(<Home />)
    const titleElement = screen.getByTestId('title')
    expect(titleElement).toBeInTheDocument();
});

test('It renders correctly', () => {
    const element = render(<Home />)
    expect(element).toMatchSnapshot();
})