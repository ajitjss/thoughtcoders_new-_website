// src/pages/CreateBlog.js
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import useBlog from '../../../hooks/useBlog'; 
import { Toaster, toast } from 'react-hot-toast'; 

const CreateBlog = () => {
    const { createBlog, isLoading } = useBlog(); 
    const editor = useRef(null);
    const [formData, setFormData] = useState({ 
        title: '', description:'', keywords:'', slug:'', content: ''  
    });

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
            setFormData({title: '', description:'', keywords:'', slug:'', content: ''});
            toast.success('Blog created successfully!');
        } catch {
            toast.error('Failed to create blog.');
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
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Keywords</label>
                    <input
                        type="text"
                        className="form-control"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Slug</label>
                    <input
                        type="text"
                        className="form-control"
                        name="slug"
                        value={formData.slug}
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
                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </div>
    );
};

export default CreateBlog;
