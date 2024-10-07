import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        try {
            await login(formData.email, formData.password);
            setFormData({ email: '', password: '' })
        } catch (error) {
            console.error('Login error:', error); 
        }finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login-box p-5 shadow-lg">
                <h2 className="text-center mb-4" style={{fontFamily:'georgia', fontWeight:'800'}}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <label className='p-2'>Email:</label>
                        <input 
                            className='form-control' 
                            type="email" name="email" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group mb-3 position-relative">
                        <label className='p-2'>Password:</label>
                        <input 
                            className='form-control' 
                            type={showPassword ? "text" : "password"}
                            name="password" 
                            placeholder="Password" 
                            value={formData.password}
                            onChange={handleChange} 
                            required
                        />
                        <span 
                            className='position-absolute top-50 end-0 me-3 password-toggle-icon'
                            onClick={()=>setShowPassword(!showPassword)}
                        >
                            { showPassword ? <FaEyeSlash /> : <FaEye /> }
                        </span>
                    </div>
                    <div className='d-grid mt-4'>
                        <button className='btn' style={{background:'#2C2C2C', color:'#fff'}} type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner animation="border" size="sm" /> : 'Login'}
                        </button>
                        <span className='d-flex justify-content-center mt-4'>Don't have an account&nbsp;<Link style={{textDecoration:'none'}} to="/register">Sign Up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
