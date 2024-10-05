import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false); 
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

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
            })
        } catch (error) {
            console.error('Registration error:', error);
        }finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container" style={{width:"500px"}}>
            <div className='mt-5 mb-3 d-flex justify-content-center bg-secondary rounded py-3'>
                <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name:</label>
                <input 
                    className='form-control' 
                    type="text" 
                    name="name" 
                    placeholder="Enter Name" 
                    onChange={handleChange} 
                />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input 
                    className='form-control' 
                    type="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    onChange={handleChange} 
                />
            </div>
            <div className='form-group position-relative'>
                <label>Password:</label>
                <input 
                    className='form-control' 
                    type={showPassword ? "text" : "password"}
                    name="password" 
                    placeholder="Enter Password" 
                    onChange={handleChange} 
                />
                <span 
                    className='position-absolute top-50 end-0 me-3'
                    onClick={()=>setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <div className="form-group position-relative">
                <label>Confirm Password:</label>
                <input 
                    className='form-control' 
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword" 
                    placeholder="Enter Confirm Password" 
                    onChange={handleChange} 
                />
                <span 
                    className='position-absolute top-50 end-0 me-3'
                    onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <div className='d-grid mt-3'>
            <button className='btn btn-secondary' type="submit" disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : 'Register'} 
            </button>
            </div>
            
            
        </form>
        </div>
        
    );
};

export default Register;
