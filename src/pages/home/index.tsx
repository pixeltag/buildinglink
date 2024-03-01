import React from 'react'
import TxtUploader from '../../components/Uploader/TxtUploader'

export default function Home() {
    return (
        <>
            <h3 className='mb-2 text-sm' data-testid="title">Upload  Text File</h3>
            <TxtUploader />
        </>
    )
}
