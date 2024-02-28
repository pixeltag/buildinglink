import React, { useState } from 'react'
import FileContentStatus from './FileContentStatus'
import TxtUploaderPreview from './TxtUploaderPreview'

export default function TxtUploader() {
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileSize, setFileSize] = useState<number | null>(null)
    const [fileContent, setFileContent] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e && e.target.files) {
            const file = e.target.files[0]
            const fileTmpName = file.name;
            const extension = fileTmpName.split('.').pop() as string;
            const isSupported = ['txt'].includes(extension);
            if (isSupported) {
                setFileName(file.name)
                setFileSize(file.size)
                const reader = new FileReader()
                reader.readAsText(file)
                reader.onload = () => {
                    setFileContent(reader.result as string)
                }
                reader.onerror = () => {
                    console.log('File Error', reader.error)
                }
            }
        }
    }

    const handleRemoveFile = () => {
        setFileName(null);
        setFileSize(null);
        setFileContent(null)
    }
    return (
        <>
            <div className="uploader">
                <label htmlFor="dropzone-file" className="">
                    <div className="uploader_wrapper">
                        <svg aria-hidden="true" className='uploader_icon' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p><span className="uploader_title">Click to upload</span></p>
                        <p className="uploader_description">.TXT extension only</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileChange(e)} accept=".txt" />
                </label>
            </div>

            {fileName && fileSize && (
                <TxtUploaderPreview fileName={fileName} fileSize={fileSize} handleRemoveFile={handleRemoveFile} />
            )}

            {fileContent && (
                <FileContentStatus data={fileContent} />
            )}

        </>


    )
}



