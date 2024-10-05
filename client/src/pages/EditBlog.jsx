import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { fetchBlogBySlug } from '../services/blogService'; 
import useBlog from '../hooks/useBlog'; 
import { Toaster, toast } from 'react-hot-toast'; 

const EditBlog = () => {
    const { slug } = useParams(); 
    const { updateBlog } = useBlog(); 
    const editor = useRef(null); 
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        keywords: '',
        slug: '',
        content: ''
    }); 

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await fetchBlogBySlug(slug);
            setFormData({
                title: data.title,
                description: data.description,
                keywords: data.keywords,
                slug: data.slug,
                content: data.content
            });
        };

        fetchBlog();
    }, [slug]);

    // Handle changes in form inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle content change for the rich text editor
    const handleContentChange = (newContent) => {
        setFormData({ ...formData, content: newContent });
    };

    // Handle form submission for updating the blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await updateBlog(slug, formData); 
            toast.success('Blog updated successfully!')
            navigate(`/blogs`);
        } catch {
            toast.error('Failed to update blog.')
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
                
                {/* New fields for description, keywords, and slug */}
                
                <div className="form-group">
                    <label>Description</label>
                    <textarea
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
                    {isLoading ? 'Updating...' : 'Update Blog'}
                </button>
                <Toaster position='top-center' reverseOrder={false} />
            </form>
        </div>
    );
};

export default EditBlog;
