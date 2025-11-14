"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Api"; // ← your API config

export default function EditProfileModalContent({ onClose }) {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");

    // Read login user from localStorage
    const localUser =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "{}")
            : {};

    // Fetch user details on mount
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await axios.post(API.PROFILEEDIT.getDataOfUser, {
                    email: localUser.email,
                });

                const user = res.data.user;

                setUserData(user);
                setName(user.name || "");

            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);

    // Save changes
    const handleSave = async () => {
        setSaving(true);

        try {
            const response = await axios.patch(API.PROFILEEDIT.namechange, {
                email: localUser.email,
                newName: name,
            });

            // Update localStorage name
            const updatedUser = { ...localUser, name };
            localStorage.setItem("user", JSON.stringify(updatedUser));

            setSuccess(true);
            setSaving(false);
            // localStorage.setItem("user", JSON.stringify(updatedUser));
            window.dispatchEvent(new Event("user-updated"));

            setTimeout(() => {
                onClose();
            }, 1000);

        } catch (err) {
            setSaving(false);
            console.error("Update error:", err);
        }
    };

    // Loading shimmer
    if (loading) {
        return (
            <div className="animate-pulse space-y-4 py-4">
                <div className="w-24 h-24 bg-gray-300/60 rounded-full mx-auto"></div>
                <div className="h-5 bg-gray-300/50 rounded w-3/4 mx-auto"></div>
                <div className="h-5 bg-gray-300/40 rounded w-1/2 mx-auto"></div>
            </div>
        );
    }

    return (
        <div className="w-full">

            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>

            {/* Profile Image */}
            <div className="flex justify-center mb-4">
                <img
                    src={userData.profilePic}
                    alt="Profile"
                    className="w-20 h-20 rounded-full shadow-md border border-gray-300 object-cover"
                />
            </div>

            {/* Name (Editable) */}
            <div className="mb-4">
                <label className="text-gray-700 text-sm font-medium">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800"
                />
            </div>

            {/* Email (Read Only) */}
            <div className="mb-4">
                <label className="text-gray-700 text-sm font-medium">Email</label>
                <input
                    value={userData.email}
                    disabled
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 shadow-sm"
                />
            </div>

            {/* Phone (Read Only) */}
            <div className="mb-4">
                <label className="text-gray-700 text-sm font-medium">Phone</label>
                <input
                    value={userData.phone || "Not provided"}
                    disabled
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 shadow-sm"
                />
            </div>

            {/* Created At */}
            <div className="mb-4">
                <label className="text-gray-700 text-sm font-medium">Joined On</label>
                <input
                    value={new Date(userData.createdAt).toLocaleDateString()}
                    disabled
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 shadow-sm"
                />
            </div>

            {/* Buttons */}
            <div className="mt-5 space-y-3">

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`w-full py-2 rounded-lg font-semibold shadow text-white
            ${saving ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
          `}
                >
                    {saving ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Saving…
                        </div>
                    ) : success ? (
                        <span>✔ Saved Successfully</span>
                    ) : (
                        "Save Changes"
                    )}
                </button>

                {/* Cancel Button */}
                {!success && (
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                )}
            </div>

        </div>
    );
}
