import React, { useState } from 'react';

function Login_form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include', // to send cookies if needed
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed');
      } else {
        // Handle success (e.g. redirect, set global state, etc.)
        window.location.href = '/dashboard'; // or any route
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f4f4f4'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: 32,
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          width: 320
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Login</h2>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="username" style={{ fontWeight: 'bold', display: 'block' }}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: '1px solid #ccc',
              marginTop: 5
            }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', display: 'block' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: '1px solid #ccc',
              marginTop: 5
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}



export default Login_form
