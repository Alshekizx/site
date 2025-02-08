"use client";
import { useState } from "react";

const ConfirmationScreen = () => {
  const [isSuccess] = useState(true); // Mocked result

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Card Verification Status</h2>
      <p className="text-lg">
        {isSuccess ? "Card added successfully!" : "Card addition failed. Please try again."}
      </p>

      <div className="mt-6">
        <button
          onClick={() => window.location.reload()} // Mock redirection; customize as needed
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;