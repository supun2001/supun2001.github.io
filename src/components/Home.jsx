import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Certificates from './Certificates';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Certificates />
            <Work />
        </main>
    );
};

export default Home;
