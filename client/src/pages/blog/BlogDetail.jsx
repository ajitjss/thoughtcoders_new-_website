// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import SEO from '../../components/SEO';
import { config } from '../../config';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load the blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (!blog) return <div>No blog data found.</div>;

  return (
    <div className="container mt-4">
    <SEO
        title={`${blog.title} - An Independent Software Testing Company-Thoughtcoders`}
        description={blog.description}
        keywords={`blog, ${blog.tags}`}
      />
      {/* Blog title */}
      <h2>{blog.title}</h2>
      
      {/* Blog Content */}
      <div 
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} 
        className="blog-content"
      />
    </div>
  );
};

export default BlogDetail;
