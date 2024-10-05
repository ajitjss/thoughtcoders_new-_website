import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import useBlog from "../hooks/useBlog"; // Use the custom hook
import useAuth from "../hooks/useAuth"; // Use the custom hook
import DOMPurify from "dompurify";
import SEO from "../components/SEO";

const BlogList = () => {
  const { user } = useAuth();
  const { blogs, fetchBlogs, deleteBlog } = useBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state
  const blogsPerPage = 6;

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line
  }, []);

  // Helper functions
  const extractFirstImageUrl = (htmlContent) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    const img = div.querySelector("img");
    return img ? img.src : null;
  };

  const extractPlainTextAndLimit = (htmlContent, wordLimit) => {
    const div = document.createElement("div");
    div.innerHTML = DOMPurify.sanitize(htmlContent);
    const textContent = div.textContent || div.innerText || "";
    return textContent.split(" ").slice(0, wordLimit).join(" ");
  };

  const limitTitleWords = (title, wordLimit) => {
    return title.split(" ").slice(0, wordLimit).join(" ");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter((blog) => {
    const plainTextContent = DOMPurify.sanitize(blog.content);
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plainTextContent.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog); // Use filteredBlogs
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
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
      
      {/* Carousel Section */}
      <Carousel className="mb-4 mt-1">
        {blogs.slice(0, 4).map((blog) => {
          const imageUrl =
            extractFirstImageUrl(blog.content) ||
            "https://via.placeholder.com/800x400.png?text=No+Image+Available";
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

      {/* Search Section */}
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
        <h3 style={{fontFamily:'georgia', fontWeight:'600'}}>Thoughtcoders Blog</h3>
        <p style={{fontFamily:'georgia', fontWeight:'600'}}>Our blog on Selenium automation testing, browser compatibility testing, web development, and updates</p>
      
        <div className="mb-4 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </div>

      {/* All Blogs Section */}
      <h2 style={{fontFamily:"georgia", fontWeight:'600'}}>Blogs</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {currentBlogs
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort blogs by date in descending order
              .map((blog) => {
                const imageUrl = extractFirstImageUrl(blog.content) || 'https://via.placeholder.com/150';
                const truncatedText = extractPlainTextAndLimit(blog.content, 20);
                const truncatedTitle = limitTitleWords(blog.title, 25);
                return (
                  <div key={blog.slug} className="mb-4">
                    <div className="card h-100">
                      <div className="row g-0">
                        {/* Left Side: Image */}
                        <div className="col-md-4">
                          <img
                            src={imageUrl}
                            className="img-fluid rounded-start"
                            alt={blog.title}
                            style={{ height: '100%', objectFit: 'cover', padding: '10px' }}
                          />
                        </div>

                        {/* Right Side: Title, Text, and Buttons */}
                        <div className="col-md-8">
                          <div className="card-body d-flex flex-column">
                            {/* Title */}
                            <h5 className="card-title">
                              <Link style={{textDecoration:'none', color:'#000', fontFamily:'georgia', fontWeight:'600'}} to={`/blogs/${blog.slug}`}>{truncatedTitle}</Link>
                            </h5>

                            {/* Paragraph */}
                            <p className="card-text flex-grow-1">{truncatedText}.</p>

                            {/* Buttons */}
                            <div className="mt-auto">
                              <Link to={`/blogs/${blog.slug}/`} className="btn btn-secondary me-2">Read More</Link>

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
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div className="col-md-4">
          <h4 style={{fontFamily:"georgia", fontWeight:'600'}}>Recent Posted Blogs</h4>
          {blogs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 6)
            .map((blog) => {
              const imageUrl =
                extractFirstImageUrl(blog.content) ||
                "https://via.placeholder.com/150";
              const truncatedTitle = limitTitleWords(blog.title, 10);
              const formattedDate = formatDate(blog.createdAt);

              return (
                <div key={blog.slug} className="card mb-3">
                  <div className="row g-0">
                    {/* Left Side: Image */}
                    <div className="col-md-4">
                      <img
                        src={imageUrl}
                        className="img-fluid rounded-start"
                        alt={blog.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          padding: "10px",
                        }}
                      />
                    </div>
                    {/* Right Side: Title, Date, and Button */}
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column">
                        {/* Title */}
                        <h5 className="card-title">
                          <Link style={{textDecoration:'none', color:'#000', fontFamily:'georgia', fontWeight:'600'}}  to={`/blogs/${blog.slug}`}>
                            {truncatedTitle}
                          </Link>
                        </h5>

                        {/* Date */}
                        <p className="card-text flex-grow-1">
                          <small className="text-muted">
                            Posted on: {formattedDate}
                          </small>
                        </p>

                        {/* Button */}
                        <div className="mt-auto">
                          <Link
                            to={`/blogs/${blog.slug}`}
                            className="btn btn-secondary"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-start mt-4">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrevPage}>
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogList;
