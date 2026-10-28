import React from 'react';

const certificates = [
    {
        title: 'Developing LLM Applications with LangChain',
        issuer: 'DataCamp',
        dateTime: '2026-10-23',
        date: 'October 23, 2026',
        duration: '3 hours'
    },
    {
        title: 'Building AI Applications with Pinecone',
        issuer: 'DataCamp',
        dateTime: '2026-10-21',
        date: 'October 21, 2026',
        duration: '3 hours'
    },
    {
        title: 'Introduction to Embeddings with the OpenAI API',
        issuer: 'DataCamp',
        dateTime: '2026-10-19',
        date: 'October 19, 2026',
        duration: '3 hours'
    },
    {
        title: 'LLMOps Concepts',
        issuer: 'DataCamp',
        dateTime: '2026-10-16',
        date: 'October 16, 2026',
        duration: '1 hour'
    },
    {
        title: 'Working with Hugging Face',
        issuer: 'DataCamp',
        dateTime: '2026-10-15',
        date: 'October 15, 2026',
        duration: '2 hours'
    },
    {
        title: 'Prompt Engineering with the OpenAI API',
        issuer: 'DataCamp',
        dateTime: '2026-10-15',
        date: 'October 15, 2026',
        duration: '4 hours'
    },
    {
        title: 'Working with the OpenAI API',
        issuer: 'DataCamp',
        dateTime: '2026-10-14',
        date: 'October 14, 2026',
        duration: '3 hours'
    },
    {
        title: 'Intermediate Python for Developers',
        issuer: 'DataCamp',
        dateTime: '2026-10-14',
        date: 'October 14, 2026',
        duration: '2 hours'
    },
];

const Certificates = () => (
    <section id="certificate" className="section dark-bg" aria-labelledby="certificate-title">
        <div className="container">
            <div className="section-heading">
                <span className="section-kicker">Continuous learning</span>
                <h2 id="certificate-title" className="section-title">Certificates</h2>
                <p className="section-intro">Completed courses and certificates in AI and software development.</p>
            </div>
            <article className="featured-certificate" aria-labelledby="featured-certificate-title">
                <div className="featured-certificate-content">
                    <span className="certificate-badge">Featured certification</span>
                    <p className="featured-certificate-issuer">DataCamp</p>
                    <h3 id="featured-certificate-title">AI Engineer for Developers <span>Associate</span></h3>
                    <p className="certificate-details">Certified <time dateTime="2026-10-28">October 28, 2026</time></p>
                    <p className="certificate-id">Credential ID: AIEDA0012687371471</p>
                    <a className="btn btn-primary" href="/certificates/datacamp-ai-engineer-associate.pdf" target="_blank" rel="noopener noreferrer">View certificate (PDF) <span aria-hidden="true">↗</span></a>
                </div>
                <a className="certificate-preview" href="/certificates/datacamp-ai-engineer-associate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Supun Hasanka’s DataCamp AI Engineer for Developers Associate certificate (PDF)">
                    <img src="/certificates/datacamp-ai-engineer-associate.webp" alt="DataCamp AI Engineer for Developers Associate certificate awarded to Supun Hasanka on October 28, 2026" width="1238" height="711" loading="lazy" />
                </a>
            </article>
            <h3 className="certificate-list-heading">Course certificates</h3>
            <ul className="certificate-list">
                {certificates.map((certificate) => (
                    <li key={certificate.title}>
                        <h3>{certificate.title}</h3>
                        <p className="certificate-details">
                            {certificate.issuer} · Completed <time dateTime={certificate.dateTime}>{certificate.date}</time> · {certificate.duration}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Certificates;
