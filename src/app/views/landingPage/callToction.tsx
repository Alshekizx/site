"use client";
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<string>('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add form validation or API integration here for submission
    if (formData.name && formData.email && formData.message) {
      // Example: You can replace this with a real API call or form submission handler
      setFormStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } else {
      setFormStatus('Please fill out all fields.');
    }
  };

  return (
    <section className="py-16 px-4 gap-6 bg-primary-500 flex flex-col lg:flex-row">
      <div className="flex flex-col justify-between gap-6 w-full">
      <div className='text-start'>
        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
      <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
        We would love to hear from you! Fill in the form below to send us a message.
      </p>
      </div>
        <div className="mt-8 flex gap-4">
          {/* Social Media Icons */}
          <a
            href="https://www.instagram.com/yourusername" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>

      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-primary-300 p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-primary-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-primary-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-primary-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {formStatus && (
            <div
              className={`mt-4 p-3 text-lg font-medium ${formStatus.includes('successfully') ? 'text-success-500' : 'text-warning-500'}`}
            >
              {formStatus}
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;