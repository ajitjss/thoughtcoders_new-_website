// src/pages/EditBlog.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import SEO from '../components/SEO';

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the route parameters
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  
  // Retrieve token from localStorage
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    // Fetch the blog details to edit
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/blogs/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the request headers
          }
        });
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching blog for editing:', error);
      }
    };

    fetchBlog();
  }, [id, token]);

  // Save blog details to local storage when title or content changes
  useEffect(() => {
    localStorage.setItem('editTitle', title);
    localStorage.setItem('editContent', content);
  }, [title, content]);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...',
    toolbar: {
      buttons: [
        'bold', 'italic', 'underline', '|', 'image', 'source'
      ]
    }
  }), []);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/blogs/${id}`, 
        { title, content }, 
        {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the request headers
          }
        }
      ); // Update the blog
      localStorage.removeItem('editTitle'); // Clear local storage after successful update
      localStorage.removeItem('editContent');
      navigate('/', { state: { message: 'Blog updated successfully!' } }); // Redirect to home page with a success message
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="container mt-4">
    <SEO
        title={`Edit Blog ${id} - An Independent Software Testing Company-Thoughtcoders`}
        description={`Edit your blog post with ID ${id} on My Blog App.`}
        keywords="edit blog, update blog post"
      />
      <div className='text-center text-white rounded bg-secondary p-3 mt-3'>
            <h2>Edit Post</h2>
          </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
          />
        </div>
        <div className='d-grid pt-2 mb-3'>
          <button type="submit" className="btn btn-secondary">Update Blog</button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
