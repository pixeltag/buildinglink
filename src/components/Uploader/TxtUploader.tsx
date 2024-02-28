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
                    console.log((reader.result as string))
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
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-md text-gray-600"><span className="font-normal">Click to upload</span></p>
                        <p className="text-xs text-gray-400">.TXT extension only</p>
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



