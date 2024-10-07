import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'; // Link the CSS for styling
import { Link } from 'react-router-dom';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        try {
            await register(formData.name, formData.email, formData.password, formData.confirmPassword);
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-container d-flex justify-content-center align-items-center">
            <div className="register-box p-5 shadow-lg">
                <h2 className="text-center mb-4" style={{fontFamily:'georgia',fontWeight:'800'}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <label>Name:</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            name="name" 
                            placeholder="Enter Name" 
                            value={formData.name}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Email:</label>
                        <input 
                            className='form-control' 
                            type="email" 
                            name="email" 
                            placeholder="Enter Email" 
                            value={formData.email}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className='form-group mb-3 position-relative'>
                        <label>Password:</label>
                        <input 
                            className='form-control' 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Enter Password" 
                            value={formData.password}
                            onChange={handleChange} 
                            required
                        />
                        <span 
                            className='position-absolute top-50 end-0 me-3 password-toggle-icon'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="form-group mb-3 position-relative">
                        <label>Confirm Password:</label>
                        <input 
                            className='form-control' 
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            value={formData.confirmPassword}
                            onChange={handleChange} 
                            required
                        />
                        <span 
                            className='position-absolute top-50 end-0 me-3 password-toggle-icon'
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className='d-grid'>
                        <button className='btn' style={{background:'#2C2C2C', color:'#fff'}} type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner animation="border" size="sm" /> : 'Register'}
                        </button>
                        <span className='d-flex justify-content-center mt-4'>Already have an account&nbsp;<Link style={{textDecoration:'none'}} to="/login">Sign In</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
