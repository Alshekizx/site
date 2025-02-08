"use client";

import { useState } from "react";

const AdminLogin = () => {
    const [loginDetails, setLoginDetails] = useState({
        id: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { id, email, password } = loginDetails;

        // Simple validation for demonstration purposes
        if (!id || !email || !password) {
            setErrorMessage("All fields are required!");
            return;
        }

        if (id.length !== 8) {
            setErrorMessage("Admin ID must be exactly 8 characters long.");
            return;
        }

        // Simulate login logic (You can replace this with API request logic)
        // Example hardcoded admin details for testing
        const validAdmin = {
            id: "A1B2C3D4",
            email: "admin@example.com",
            password: "password123",
        };

        if (id === validAdmin.id && email === validAdmin.email && password === validAdmin.password) {
            setLoginSuccess(true);
            setErrorMessage("");
            console.log("Login successful! Admin details:", loginDetails);
        } else {
            setErrorMessage("Invalid Admin ID, email, or password.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
                {loginSuccess ? (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-green-600 mb-4">Login Successful!</h2>
                        <p>Welcome back, Admin!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {errorMessage && (
                            <p className="mb-4 text-red-500 font-medium">{errorMessage}</p>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="id"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Admin ID
                            </label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                value={loginDetails.id}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your Admin ID"
                                maxLength={8}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={loginDetails.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginDetails.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;