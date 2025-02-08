"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "app/authContext"; // Assuming you have the Auth context set up.

const ShareButton = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => {
  return (
    <button
      id="share-button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 text-white rounded-lg font-semibold ${
        disabled ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
      } focus:outline-none focus:ring-2 focus:ring-primary`}
    >
      {disabled ? "Signing Up..." : "Sign Up"}
    </button>
  );
};

const SignupPage = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setIsAuthenticated } = useAuth(); // Get the context to update auth state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (loading) return;

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Signup failed. Please try again.");
        return;
      }

      // Handle successful signup
      setIsAuthenticated(true); // Update the auth context
      localStorage.setItem("isAuthenticated", "true"); // Persist state
      alert("Signup successful!");
      router.push("/views/home"); // Redirect to the dashboard
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-background-light px-6">
      <div className="max-w-md my-[120px] w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-heading font-bold text-primary text-center mb-6">Sign Up</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <ShareButton onClick={handleSubmit} disabled={loading} />
        </form>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/authentication/login" className="text-primary hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;