import React from 'react';

const projects = [
    {
        title: "Niro AI – AI-Driven Doc-to-LoRA Cyber Threat Intelligence",
        category: "MSc Research Project",
        image: "/assets/projects/ai-doc-to-lora.png",
        imageMode: "contain",
        description: "A dependency-aware candidate zero-day vulnerability analysis system that compares Doc-to-LoRA CTI reasoning with a retrieval-based baseline.",
        industry: "Cyber Security, Threat Intelligence, AI Research",
        platform: "Public CTI + LoRA-style Knowledge Modules + Retrieval Baseline",
        duration: "Research in Progress",
        link: "https://github.com/supun2001/niro_ai",
        action: "View overview"
    },
    {
        title: "Billify POS",
        category: "POS System",
        image: "/assets/projects/billify-pos.webp",
        description: "A smart POS system built for fast billing, inventory visibility, and smoother day-to-day retail operations.",
        industry: "Retail, Showroom Sales, E-commerce",
        platform: "Web App + Billing Interface + Admin Dashboard",
        duration: "4 Months",
        link: "https://klaynz.com/portfolio/billify-pos"
    },
    {
        title: "AI HRM",
        category: "Business System",
        image: "/assets/projects/ai-hrm.webp",
        description: "An AI-powered HR management platform for employee operations, automation, and people insights.",
        industry: "Human Resources, Business Operations",
        platform: "Web Application",
        duration: "4 Months",
        link: "https://klaynz.com/portfolio/ai-hrm"
    },
    {
        title: "Vintage Cushions",
        category: "POS System",
        image: "/assets/projects/vintage-cushions.webp",
        description: "A showroom-focused POS solution tailored for furniture sales, inventory handling, and customer service flow.",
        industry: "Furniture Retail, Showroom Sales",
        platform: "Web App + Billing Interface",
        duration: "3 Months",
        link: "https://klaynz.com/portfolio/vintage-cushions"
    },
    {
        title: "Eco Connect",
        category: "Web Platform",
        image: "/assets/projects/eco-connect.webp",
        description: "A charity-focused platform built to connect communities and support meaningful initiatives.",
        industry: "Charity, Community, Non-Profit",
        platform: "Website",
        duration: "3 Months",
        link: "https://klaynz.com/portfolio/eco-connect"
    },
    {
        title: "Motozone",
        category: "Business Website",
        image: "/assets/projects/motozone.webp",
        description: "A modern digital platform for the automotive industry with a strong business-focused web presence.",
        industry: "Automotive, Vehicle Services",
        platform: "Website",
        duration: "2 Months",
        link: "https://klaynz.com/portfolio/motozone"
    },
    {
        title: "Maharu Hardware",
        category: "POS System",
        image: "/assets/projects/maharu-hardware.webp",
        description: "A hardware-focused POS system built for fast invoicing, stock handling, and reliable daily counter operations.",
        industry: "Hardware Retail, Counter Sales",
        platform: "Desktop POS System",
        duration: "3 Months",
        link: "https://klaynz.com/portfolio/maharu-hardware"
    }
];

const Work = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-kicker">Portfolio</span>
                    <h2 className="section-title">Projects</h2>
                    <p className="section-intro">
                        A selection of production systems, business websites, and upcoming research across retail, HR, charity, automotive, hardware, and cyber security.
                    </p>
                </div>
                <div className="project-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <a
                                href={project.link}
                                className={`card-image ${project.imageMode === "contain" ? "card-image-contain" : ""}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                                <span className="project-category">{project.category}</span>
                            </a>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-meta">
                                    <span>{project.duration}</span>
                                    <span>{project.platform}</span>
                                </div>
                                <div className="project-industry">{project.industry}</div>
                                <a href={project.link} className="link-arrow" target="_blank" rel="noopener noreferrer">{project.action || "View case study"} &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
