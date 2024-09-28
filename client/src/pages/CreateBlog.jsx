// src/pages/CreateBlog.js
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import useBlog from '../hooks/useBlog'; // Import the custom hook

const CreateBlog = () => {
    const { createBlog, isLoading } = useBlog(); // Use the custom hook
    const editor = useRef(null);
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (newContent) => {
        setFormData({ ...formData, content: newContent });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBlog(formData);
            setFormData({ title: '', content: '' });
            alert('Blog created successfully!');
        } catch {
            alert('Failed to create blog.');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Create Blog</h1>
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
                    {isLoading ? 'Creating...' : 'Create Blog'}
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
