import React, { useState } from 'react';
import '../styles/main.css';
import loginImage from '../assets/recruit.jpg';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="flex items-center justify-between h-screen">
            <div className="w-1/3 p-6 pl-10 border rounded-lg border-gray-500">
                <h1 className="text-4xl font-bold mb-6">Welcome to the Signup Page!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Please enter your information to create an account.
                </p>
                <form onSubmit={handleSubmit} className="max-w-sm">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Name:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Password:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Confirm Password:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Signup
                    </button>
                    <div className="mt-4 text-sm">
                        <a className="text-blue-500 hover:underline" href="#login">
                            Back to Login
                        </a>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                <img src={loginImage} alt="Signup" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default SignupPage;