import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import blogPosts from '../data/blogData.json';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchContent = (showLoading = true) => {
        if (post && post.contentFile) {
            if (showLoading) setLoading(true);
            fetch(`${post.contentFile}?v=${new Date().getTime()}`)
                .then(res => res.text())
                .then(html => {
                    setContent(html);
                    if (showLoading) setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to load blog content:', err);
                    if (showLoading) setLoading(false);
                });
        } else if (post && post.content) {
            setContent(post.content);
            if (showLoading) setLoading(false);
        }
    };

    useEffect(() => {
        fetchContent(true);
    }, [post]);

    useEffect(() => {
        if (import.meta.hot) {
            const handleUpdate = (data) => {
                if (post && data.file.includes(post.contentFile)) {
                    console.log('Hot updating blog content...');
                    fetchContent(false);
                }
            };
            import.meta.hot.on('blog-update', handleUpdate);
            return () => import.meta.hot.off('blog-update', handleUpdate);
        }
    }, [post]);

    if (!post) {
        return (
            <div className="container" style={{ paddingTop: 'var(--nav-height)', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
        );
    }

    return (
        <article className="blog-post content-fade-in">
            <div className="blog-post-header">
                <img src={post.image} alt={post.title} className="blog-post-hero" />
                <div className="container">
                    <div className="blog-post-meta">
                        <Link to="/blog" className="back-link">← Back to Blog</Link>
                        <span className="blog-category">{post.category}</span>
                        <span className="blog-date">{post.date}</span>
                    </div>
                    <h1 className="blog-post-title">{post.title}</h1>
                </div>
            </div>
            <div className="container">
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <div className="loader">Loading content...</div>
                    </div>
                ) : (
                    <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </div>
        </article>
    );
};


export default BlogPost;
