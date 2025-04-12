import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState('test@example.com');  // Pre-filled sample email
    const [password, setPassword] = useState('test@4545');   // Pre-filled sample password
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setEmail('test@example.com');
        setPassword('test@4545');
        setError('');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill all credentials');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6 || !/\d|\W/.test(password)) {
            setError('Password not strong. Use 6+ chars with number/symbol');
            return;
        }

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/profile');
    };

    return (
        <div className="flex justify-center items-start pt-20 min-h-screen bg-purple-100 transition-all duration-500">
            <div className="bg-white rounded-2xl shadow-xl p-10 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                    Sign in to your<br />EduX account
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Enter your login credentials below
                </p>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="relative mb-5">
                        <input
                            type="email"
                            placeholder=" Enter email address "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Email Address
                        </label>
                    </div>

                    <div className="relative mb-5">
                        <input
                            type="password"
                            placeholder=" Enter password "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Password
                        </label>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 -mt-3">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-3 bg-purple-600 text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-purple-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
