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
