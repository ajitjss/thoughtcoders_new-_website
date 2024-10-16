// src/pages/BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { fetchBlogBySlug } from '../../../services/blogService'; // Import service function
import SEO from '../../../components/SEO';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await fetchBlogBySlug(slug);
                setBlog(data);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError('Error fetching blog details.');
            }
        };

        fetchBlog();
    }, [slug]);

    if (error) {
        return <div className="container mt-5"><p>{error}</p></div>;
    }

    if (!blog) {
        return <div className="container mt-5"><p>Loading...</p></div>;
    }

    // Helper function to limit words
    const limitWords = (text, wordLimit) => {
        if (!text) return ''; // Fallback in case description is null/undefined
        const words = text.split(' '); // Split the text into an array of words
        if (words.length <= wordLimit) return text; // If it's already within the limit
        return words.slice(0, 50).join(' ') + '...'; // Join the first 50 words and add '...'
    };
    return (
        <div className="container mt-5">
        <SEO
          title={blog.title}
          description={limitWords(blog.description, 50)}
          keywords={blog.keywords}
          author={blog.author.name}
        />
            
            <h1 style={{fontFamily:'georgia', fontWeight:'600'}}>{blog.title}</h1>
            <div className="blog-content mt-4">
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blog.content)
                    }}
                />
            </div>
            <p><strong>Author:</strong> {blog.author.name}</p>
            <p><strong>Published:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default BlogDetail;
