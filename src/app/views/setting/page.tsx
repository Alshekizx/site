"use client";  // Ensure this file is treated as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Adjust import for Next.js 13+ (use navigation from next/navigation)

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    email: "user@example.com",
    password: "",
    notifications: true,
    profilePicture: "/default-profile.png", // Default profile picture
    language: "en", // Default language
    privacy: "public", // Default privacy setting
  });

  const [isClient, setIsClient] = useState(false);  // To detect if the component is rendered on the client

  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set isClient to true when the component has been mounted on the client
  }, []);

  const handleSaveSettings = () => {
    // Here you can handle saving the settings, such as sending them to an API
    alert("Settings saved successfully!");
    // You could redirect back to the profile page after saving
    router.push("/profile"); // Adjust this path as per your app's structure
  };

  // Ensure this component is only rendered on the client
  if (!isClient) return null;

  return (
    <div className="pt-20 pb-20 px-6 lg:px-10 rounded-lg">
      <h2 className="text-3xl font-semibold">Account Settings</h2>
      
      <div className="mt-6">
        {/* Email Address Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* New Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={settings.password}
            onChange={(e) => setSettings({ ...settings, password: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Email Notifications */}
        <div className="mb-4">
          <label htmlFor="notifications" className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={settings.notifications}
              onChange={() =>
                setSettings({ ...settings, notifications: !settings.notifications })
              }
              className="mr-2"
            />
            <span className="text-sm text-gray-700">Email Notifications</span>
          </label>
        </div>

       

        {/* Language Preferences */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
            Language Preferences
          </label>
          <select
            id="language"
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
          </select>
        </div>


        <button
          onClick={handleSaveSettings}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;