"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our Courses", href: "/courses" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setIsOpen(open);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-300 shadow-md rounded-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            width={110}
            height={40}
            src="/b.png"
            alt="Ajayaa EdTech"
            className="w-auto h-auto transition-transform duration-200 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-white/30">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="relative ">
                <Link href={item.href} className="block  px-5 py-2 rounded-full text-sm font-semibold transition duration-200">
                  {isActive && (
                    <motion.div
                      layoutId="menuHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-[#0047FF] to-[#00C6FF] rounded-full z-0 shadow-md "
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white tracking-widest " : "text-gray-800 hover:text-[#0047FF] "
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer(true)}
            className="text-gray-800 hover:text-[#0047FF] transition-transform hover:scale-110 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />
    </header>
  );
}
