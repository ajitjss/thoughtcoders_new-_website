// src/pages/BlogList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import useBlog from '../hooks/useBlog'; // Use the custom hook
import useAuth from '../hooks/useAuth'; // Use the custom hook
import DOMPurify from 'dompurify';
import SEO from '../components/SEO';

const BlogList = () => {
    const{user} = useAuth()
    const { blogs, fetchBlogs, deleteBlog } = useBlog();
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        fetchBlogs();
      // eslint-disable-next-line
    }, []);
    

    
    // Helper functions
  const extractFirstImageUrl = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const img = div.querySelector('img');
    return img ? img.src : null;
  };

  // const extractPlainTextAndLimit = (htmlContent, wordLimit) => {
  //   const div = document.createElement('div');
  //   div.innerHTML = DOMPurify.sanitize(htmlContent);
  //   const textContent = div.textContent || div.innerText || '';
  //   return textContent.split(' ').slice(0, wordLimit).join(' ');
  // };

  const limitTitleWords = (title, wordLimit) => {
    return title.split(' ').slice(0, wordLimit).join(' ');
  };

  function extractPlainTextAndLimit(content, charLimit) {
    const plainText = content.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
    if (plainText.length > charLimit) {
      return plainText.substring(0, charLimit) + '...';
    }
    return plainText;
  }
  

  function limitTitleChars(title, charLimit) {
    if (title.length > charLimit) {
      return title.substring(0, charLimit) + '...';
    }
    return title;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

    // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

    const handleDelete = async (slug) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            await deleteBlog(slug);
        }
    };

    return (
        <div className="container mt-5">
          <SEO
          title="Thoughtcoders Blogs : Guide to software testing tools"
          description="Browse all blogs on My Blog App. Stay updated with the latest posts on tech, lifestyle, and more."
          keywords="blogs, tech blogs, lifestyle blogs"
          />
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
          <h2>All Blogs</h2>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {currentBlogs.map((blog) => {
                  const imageUrl = extractFirstImageUrl(blog.content) || 'https://via.placeholder.com/150';
                  const truncatedText = extractPlainTextAndLimit(blog.content, 50);
                  const truncatedTitle = limitTitleChars(blog.title, 30);
                  return (
                    <div key={blog.slug} className="col-md-6 mb-4">
                      <div className="card">
                        <img
                          src={imageUrl}
                          className="card-img-top"
                          alt={blog.title}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`/blogs/${blog.slug}`}>{truncatedTitle}</Link>
                          </h5>
                          <p className="card-text">{truncatedText}...</p>
                          <Link to={`/blogs/${blog.slug}/`} className="btn btn-primary me-2">Read More</Link>
    
                          {/* Show Edit and Delete buttons only for Admins */}
                          {user?.isAdmin && (
                            <>
                              <Link to={`/edit-blog/${blog.slug}/`} className="btn btn-warning me-2">Edit</Link>
                              <button onClick={() => handleDelete(blog.slug)} className="btn btn-danger">Delete</button>
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
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 5)
                .map((blog) => {
                  const imageUrl = extractFirstImageUrl(blog.content) || 'https://via.placeholder.com/150';
                  const truncatedTitle = limitTitleChars(blog.title, 100);
                  const formattedDate = formatDate(blog.createdAt);
                  return (
                    <div key={blog.slug} className="card mb-3">
                      <img src={imageUrl} className="card-img-top" alt={blog.title} style={{ height: '100px', objectFit: 'cover' }} />
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link to={`/blogs/${blog.slug}`}>{truncatedTitle}</Link>
                        </h5>
                        <p className="card-text">
                          <small className="text-muted">Posted on: {formattedDate}</small>
                        </p>
                        <Link to={`/blogs/${blog.slug}`} className="btn btn-primary">Read More</Link>
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
