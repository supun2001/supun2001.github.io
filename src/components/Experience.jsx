import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            company: "Belong Studios, USA",
            role: "Intern Game Developer",
            period: "Feb 2025 - April 2025",
            description: "Developed AI-driven enemy behaviour using Unreal Engine 5 and C++, implementing decision-making logic, state machines, and behaviour trees to create responsive and realistic gameplay interactions. Collaborated with designers and developers to integrate AI systems into game environments."
        },
        {
            company: "Klaynz Technologies",
            role: "Full Stack Developer",
            period: "Jan 2024 - Feb 2025",
            description: "Built and maintained full-stack web applications using the MERN stack, developing responsive React.js frontends with efficient state management and data handling, and Node.js/Express APIs for secure data processing. Designed MongoDB schemas, implemented authentication and role-based access, and optimised performance to support scalable, multi-user environments."
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
            grade: "Currently Pursuing",
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
