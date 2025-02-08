"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CardDetailsModal from "./cardDetailsModal";

interface UserProfile {
  avatar: string;
  name: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  creditCardLast4: string;
}

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  const [editedProfile, setEditedProfile] = useState<UserProfile & { newAvatar: string | null }>({
    avatar: "",
    name: "",
    bio: "",
    email: "",
    phone: "",
    address: "",
    creditCardLast4: "",
    newAvatar: null,
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser: UserProfile = JSON.parse(userData);
        setUser(parsedUser);
        setEditedProfile({ ...parsedUser, newAvatar: null });
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfile((prev) => ({ ...prev, newAvatar: reader.result as string | null }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    if (!user) return;
    const updatedProfile: UserProfile = {
      ...editedProfile,
      avatar: editedProfile.newAvatar || user.avatar,
    };
    setUser(updatedProfile);
    localStorage.setItem("user", JSON.stringify(updatedProfile));
    setIsModalOpen(false);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="text-white pt-40 px-6 lg:px-10">
      <div>
        <div className="flex items-center space-x-8">
          <Image
            src={user.avatar || "/images/defaultImage.jpg"}
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-primary object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold">{user.name || "John Doe"}</h1>
            <p className="mt-2 text-lg">{user.bio || "Passionate about making the world a better place."}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-6 py-2 bg-tertiary text-white font-semibold rounded-lg hover:bg-tertiary2 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mt-8 bg-lite p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-secondary">Profile Information</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span>{user.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-lite p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-secondary">Payment Information</h2>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-medium">Credit Card:</span>
            <span>**** **** **** {user.creditCardLast4 || "0000"}</span>
            <button
              onClick={() => setIsCardModalOpen(true)}
              className="ml-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-tertiary transition"
            >
              Edit Card Details
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <div className="flex items-center mt-2">
                <Image
                  src={editedProfile.newAvatar || user.avatar || "/images/defaultImage.jpg"}
                  alt="New Profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedProfile.name}
                onChange={handleProfileChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={editedProfile.bio}
                onChange={handleProfileChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={saveProfile}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isCardModalOpen && <CardDetailsModal closeModal={() => setIsCardModalOpen(false)} />}
    </div>
  );
};

export default ProfileHeader;