import React from 'react'
import './navbar.css'
import Logo from '../images/logo.png';

function Navbar() {
    return (
        <div className='bg-navbar'>
            <nav className="navbar">
                <div className="nav__logo">
                    <img src={Logo} alt="logo-nav" />
                </div>

                <ul className='nav__links'>
                    <li className="nav__link">Home</li>
                    <li className="nav__link">Encontrar</li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar