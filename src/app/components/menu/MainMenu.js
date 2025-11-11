"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import MobileMenu from "./MobileMenu";
import BookSeatModal from "./BookSeatModal";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our Courses", href: "/courses" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
  { name: "New Batches", href: "/new-batches" },
];

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // ✅ Check token existence
    const token = Cookies.get("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setIsOpen(open);
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // ✅ Logout logic
      Cookies.remove("token");
      Cookies.remove("expiresAt");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      router.push("/auth");
    } else {
      // ✅ Redirect to auth page for login
      router.push("/auth");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center h-full">
            <Image
              width={120}
              height={45}
              src="/b.png"
              alt="Ajayaa EdTech"
              className="w-auto h-auto transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>

        {/* Center: Book a Seat (mobile only) */}
        <div className="flex-1 flex justify-center md:hidden">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:shadow-lg transition duration-300"
          >
            Book a Seat
          </button>
        </div>

        {/* Right: Hamburger (mobile only) */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            onClick={toggleDrawer(true)}
            className="text-gray-800 hover:text-blue-600 transition-transform hover:scale-110 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 ml-auto bg-white/30 backdrop-blur-lg rounded-full px-5 py-2 shadow-lg border border-white/40">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const isNewBatch = item.name === "New Batches";

            return (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="block px-5 py-2 rounded-full text-sm font-semibold relative transition duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 rounded-full z-0 shadow-md"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-2 relative z-10">
                    <span
                      className={`transition-colors duration-300 ${isActive
                          ? "text-white tracking-widest"
                          : "text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500"
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* 🔴 Ping dot for “New Batches” */}
                    {isNewBatch && (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-2.5 h-2.5 bg-red-500 rounded-full animate-ping opacity-75"></span>
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}

          {/* ✅ Login/Logout Button */}
          <li>
            <button
              onClick={handleAuthAction}
              className={`ml-3 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:cursor-pointer
      ${isLoggedIn
                  ? "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-400 hover:text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                }`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>

        </ul>
      </nav>

      {/* Mobile Drawer & Modal */}
      <MobileMenu
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        menuItems={menuItems}
      />
      <BookSeatModal open={openModal} handleClose={() => setOpenModal(false)} />
    </header>
  );
}
