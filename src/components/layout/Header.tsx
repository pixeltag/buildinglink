import React from 'react'

export default function Header() {
    return (
        <header className='border border-gray-200'>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-900">BuildingLink</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}
