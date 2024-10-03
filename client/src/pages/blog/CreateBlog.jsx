//src/pages/CreateBlog.jsx
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { config as appConfig } from '../../config'; 


const CreateBlog = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate()

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Start typing...',
    toolbar: {
      buttons: [
        'bold', 'italic', 'underline', '|', 'image', 'source'
      ]
    }
  }), [placeholder]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken'); 
    try {
      const response = await axios.post(`${appConfig.BASE_URL}/api/blogs`, {
          title,
          content
      }, {
          headers: {
              'Authorization': `Bearer ${token}` // Include the token in the header
          }
      });
      alert('Blog posted successfully!');
      navigate('/')
      console.log(response.data);
  } catch (error) {
      console.error('Error posting blog:', error);
  }
  };

  return (
    <div className='container'>
    <SEO
        title="Create a New Blog - An Independent Software Testing Company-Thoughtcoders"
        description="Start creating a new blog post on My Blog App. Share your thoughts and stories."
        keywords="create blog, new blog post, write blog"
      />
      <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-md-8">
          <div className='text-center text-white rounded bg-secondary p-3 mt-3'>
            <h3>Create Post</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Title</label>
              <input
                type="text"
                className='form-control'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Description:</label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={() => {}}
              />
            </div>
            <div className='d-grid pt-2'>
              <button type="submit" className="btn btn-secondary mb-2">Post Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
