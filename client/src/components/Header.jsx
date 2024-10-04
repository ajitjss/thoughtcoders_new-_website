import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // Adjust the import path as necessary

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Access user and logout from AuthContext

    const handleLogout = () => {
        logout(); // Call the logout method from AuthContext
        window.location.href = '/login'; // Redirect to login
    };
    const linkStyle = {
        color: '#FF6100',
        fontWeight: 500
    };

    return (
        <Navbar fixed='top' bg="light" variant="light" expand="lg" className="shadow-sm">
            <Container>
            <Navbar.Brand as={Link} to="/">
                    <img 
                        src="https://thoughtcoders.com/wp-content/uploads/2013/06/cropped-THOUGHT-CODERS.png" 
                        style={{ width: '200px', height: '50px' }} 
                        alt="th-logo" 
                    />
                </Navbar.Brand>
                {/* Toggle for small screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                        {/* Menus */}
                        <Nav.Link style={linkStyle} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link style={linkStyle} as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link style={linkStyle} as={Link} to="/contact-us">Contact Us</Nav.Link>
                        {/* Dropdown for About */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>About</span>} 
                            id="about-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/about-us/">About Us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/our-team/">Our Team</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/career">Career</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/case-studies">Case Studies</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/internship">Internship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/gdpr-commitments">GDPR Commitments</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/corporate-social-responsibility">Corporate Social Responsibility</NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown for Services */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>Services</span>} 
                            id="service-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/quality-assurance-services/">Quality Assurance Services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/api-automation-testing-services/">API Automation Testing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/cloud-services">Remote QA Team</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/consulting">Test Automation</NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* Dropdown for Training */}
                        <NavDropdown 
                            className="custom-dropdown"
                            title={<span style={linkStyle}>Training</span>} 
                            id="training-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/training/web-development">Katalon Studio Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/mobile-app">Manual Testing Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/cloud-training">Selenium with Java Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/consulting">Consulting</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/consulting">API Testing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training/consulting">Core Java Training</NavDropdown.Item>
                        </NavDropdown>

                        {/* Conditionally render links based on user authentication status */}
                        {!user && (
                            <>
                                <Nav.Link style={linkStyle} as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link style={linkStyle} as={Link} to="/login">Login</Nav.Link>
                            </>
                        )}
                        
                        {user && (
                            <>
                                {/* Only show the "Create Blog" option if the user is an admin */}
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
