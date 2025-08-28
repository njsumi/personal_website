import './Footer.css'

function Footer() {

    return (
        <>
            <nav className='footer'>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <li className='footer-item'>
                            <p className='name-footer'>Nina Gruteser</p>
                        </li>
                        <li className='footer-item'>
                            <a href='#home' className='footer-links'>
                                Home
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href='#projects' className='footer-links'>
                                Projects
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href='#about' className='footer-links'>
                                About
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href='#contact' className='footer-links'>
                                Contact
                            </a>
                        </li>
                    </div>

                    <div className='footer-right'>
                        <div className="social-icons">
                            <a href="https://github.com/njsumi" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/nina-gruteser" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:ngrutese@purdue.edu">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </>
        
    )
}

export default Footer