import React from 'react'

export default function Header() {
    return (
        <header className='header' data-testid="header">
            <nav className="container">
                <div className="header_nav__logo" data-testid="logo">
                    <a href="/">
                        <span>BuildingLink</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}
