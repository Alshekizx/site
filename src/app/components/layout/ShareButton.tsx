"use client";

import { useEffect } from "react";

const ShareButton = () => {
  useEffect(() => {
    const shareButton = document.getElementById("share-button");

    if (shareButton) {
      shareButton.addEventListener("click", () => {
        console.log("Share button clicked");
      });

      // Cleanup function to remove event listener when the component unmounts
      return () => {
        shareButton.removeEventListener("click", () => {
          console.log("Share button clicked");
        });
      };
    }
  }, []);

  return (
    <button id="share-button" className="bg-primary text-white px-4 py-2 rounded">
      Share
    </button>
  );
};

export default ShareButton;