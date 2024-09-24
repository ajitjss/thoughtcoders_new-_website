// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/'); 
    }
  };

  return (
    <div className="container" style={{width:"800px"}}>
    <SEO
      title="Login - An Independent Software Testing Company-Thoughtcoders"
      description="Login to access your account on My Blog App."
      keywords="login, user login, access account"
    />
    <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '40vh' }}>
        <div className="col-md-8">
          <div className='text-center text-white rounded bg-secondary p-3 mt-3 mb-4'>
            <h3>Login</h3>
          </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid mt-3">
          <button type="submit" className="btn btn-secondary">Login</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
