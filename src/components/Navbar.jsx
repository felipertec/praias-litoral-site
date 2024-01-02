import React from 'react'
import './navbar.css'
import Logo from '../images/logo.png';

function Navbar() {

    function teste() {
        if (document.documentElement.scrollTop > 200) {
            document.getElementById('navbar_top').style.position = 'fixed'
            document.getElementById('navbar_top').style.transition = '1s'
            document.getElementById('navbar_top').style.padding = '10px'

            //document.getElementById('navbar_top').style.marginBot tom = '50px'
        } else if (document.documentElement.scrollTop === 0) {
            document.getElementById('navbar_top').style.position = 'relative'
            document.getElementById('navbar_top').style.padding = '0px'
            document.getElementById('navbar_top').style.transition = '1s'
        }

    }
    window.onscroll = function () { teste() };

    function scrollMove(valor) {
        window.scrollTo(0, valor)

    }



    return (
        <div id="navbar_top" className='bg-navbar'>
            <nav className="navbar">
                <div className="nav__logo">
                    <img src={Logo} alt="logo-nav" />
                </div>

                <ul className='nav__links'>
                    <li className="nav__link" onClick={() => scrollMove(0)}>Home</li>
                    <li className="nav__link" onClick={() => scrollMove(300)} >Encontrar</li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar