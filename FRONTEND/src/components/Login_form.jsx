import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

const Login_form = ({ state }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await loginUser(email, password);
      dispatch(login(data.user));
      navigate({ to: '/dashboard' });
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Login failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black min-h-screen min-w-screen p-0 m-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 shadow-xl rounded-3xl p-10 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]">
          Login
        </h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-center"
          >
            {error}
          </motion.div>
        )}

        <div className="mb-2">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
          <input
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
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
          {loading ? 'Signing in...' : 'Sign In'}
        </motion.button>

        <p className="mt-2 text-center text-gray-400 text-sm">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => state(false)}
            className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login_form;
