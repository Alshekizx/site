"use client";
import { useState } from "react";
import ConfirmationScreen from "./confirmationScreen";

const OTPScreen = () => {
  const [otp, setOtp] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // Toggle confirmation screen

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleVerifyClick = () => {
    if (otp.length === 6) {
      setShowConfirmation(true); // Show the confirmation screen
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="p-6">
      {!showConfirmation ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP Sent to Your Bank-Registered Phone Number
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOTPChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              maxLength={6}
              placeholder="Enter OTP"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleVerifyClick}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Verify
            </button>
          </div>
        </>
      ) : (
        <ConfirmationScreen />
      )}
    </div>
  );
};

export default OTPScreen;