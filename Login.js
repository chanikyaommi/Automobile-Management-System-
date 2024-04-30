import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import'./Login.css'

// import bmwSideImage from '..src/images/bmw_side.jpg';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        email,
        password,
      });
      console.log(response)
      navigate('/Dashboard');
    } catch (error) {
      // If login fails, display an error messaage
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="login-page">

   
      <div className="login-container">
        <h2>Login</h2>

       
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary login">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;