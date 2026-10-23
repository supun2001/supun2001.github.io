import React from 'react';

const certificates = [
    'Developing LLM Applications with LangChain',
    'Building AI Applications with Pinecone',
    'Introduction to Embeddings with the OpenAI API',
    'LLMOps Concepts',
    'Working with Hugging Face',
    'Prompt Engineering with the OpenAI API',
    'Working with the OpenAI API',
    'Intermediate Python for Developers',
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
                {certificates.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default Certificates;
