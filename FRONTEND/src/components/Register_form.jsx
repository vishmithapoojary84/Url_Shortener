import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import { motion } from 'framer-motion';

const Register_form = ({ state }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const data = await registerUser(name, password, email);
      dispatch(login(data.user));
      navigate({ to: '/dashboard' });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-black mt-10 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 shadow-xl rounded-3xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]">
          Create an Account
        </h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-3 bg-red-100 text-red-700 rounded-xl text-center"
          >
            {error}
          </motion.div>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
          <input
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
          <input
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-3 rounded-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 text-white transition-all ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Creating...' : 'Create Account'}
        </motion.button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <span
            onClick={() => state(true)}
            className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium"
          >
            Sign In
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register_form;
