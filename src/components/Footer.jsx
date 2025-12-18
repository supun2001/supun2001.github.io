import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2>Supun Hasanka</h2>
                    <p>Creating the impossible.</p>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Socials</h4>
                        <a href="https://www.linkedin.com/in/supun-hasanka-908741186/">LinkedIn</a>
                        <a href="https://github.com/supun2001">GitHub</a>
                    </div>
                    <div className="link-column">
                        <h4>Contact</h4>
                        <a href="mailto:supun2001hasanka@gmail.com">E-mail</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Supun Hasanka. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
