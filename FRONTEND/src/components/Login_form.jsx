import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include', // to send cookies
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed');
      } else {
        window.location.href = '/dashboard';
      }
    } catch {
      setError('Server error');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-xs">
        <h2 className="text-xl font-semibold mb-4 text-center">Login Form</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white rounded ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="# className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
