import React, { useState } from 'react'
import { Loader } from '../loader/Loader'
import FileContentCounter from './FileContentCounter'
import TxtUploaderPreview from './TxtUploaderPreview'

export default function TxtUploader() {
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileSize, setFileSize] = useState<number | null>(null)
    const [fileContent, setFileContent] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [logs, setLogs] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setLogs([])
        e.preventDefault()
        if (e && e.target.files) {
            const file = e.target.files[0]
            const fileType = file.type === 'text/plain'
            if (fileType) {
                setFileName(file.name)
                setFileSize(file.size)
                const reader = new FileReader()
                reader.readAsText(file)
                reader.onloadstart = (e) => {
                    handleLogger(e)
                    setIsLoading(true)
                }
                reader.onload = (e) => {
                    setFileContent(reader.result as string)
                    handleLogger(e)
                }
                reader.onloadend = (e) => {
                    handleLogger(e)
                    setIsLoading(false)
                }
                reader.onprogress = (e) => handleLogger(e)
                reader.onerror = (e) => {
                    console.log('File Error', reader.error)
                    handleLogger(e)
                    setError('Something went wrong with file reader.')
                    setIsLoading(false)
                }
                reader.onabort = (e) => handleLogger(e)
            } else {
                setError('Please select a valid text file.')
            }
        }
    }

    const handleLogger = (event: ProgressEvent<FileReader>) => {
        console.log(`${event.type}: ${event.loaded} bytes transferred\n`);
        setLogs((prevLogs) => [...prevLogs, `${event.type}: ${event.loaded} bytes transferred`])
    }

    const handleRemoveFile = () => {
        setFileName(null);
        setFileSize(null);
        setFileContent(null)
        setError(null)
        setLogs([])
    }
    return (
        <>
            {error && (<div className='alert-error'>{error}</div>)}
            {isLoading && <Loader />}
            <div className="uploader" data-testid="txtuploader">
                <label htmlFor="dropzone-file">
                    <div className="uploader_wrapper" data-testid="uploaderWrapper">
                        <svg aria-hidden="true" className='uploader_icon' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p><span className="uploader_title">Click to upload</span></p>
                        <p className="uploader_description">.TXT extension only</p>

                        {logs.length > 0 && (
                            <ul className='uploader_logger'>{logs.map((log, index) => <li key={index}>{log}</li>)}</ul>
                        )}
                    </div>
                    <input id="dropzone-file" aria-label="input-file" type="file" className="hidden" onChange={(e) => handleFileChange(e)} accept=".txt" />
                </label>
            </div>

            {fileName && fileSize && (
                <TxtUploaderPreview fileName={fileName} fileSize={fileSize} handleRemoveFile={handleRemoveFile} content={fileContent} />
            )}

            {fileContent && (
                <FileContentCounter data={fileContent} />
            )}

        </>


    )
}



