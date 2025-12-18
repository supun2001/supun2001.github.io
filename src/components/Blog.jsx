import React from 'react';
import { Link } from 'react-router-dom';

import blogPosts from '../data/blogData.json';

const Blog = () => {
    return (
        <section id="blog" className="section" style={{ paddingTop: 'var(--nav-height)' }}>
            <div className="container">
                <h1 className="section-title">Latest <span className="gradient-text">Insights</span></h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Thoughts on software engineering, cybersecurity, and the future of technology.
                </p>
                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <img src={post.thumbnail || post.image} alt={post.title} />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-date">{post.date}</div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <span className="read-more">Read More →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
