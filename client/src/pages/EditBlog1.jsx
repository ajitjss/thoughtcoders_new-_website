// src/pages/EditBlog.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { fetchBlogBySlug } from '../services/blogService'; // Import service function
import useBlog from '../hooks/useBlog'; // Import custom hook

const EditBlog = () => {
    const { slug } = useParams();
    const { updateBlog } = useBlog(); // Use the custom hook
    const editor = useRef(null);
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await fetchBlogBySlug(slug);
            setFormData({ title: data.title, content: data.content });
        };

        fetchBlog();
    }, [slug]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (newContent) => {
        setFormData({ ...formData, content: newContent });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await updateBlog(slug, formData);
            alert('Blog updated successfully!');
            navigate(`/blogs`);
        } catch {
            alert('Failed to update blog.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Edit Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <JoditEditor
                        ref={editor}
                        value={formData.content}
                        onChange={handleContentChange}
                    />
                </div>
                <button className="btn btn-primary mt-3" type="submit" disabled={isLoading}>
                    {isLoading ? 'Updating...' : 'Update Blog'}
                </button>
            </form>
        </div>
    );
};

export default EditBlog;
