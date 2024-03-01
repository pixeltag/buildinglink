import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TxtUploaderPreview from "./TxtUploaderPreview";


test('Shoud render txtUploaderPreview compoent', async () => {
    const handleRemoveFileMockFn = jest.fn()
    render(<TxtUploaderPreview
        fileName='name'
        fileSize={10}
        content="test"
        handleRemoveFile={() => handleRemoveFileMockFn} />)
    const fileNameElement = screen.getByTestId("file-name");
    const fileSizeElement = screen.getByTestId("file-size");
    const contentElement = screen.getByTestId("content");

    expect(fileNameElement).toBeInTheDocument();
    expect(fileNameElement).toHaveTextContent('name')

    expect(fileSizeElement).toBeInTheDocument();
    expect(fileSizeElement).toHaveTextContent('10 bytes')

    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent('test')
})



test('Shoud fire remove fn when click on remove btn', async () => {
    const handleRemoveFileMockFn = jest.fn()
    render(<TxtUploaderPreview
        fileName='name'
        fileSize={10}
        content="test"
        handleRemoveFile={() => handleRemoveFileMockFn()} />)

    const removeBtn = screen.getByTestId('remove-btn');
    fireEvent.click(removeBtn)
    expect(handleRemoveFileMockFn).toHaveBeenCalledTimes(1);
})


test('It renders correctly', () => {
    const handleRemoveFileMockFn = jest.fn()
    const element = render(<TxtUploaderPreview
        fileName='name'
        fileSize={10}
        content="test"
        handleRemoveFile={() => handleRemoveFileMockFn()} />)
    expect(element).toMatchSnapshot();
})