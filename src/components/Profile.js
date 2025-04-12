import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logoLink } from '../utils/constants'; 

const Profile = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Get the latest email from localStorage on component mount
        const storedEmail = localStorage.getItem('email');

        if (!storedEmail) {
        navigate('/login');
        } else {
        setUserEmail(storedEmail);
        }

        // Listen for storage changes in other tabs/windows
        const handleStorageChange = () => {
        const newEmail = localStorage.getItem('email');
        if (newEmail !== userEmail) {
            setUserEmail(newEmail || '');
        }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup listener
        return () => {
        window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate, userEmail]);

    return (
        <div className="flex justify-center items-center pt-16 min-h-screen bg-purple-100 transition-all duration-500">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
            {/* Header */}
            <h1 className="text-2xl font-bold text-center mb-6 text-purple-600">
            Account Settings
            </h1>

            {/* User Info */}
            <div className="flex items-center justify-center mb-6">
            <div className="relative">
                <img
                src={logoLink}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-purple-600"
                />
                <div className="absolute bottom-0 left-14">
                <Camera className="w-6 h-6 text-purple-600 bg-white p-1 rounded-full" />
                </div>
            </div>
            <div className="ml-4">
                <h2 className="text-xl font-medium text-gray-800">Test Account</h2>
                <p className="text-sm text-gray-600">{userEmail}</p>
            </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 text-center">
            I am a Frontend Developer, passionate about creating intuitive and engaging user interfaces.
            </p>

            {/* Tech Stack List */}
            <ul className="text-gray-600 mt-1 mb-2 text-center">
            <li>- ReactJS</li>
            <li>- Tailwind CSS</li>
            <li>- Lucide (Icon Library)</li>
            <li>- React Router</li>
            </ul>

            <hr className="border-dashed border-gray-300 mb-6" />

            {/* Close Button */}
            <div className="flex justify-center">
            <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-purple-600 text-white rounded-md transition-all duration-300 hover:bg-purple-700"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
};

export default Profile;
