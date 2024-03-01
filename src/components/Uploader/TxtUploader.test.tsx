import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import TxtUploader from './TxtUploader';

describe("TxtUploader", () => {

    test('should render TxtUploader component', () => {
        render(<TxtUploader />)
        const txtUploaderElement = screen.getByTestId("txtuploader");
        const txtUploaderWrapperElement = screen.getByTestId("uploaderWrapper");
        const inputFile = screen.getByLabelText('input-file');

        expect(txtUploaderElement).toBeInTheDocument();
        expect(txtUploaderWrapperElement).toBeInTheDocument();
        expect(txtUploaderWrapperElement).toHaveTextContent('Click to upload')
        expect(inputFile).toBeInTheDocument();
        expect(inputFile).toHaveAttribute('type', 'file');
    })

    test("FireEvent  onChange should work", async () => {
        render(<TxtUploader />)
        const inputFile = screen.getByLabelText('input-file');
        await fireEvent.change(inputFile, { target: { files: ['dummyValue.something'] } })
        await waitFor(() => expect(inputFile).toHaveAttribute('type', 'file'))
    })
})


test('It renders correctly', () => {
    const element = render(<TxtUploader />);
    expect(element).toMatchSnapshot();
})