import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
// import Work from './Work';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            {/* <Work /> */}
        </main>
    );
};

export default Home;
