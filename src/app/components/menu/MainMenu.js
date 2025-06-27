"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { FaPhoneAlt } from "react-icons/fa";
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
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift"))
      return;
    setIsOpen(open);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm font-bold">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            width={100}
            height={40}
            src="/b.png"
            alt="Ajayaa EdTech"
            className="hover:scale-105  w-auto"
          />
        </Link>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center text-lg text-gray-800 relative bg-white rounded-full overflow-hidden gap-4 ">
          {menuItems.map((item) => (
            <li key={item.name} className="relative w-[140px] text-center">
              <Link href={item.href} className="relative z-10 block">
                <div
                  className={`w-full py-2 transition-colors duration-300 font-medium rounded-full ${pathname === item.href
                      ? "text-white"
                      : "text-gray-800 hover:text-[#0047FF]"
                    }`}
                >
                  {item.name}
                </div>
              </Link>
              {pathname === item.href && (
                <motion.div
                  layoutId="menuHighlight"
                  className="absolute inset-0 bg-[#0047FF] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 700, damping: 60, mass: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>



        {/* Mobile Menu Icon */}
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
