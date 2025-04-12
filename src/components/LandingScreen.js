import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 m-auto h-screen scroll-smooth rounded-2xl shadow-lg">
            <div className="h-6/12" />
            <div className="text-center px-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">Welcome to EduX!</h1>
                <p className="text-gray-600 text-base mb-8">A Scalable and Deployed Website that enhances User Experience, Wanna Try it?</p>
                <button
                onClick={() => navigate("/signup")}
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-3 rounded-lg mb-4"
                >
                Create Account
                </button>
                <button
                onClick={() => navigate("/login")}
                className="w-full bg-purple-200 hover:bg-purple-300 transition-all text-purple-900 font-semibold py-3 rounded-lg"
                >
                Already Registered? Login
                </button>
            </div>
            <footer className="pt-12 text-sm text-gray-400">
                © 2025 EduX. All rights reserved.
            </footer>
        </div>
    )
}

export default LandingScreen;