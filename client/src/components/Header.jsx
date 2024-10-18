import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext); 

    // State to track which dropdown is open
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);

    const handleLogout = () => {
        logout(); 
        window.location.href = '/'; 
    };

    const linkStyle = {
        color: 'rgb(128, 48, 0)',
        fontWeight: 500
    };

    return (
        <Navbar fixed='top' bg="light" variant="light" expand="lg" className="shadow-sm">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/">
                    <img 
                        src="https://thoughtcoders.com/wp-content/uploads/2013/06/cropped-THOUGHT-CODERS.png" 
                        style={{ width: '200px', height: '50px' }} 
                        alt="th-logo" 
                    />
                </Navbar.Brand>
                
                {/* Toggle button for small screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* Home */}
                        <Nav.Link style={linkStyle} as={Link} to="/">Home</Nav.Link>
                        
                        {/* About Dropdown */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>About</span>} 
                            id="about-dropdown"
                            show={aboutDropdownOpen}  // Controlled by state
                            onMouseEnter={() => setAboutDropdownOpen(true)} 
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <NavDropdown.Item as={Link} to="/about-us/">About Us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/our-team/">Our Team</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/career">Career</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/case-studies">Case Studies</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/internship">Internship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/gdpr-commitments">GDPR Commitments</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/corporate-social-responsibility">Corporate Social Responsibility</NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* Services Dropdown */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>Services</span>} 
                            id="service-dropdown"
                            show={servicesDropdownOpen}  // Controlled by state
                            onMouseEnter={() => setServicesDropdownOpen(true)} 
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <NavDropdown.Item as={Link} to="/quality-assurance-services/">Quality Assurance Services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/api-automation-testing-services/">API Automation Testing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/cloud-services">Remote QA Team</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/road-usages-charging">Road Use Charges (RUC)</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/consulting">Test Automation</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/json-to-json-comparator">JSON Comparator</NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* Training Dropdown */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>Training</span>} 
                            id="training-dropdown"
                            show={trainingDropdownOpen}  // Controlled by state
                            onMouseEnter={() => setTrainingDropdownOpen(true)} 
                            onMouseLeave={() => setTrainingDropdownOpen(false)}
                        >
                            <NavDropdown.Item as={Link} to="/training/katalon-studio-training/">Katalon Studio Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/manual-testing-training/">Manual Testing Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/selenium-training/">Selenium with Java Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/core-java-training/">Core Java Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/consulting">Consulting</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/consulting">API Testing</NavDropdown.Item>
                        </NavDropdown>

                        {/* Additional Pages */}
                        <Nav.Link style={linkStyle} as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link style={linkStyle} as={Link} to="/news">News</Nav.Link>
                        <Nav.Link style={linkStyle} as={Link} to="/contact-us">Contact Us</Nav.Link>
                        
                        {/* Conditionally render based on user authentication */}
                        {!user && (
                            <>
                                <Nav.Link style={linkStyle} as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link style={linkStyle} as={Link} to="/login">Login</Nav.Link>
                            </>
                        )}

                        {user && (
                            <>
                                {user.isAdmin && (
                                    <Nav.Link style={linkStyle} as={Link} to="/create-blog">Create Blog</Nav.Link>
                                )}
                                <Nav.Link style={linkStyle} onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
