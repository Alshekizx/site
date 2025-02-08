"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const generateUniqueId = () => {
    return uuidv4().slice(0, 8).toUpperCase(); // Generate an 8-character alphanumeric ID
};

const AdminSignup = () => {
    const [adminDetails, setAdminDetails] = useState({
        id: "",
        name: "",
        email: "",
        position: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAdminDetails({ ...adminDetails, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (adminDetails.password !== adminDetails.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        if (!adminDetails.position) {
            setErrorMessage("Please select a job position.");
            return;
        }

        // Generate unique ID and add it to the adminDetails
        const uniqueId = generateUniqueId();
        setAdminDetails((prevDetails) => ({
            ...prevDetails,
            id: uniqueId,
        }));

        // Save the admin details (Simulating submission)
        setSubmitted(true);
        setErrorMessage("");

        // You can send the data to a backend server here, e.g., via an API call.
        console.log("Admin Registered: ", {
            ...adminDetails,
            id: uniqueId,
        });
    };

    return (
        <div className="flex justify-center py-[100px] items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Admin Signup</h1>
                {submitted ? (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-green-600 mb-4">Signup Successful!</h2>
                        <p>Your Admin ID: <span className="font-mono text-blue-500">{adminDetails.id}</span></p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {errorMessage && (
                            <p className="mb-4 text-red-500 font-medium">{errorMessage}</p>
                        )}

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={adminDetails.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={adminDetails.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                                Job Position
                            </label>
                            <select
                                id="position"
                                name="position"
                                value={adminDetails.position}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                required
                            >
                                <option value="">Select a Position</option>
                                <option value="CEO">CEO</option>
                                <option value="Sales Person">Sales Person</option>
                                <option value="Developer">Developer</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={adminDetails.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                                Re-enter Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={adminDetails.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
                        >
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminSignup;