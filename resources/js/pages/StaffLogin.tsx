import React from 'react';
import MainLayout from '../layouts/MainLayout';

const StaffLogin: React.FC = () => {
    return (
        <MainLayout>
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Staff Login</h2>
                <form method="POST" action="/staff/login">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </MainLayout>
    );
};

export default StaffLogin;
