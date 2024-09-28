import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false); 

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
        <div className="container" style={{width:"500px"}}>
                <div className='mb-3 bg-secondary d-flex justify-content-center p-3 rounded mt-5'>
                    <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input className='form-control' type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className='form-control' type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className='d-grid mt-3'>
                    <button className='btn btn-secondary' type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Login'} 
                    </button>
                    </div>
                </form>
        </div>
    );
};

export default Login;
