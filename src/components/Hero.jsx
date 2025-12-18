import React from 'react';
import { Link } from 'react-router-dom';
import Starfield from './Starfield';
import Typewriter from './Typewriter';
import aboutMeImg from '../assets/imgnew.png';

const Hero = () => {
    return (
        <section id="hero">
            <Starfield />
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <Typewriter text="Hi,I'm Supun Hasanka" delay={100} />
                        <h1 className="hero-title">Software engineer,<br /><span className="gradient-text">Ethical hacker</span></h1>
                        <p className="hero-subtitle">
                            I made things, I break things, I fix things.
                        </p>
                        <div className="cta-group">
                            <Link to="/blog" className="btn btn-primary">Blog</Link>
                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={aboutMeImg} alt="Supun Hasanka" />
                    </div>
                </div>
            </div>
            <div className="hero-glow"></div>
        </section>
    );
};

export default Hero;
