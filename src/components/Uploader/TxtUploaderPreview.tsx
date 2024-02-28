import React from 'react'

export default function TxtUploaderPreview({ fileSize, fileName, handleRemoveFile }: { fileSize: number, fileName: string, handleRemoveFile: () => void }) {
    return (
        <ul className="mt-5 rounded-lg p-3 divide-y divide-gray-200 dark:divide-gray-700 border-2 border-gray-300  w-full">
            <li className="pb-0">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-gray-100 p-2 text-center">
                            <svg className="w-5 h-5 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                            {fileName}
                        </p>
                        <p className="text-sm text-gray-500 font-normal">
                            {fileSize} KB
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        <button
                            type="button"
                            onClick={() => handleRemoveFile()}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
