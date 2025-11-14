"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import Cookies from "js-cookie";

import MobileMenu from "./MobileMenu";
import BookSeatModal from "./BookSeatModal";

import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

// Icons
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import BookIcon from "@mui/icons-material/MenuBookOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditProfileModalContent from "./EditProfileModalContent"

export default function MainMenu() {
  const [isClient, setIsClient] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile drawer
  const [openModal, setOpenModal] = useState(false); // book seat
  const [profileModal, setProfileModal] = useState(false); // edit profile modal

  const profileRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // MENU ITEMS USED IN BOTH DESKTOP + MOBILE
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Our Courses", link: "/courses" },
    { title: "About Us", link: "/about-us" },
    { title: "Contact", link: "/contact" },
    { title: "New Batches", link: "/new-batches" },
  ];

  // ENABLE CLIENT MODE
  useEffect(() => {
    setIsClient(true);
  }, []);

  // AFTER CLIENT MOUNT → LOAD USER SAFELY
  const storedUser = isClient
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : {};

  const initials = storedUser?.name
    ? storedUser.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
    : "U";

  // CHECK AUTH
  useEffect(() => {
    if (isClient) {
      const token = Cookies.get("token");
      const u = localStorage.getItem("user");
      setIsLoggedIn(!!token && !!u);
    }
  }, [isClient, pathname]);

  // CLOSE PROFILE WHEN CLICKING OUTSIDE
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
    setProfileOpen(false);
  };

  const closeProfileAndNavigate = (path) => {
    setProfileOpen(false);
    router.push(path);
  };

  const handleLogout = () => {
    ["token", "user", "expiresAt"].forEach((key) => {
      localStorage.removeItem(key);
      Cookies.remove(key);
    });
    setProfileOpen(false);
    router.push("/auth");
  };

  // SSR Protection
  if (!isClient) return null;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center h-full"
            onClick={() => setProfileOpen(false)}
          >
            <Image
              width={120}
              height={45}
              src="/b.png"
              alt="Ajayaa EdTech"
              className="w-auto h-auto hover:scale-105 transition"
            />
          </Link>

          {/* MOBILE RIGHT SIDE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => {
                setOpenModal(true);
                setProfileOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
            >
              Book a Seat
            </button>

            <button
              onClick={toggleDrawer(true)}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              <Menu size={32} />
            </button>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-6 ml-auto bg-white/60 backdrop-blur-xl rounded-xl px-7 py-3 shadow border">

            {menuItems.map((item) => {
              const active = pathname === item.link;
              return (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    onClick={() => setProfileOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition 
                      ${active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {/* PROFILE */}
            {isLoggedIn && (
              <li className="relative" ref={profileRef}>
                <Tooltip title="Your Profile">
                  <div
                    onClick={() => setProfileOpen((p) => !p)}
                    className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-500 
                    px-4 py-2 rounded-full shadow text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-700 font-semibold">
                      {initials}
                    </div>

                    <span className="font-medium text-sm">{storedUser?.name}</span>

                    <KeyboardArrowDownIcon />
                  </div>
                </Tooltip>

                {/* DROPDOWN */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-[200]">

                    <div className="px-4 py-4 border-b">
                      <p className="font-semibold text-gray-900">{storedUser?.name}</p>
                      <p className="text-sm text-gray-500">{storedUser?.email}</p>
                    </div>

                    <div className="py-2">

                      <button
                        onClick={() => closeProfileAndNavigate("/dashboard")}
                        className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 text-sm"
                      >
                        <DashboardIcon fontSize="small" />
                        Dashboard
                      </button>

                      <button
                        onClick={() => {
                          setProfileModal(true);
                          setProfileOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 text-sm"
                      >
                        <EditIcon fontSize="small" />
                        Edit Profile
                      </button>

                      <button
                        onClick={() => closeProfileAndNavigate("/courses")}
                        className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 text-sm"
                      >
                        <BookIcon fontSize="small" />
                        My Courses
                      </button>

                    </div>

                    <div className="border-t">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full hover:bg-gray-100 text-sm text-red-600"
                      >
                        <LogoutIcon fontSize="small" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <button
                  onClick={() => closeProfileAndNavigate("/auth")}
                  className="px-5 py-2 cursor-pointer bg-gray-300 text-gray-800 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition"
                >
                  Login / Sign up
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* MOBILE MENU - FIXED & SSR SAFE */}
        <MobileMenu
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          menuItems={menuItems}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />

        <BookSeatModal open={openModal} handleClose={() => setOpenModal(false)} />
      </header>

      {/* EDIT PROFILE MODAL */}
      {/* EDIT PROFILE MODAL */}
      <Modal open={profileModal} onClose={() => setProfileModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(14px)",
            padding: "24px",
            borderRadius: "18px",
            width: { xs: "90%", sm: 420 },
            boxShadow: 6,
          }}
        >
          <EditProfileModalContent
            onClose={() => setProfileModal(false)}
          />
        </Box>
      </Modal>

    </>
  );
}
