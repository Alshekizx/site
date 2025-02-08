"use client";
import { useState } from "react";
import OTPScreen from "./otpScreen";

const CardDetailsModal = ({ closeModal }: { closeModal: () => void }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isOTPVisible, setIsOTPVisible] = useState(false);
  const [cardType, setCardType] = useState("");

  // Handle card type detection
  const detectCardType = (number: string) => {
    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;

    if (visaRegex.test(number)) return "Visa";
    if (masterCardRegex.test(number)) return "Mastercard";
    if (amexRegex.test(number)) return "American Express";
    return "Unknown";
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setCardNumber(value);
    setCardType(detectCardType(value));
  };

  const handleNextClick = () => {
    if (cardNumber.length === 16 && expiryDate && cvc.length === 3) {
      setIsOTPVisible(true);
    } else {
      alert("Please enter valid card details.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        {!isOTPVisible ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Enter Card Details</h2>

            {/* Card Number Field */}
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                maxLength={16}
                placeholder="Enter 16-digit card number"
              />
              <p className="mt-1 text-sm text-gray-500">Card Type: {cardType || "N/A"}</p>
            </div>

            {/* Expiry Date Field */}
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                maxLength={5}
                placeholder="MM/YY"
              />
            </div>

            {/* CVC Field */}
            <div className="mb-4">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                maxLength={3}
                placeholder="CVC"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleNextClick}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <OTPScreen />
        )}
      </div>
    </div>
  );
};

export default CardDetailsModal;