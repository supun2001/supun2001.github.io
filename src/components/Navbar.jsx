import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLink = (hash) => {
        if (isHome) return hash;
        return `${import.meta.env.BASE_URL}${hash}`;
    };

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    SH<span className="gradient-text">.</span>
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href={getLink("#about")} onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href={getLink("#experience")} onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <Link to="/blog"
                        className={location.pathname.startsWith('/blog') ? 'active' : ''}
                        onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>
                    {/* <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a> */}
                    <a href={getLink("#contact")} className="nav-cta" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>
                </div>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle Menu"
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
