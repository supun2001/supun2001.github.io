import React from 'react';

const certificates = [
    {
        title: 'Building AI Applications with Pinecone',
        date: 'October 21, 2026',
        dateTime: '2026-10-21',
        duration: '3 hours',
        file: 'building-ai-applications-with-pinecone'
    },
    {
        title: 'Introduction to Embeddings with the OpenAI API',
        date: 'October 19, 2026',
        dateTime: '2026-10-19',
        duration: '3 hours',
        file: 'introduction-to-embeddings-with-the-openai-api'
    },
    {
        title: 'LLMOps Concepts',
        date: 'October 16, 2026',
        dateTime: '2026-10-16',
        duration: '1 hour',
        file: 'llmops-concepts'
    },
    {
        title: 'Working with Hugging Face',
        date: 'October 15, 2026',
        dateTime: '2026-10-15',
        duration: '2 hours',
        file: 'working-with-hugging-face'
    },
    {
        title: 'Prompt Engineering with the OpenAI API',
        date: 'October 15, 2026',
        dateTime: '2026-10-15',
        duration: '4 hours',
        file: 'prompt-engineering-openai-api'
    },
    {
        title: 'Working with the OpenAI API',
        date: 'October 14, 2026',
        dateTime: '2026-10-14',
        duration: '3 hours',
        file: 'working-with-openai-api'
    },
    {
        title: 'Intermediate Python for Developers',
        date: 'October 14, 2026',
        dateTime: '2026-10-14',
        duration: '2 hours',
        file: 'intermediate-python-for-developers'
    }
];

const Certificates = () => (
    <section id="certificate" className="section dark-bg" aria-labelledby="certificate-title">
        <div className="container">
            <div className="section-heading">
                <span className="section-kicker">Continuous learning</span>
                <h2 id="certificate-title" className="section-title">Certificate</h2>
                <p className="section-intro">Completed courses and certificates in AI and software development.</p>
            </div>
            <div className="certificate-grid">
                {certificates.map((certificate) => {
                    const assetPath = `${import.meta.env.BASE_URL}assets/certificates/${certificate.file}`;
                    return (
                        <article className="project-card certificate-card" key={certificate.file}>
                            <a className="certificate-preview" href={`${assetPath}.pdf`} target="_blank" rel="noopener noreferrer"
                                aria-label={`View ${certificate.title} certificate (PDF, opens in a new tab)`}>
                                <img src={`${assetPath}.png`} alt={`DataCamp certificate awarded to Supun Hasanka for ${certificate.title}`} loading="lazy" />
                            </a>
                            <div className="card-content">
                                <span className="section-kicker">DataCamp</span>
                                <h3>{certificate.title}</h3>
                                <p><time dateTime={certificate.dateTime}>{certificate.date}</time> · {certificate.duration}</p>
                                <a className="link-arrow" href={`${assetPath}.pdf`} target="_blank" rel="noopener noreferrer"
                                    aria-label={`View ${certificate.title} certificate (PDF, opens in a new tab)`}>
                                    View certificate (PDF) <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Certificates;
