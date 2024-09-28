import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../config';

const BlogDetail = () => {
    const { slug } = useParams(); // Extract slug from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const url = `${config.BASE_URL}/api/blogs/${slug}`;
                const response = await axios.get(url);
                setBlog(response.data);
            } catch (err) {
                setError('Error fetching the blog post. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!blog) return <div>No blog found.</div>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
};

export default BlogDetail;
