import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            company: "Klaynz Technologies",
            role: "Forward Deployed Engineer",
            period: "Jul 2023 - April 2026",
            description: "Delivered customer-facing software and AI solutions, working directly with customers to understand business needs, define technical requirements and take applications from development into production.",
            highlights: [
                "Bridged customer discussions and hands-on engineering, translating requirements into practical features.",
                "Provided clear technical communication to technical and non-technical stakeholders, explaining solution designs, implementation trade-offs and delivery progress.",
                "Supported technical sales through solution demonstrations, feasibility discussions and explanations of how proposed features could address customer needs.",
                "Built and deployed production retrieval-augmented generation (RAG) systems, integrating LLMs and information retrieval into customer-facing applications.",
                "Developed Java, Python and Flask backend services, delivering 80+ REST API endpoints connected to SQL-backed workflows and application integrations.",
                "Deployed and supported production applications on AWS EC2, using S3, RDS and CloudWatch to maintain live services and investigate customer-reported issues.",
                "Implemented JWT, OAuth 2.0, role-based access control and input validation to support secure customer deployments.",
                "Tested and improved backend services through pytest, debugging and peer reviews, maintaining reusable components and SQL and NoSQL data models.",
                "Mentored three engineering interns over four months through code reviews, technical guidance and delivery of practice projects and production features."
            ]
        },
        {
            company: "Ministry of Defence Sri Lanka",
            role: "Intern Software Engineer",
            period: "Oct 2022 - July 2023",
            description: "Developed an emergency flood detection and early warning system for the Kelani River, Sri Lanka. Built a React.js web dashboard to visualise real-time river water levels and rainfall data, implementing efficient client-side data handling, state management, and API polling to ensure timely updates during high-traffic scenarios. Designed the system architecture to support load balancing and scalable data distribution, enabling reliable access for multiple stakeholders during emergency events. Integrated Arduino-based sensors to measure river water levels and rainfall intensity, transmitting data to the backend for analysis, alert generation, and early warning notifications."
        }
    ];

    const educationData = [
        {
            institution: "University of the West of Scotland, UK",
            degree: "M.Sc in Cyber Security",
            period: "2025 - 2026",
            grade: "Distinction",
            description: "Currently pursuing an MSc in Cyber Security with a strong emphasis on practical, real-world security operations and threat mitigation. Gaining hands-on experience in network and system security, malware analysis, and incident response through lab-based simulations of real cyber attacks and defensive scenarios. Actively using industry-standard tools such as Wireshark, Nmap, Metasploit, Burp Suite, Kali Linux, Splunk, and SIEM platforms to perform vulnerability assessment, penetration testing, traffic analysis, and threat detection. Applying cryptography, access control, and secure configuration principles to protect modern IT infrastructures, including cloud and enterprise environments, while working within ethical, legal, and compliance frameworks aligned with industry standards."
        },
        {
            institution: "University of Plymouth, UK",
            degree: "B.Sc. in Software Engineering",
            period: "2021 - 2024",
            grade: "Second Upper Division",
            description: "Completed a Bachelor of Science in Software Engineering with a strong foundation in software development, system design, and problem-solving. Gained hands-on experience in object-oriented programming, web and mobile application development, databases, and software testing. Applied software engineering principles such as requirements analysis, version control, agile methodologies, and secure coding practices through individual and team-based projects. Developed practical skills in building scalable, reliable, and maintainable software systems aligned with real-world industry requirements."
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="resume-grid">
                    <div className="resume-column">
                        <h2 className="section-title">Experience</h2>
                        <div className="timeline">
                            {experienceData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-date">{item.period}</div>
                                    <h3 className="timeline-title">{item.role}</h3>
                                    <h4 className="timeline-subtitle">{item.company}</h4>
                                    <p className="timeline-text">{item.description}</p>
                                    {item.highlights && (
                                        <ul className="timeline-text timeline-highlights">
                                            {item.highlights.map((highlight) => (
                                                <li key={highlight}>{highlight}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="resume-column">
                        <h2 className="section-title">Education</h2>
                        <div className="timeline">
                            {educationData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-date">{item.period}</div>
                                    <h3 className="timeline-title">{item.degree}</h3>
                                    <h4 className="timeline-subtitle">{item.institution}</h4>
                                    {item.grade && <div className="timeline-grade">{item.grade}</div>}
                                    <p className="timeline-text">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
