import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
