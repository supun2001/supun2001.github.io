import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import blogPosts from '../data/blogData.json';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const query = searchQuery.toLowerCase();
            return (
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query)
            );
        });
    }, [searchQuery]);

    return (
        <section id="blog" className="section" style={{ paddingTop: 'var(--nav-height)' }}>
            <div className="container">
                <h1 className="section-title">Latest <span className="gradient-text">Insights</span></h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Thoughts on software engineering, cybersecurity, and the future of technology.
                </p>

                <div className="search-container">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search articles by title, category, or content..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className="search-clear"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    )}
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="blog-grid">
                        {filteredPosts.map(post => (
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
                ) : (
                    <div className="no-results">
                        <p>No articles found matching "{searchQuery}"</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
