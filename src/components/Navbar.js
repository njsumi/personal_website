import React, { useState, useEffect } from 'react';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [click]);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='name-navbar'>
                        Nina Gruteser
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <div className={`bar top ${click ? "open" : ""}`}></div>
                        <div className={`bar middle ${click ? "open" : ""}`}></div>
                        <div className={`bar bottom ${click ? "open" : ""}`}></div>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#home' className='nav-links' onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className='nav-links' onClick={closeMenu}>
                                Projects
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-links' onClick={closeMenu}>
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact' className='nav-links' onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar