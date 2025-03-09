"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 py-8 text-white">
      <div className="container mx-auto text-center">
        <p className="text-lg font-medium">
          Contact Us: <span className="font-bold">info@yourdomain.com</span>
        </p>
        <p className="text-lg font-medium mt-2">
          Phone: <span className="font-bold">+234 123 456 789</span>
        </p>
        <div className="mt-4 text-sm text-gray-200">
          <p>&copy; 2025 17k Technology Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;