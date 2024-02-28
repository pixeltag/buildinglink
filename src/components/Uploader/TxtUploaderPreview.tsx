import React from 'react'

export default function TxtUploaderPreview({ fileSize, fileName, handleRemoveFile }: { fileSize: number, fileName: string, handleRemoveFile: () => void }) {
    return (
        <ul className="uploader-preview">
            <li>
                <div className="uploader-preview_list">
                    <div className='uploader-preview_wrapper'>
                        <div>
                            <div className="uploader-preview_icon">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <p className="uploader-preview_filename">
                                {fileName}
                            </p>
                            <p className="uploader-preview_filesize">
                                {fileSize} bytes
                            </p>
                        </div>
                    </div>
                    <div className="uploader-preview_action">
                        <button
                            type="button"
                            onClick={() => handleRemoveFile()}
                            className="uploader-preview_button">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    )
}
