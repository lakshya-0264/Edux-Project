import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('Tester');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [email, setEmail] = useState('testing@example.com');
    const [password, setPassword] = useState('password123');
    const [companyName, setCompanyName] = useState('EduX Sample Account');
    const [isAgency, setIsAgency] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setFullName('Tester');
        setPhoneNumber('123-456-7890');
        setEmail('testing@example.com');
        setPassword('password123');
        setCompanyName('EduX Sample Account');
        setIsAgency(false);
        setError('');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedEmail = localStorage.getItem('email');
        if (storedEmail === email) {
            setError('Email already exists');
            return;
        }

        if (!fullName || !phoneNumber || !email || !password || isAgency === null) {
            setError('Please fill all required fields');
            return;
        }

        localStorage.setItem('fullName', fullName);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('isAgency', isAgency);

        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        setCompanyName('');
        setIsAgency(null);

        navigate('/profile');
    };

    return (
        <div className="flex justify-center items-start pt-16 min-h-screen bg-purple-100 transition-all duration-500">
            <div className="bg-white rounded-2xl shadow-xl p-10 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                    Create your EduX account
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Fill the details below to get started
                </p>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="relative mb-5">
                        <input
                            type="text"
                            placeholder=" Enter your full name "
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Full Name *
                        </label>
                    </div>

                    <div className="relative mb-5">
                        <input
                            type="text"
                            placeholder=" Enter phone number "
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Phone Number *
                        </label>
                    </div>

                    <div className="relative mb-5">
                        <input
                            type="email"
                            placeholder=" Enter your email "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Email Address *
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
                            Password *
                        </label>
                    </div>

                    <div className="relative mb-5">
                        <input
                            type="text"
                            placeholder=" Optional company name "
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-purple-600"
                        />
                        <label className="absolute left-4 -top-2 text-sm text-purple-600 bg-white px-1">
                            Company Name
                        </label>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Are you an Agency? *
                        </label>
                        <div className="flex items-center space-x-6">
                            <label className="inline-flex items-center text-sm text-gray-700">
                                <input
                                    type="radio"
                                    name="agency"
                                    value={true}
                                    checked={isAgency === true}
                                    onChange={(e) => setIsAgency(true)}
                                    required
                                    className="form-radio text-purple-600 mr-2"
                                />
                                Yes
                            </label>
                            <label className="inline-flex items-center text-sm text-gray-700">
                                <input
                                    type="radio"
                                    name="agency"
                                    value={false}
                                    checked={isAgency === false}
                                    onChange={(e) => setIsAgency(false)}
                                    required
                                    className="form-radio text-purple-600 mr-2"
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 -mt-3">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-3 bg-purple-600 text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-purple-700"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpScreen;
