import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Link, useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import { config } from '../config';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const blogsPerPage = 6; 
  const location = useLocation();
  const alertMessage = location.state?.message;
  const { isAuthenticated } = useAuth(); 
  const token = localStorage.getItem('authToken'); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to delete a blog
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      try {
        await axios.delete(`${config.BASE_URL}/api/blogs/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setBlogs(blogs.filter(blog => blog._id !== id)); 
        alert('Blog deleted successfully!');
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  // Helper functions
  const extractFirstImageUrl = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const img = div.querySelector('img');
    return img ? img.src : null;
  };

  const extractPlainTextAndLimit = (htmlContent, wordLimit) => {
    const div = document.createElement('div');
    div.innerHTML = DOMPurify.sanitize(htmlContent);
    const textContent = div.textContent || div.innerText || '';
    return textContent.split(' ').slice(0, wordLimit).join(' ');
  };

  const limitTitleWords = (title, wordLimit) => {
    return title.split(' ').slice(0, wordLimit).join(' ');
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
    
      {alertMessage && (
        <div className="alert alert-success" role="alert">
          {alertMessage}
        </div>
      )}
      
      <Carousel className="mb-4 mt-1">
        {blogs.slice(0, 4).map((blog) => {
          const imageUrl = extractFirstImageUrl(blog.content) || "https://via.placeholder.com/800x400.png?text=No+Image+Available";
          return (
            <Carousel.Item key={blog._id}>
              <img
                className="d-block w-100"
                src={imageUrl}
                alt={blog.title}
                height="600px"
              />
              <Carousel.Caption>
                <h3>{limitTitleWords(blog.title, 10)}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <SEO
        title="An Independent Software Testing Company-Thoughtcoders"
        description="Browse all blogs on My Blog App. Stay updated with the latest posts on tech, lifestyle, and more."
        keywords="blogs, tech blogs, lifestyle blogs"
      />
      <h2>All Blogs</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {currentBlogs.map((blog) => {
              const imageUrl = extractFirstImageUrl(blog.content) || "https://via.placeholder.com/150";
              const truncatedText = extractPlainTextAndLimit(blog.content, 10);
              const truncatedTitle = limitTitleWords(blog.title, 8);
              return (
                <div key={blog._id} className="col-md-6 mb-4">
                  <div className="card">
                    <img
                      src={imageUrl}
                      className="card-img-top"
                      alt={blog.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/blogs/${blog._id}`}>{truncatedTitle}</Link>
                      </h5>
                      <p className="card-text">
                        {truncatedText}...
                      </p>
                      <Link to={`/blogs/${blog._id}`} className="btn btn-primary me-2">Read More</Link>
                      {isAuthenticated && (
                        <>
                          <Link to={`/edit-blog/${blog._id}`} className="btn btn-secondary ms-2">Edit</Link>
                          <button 
                            onClick={() => handleDelete(blog._id)} 
                            className="btn btn-danger ms-2"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4">
          <h4>Recent Posted Blogs</h4>
          {blogs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by most recent
            .slice(0, 5) // Limit to 5 most recent blogs
            .map((blog) => {
              const imageUrl = extractFirstImageUrl(blog.content) || "https://via.placeholder.com/150";
              const truncatedTitle = limitTitleWords(blog.title, 10);
              const formattedDate = formatDate(blog.createdAt); // Format date
              return (
                <div key={blog._id} className="card mb-3">
                  <img
                    src={imageUrl}
                    className="card-img-top"
                    alt={blog.title}
                    style={{ height: '100px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{truncatedTitle}</h5>
                    <p className="card-text"><small className="text-muted">Posted on: {formattedDate}</small></p>
                    <Link to={`/blogs/${blog._id}`} className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-start mt-4">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevPage}>Previous</button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogList;
