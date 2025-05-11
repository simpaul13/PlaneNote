import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white py-4 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-lg font-bold">PlaneNote</h1>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 PlaneNote. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
