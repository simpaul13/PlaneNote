import React, { useState } from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const CustomerLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await axios.post('/customer/login', { email, password });
            window.location.href = '/dashboard';
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        }
    }

    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Customer Login</h1>
                    {error && <p className="text-red-600 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border rounded mb-4"
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2 border rounded mb-6"
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default CustomerLogin;
