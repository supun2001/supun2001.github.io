import React from 'react';
import { useParams, Link } from 'react-router-dom';

import blogPosts from '../data/blogData.json';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

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
                <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </article>
    );
};

export default BlogPost;
