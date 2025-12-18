import React from 'react';

const projects = [
    {
        title: "Project Alpha",
        description: "Next-gen web application with real-time capabilities.",
        gradient: "gradient-1",
        link: "#"
    },
    {
        title: "Neon System",
        description: "A design system for modern enterpise applications.",
        gradient: "gradient-2",
        link: "#"
    },
    {
        title: "Hyper Dash",
        description: "Analytics dashboard with predictive AI modeling.",
        gradient: "gradient-3",
        link: "#"
    }
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="section-title">Selected Works</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className={`card-image ${project.gradient}`}></div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="link-arrow">Learn more &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
