"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

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
        <Link href="/" className="flex items-center space-x-3">
          <Image
            width={100}
            height={40}
            src="/logo.jpg"
            alt="Ajayaa EdTech"
            className=" hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center text-lg text-gray-800">
          {menuItems.map((item, index) => (
            <li key={item.name} className="flex items-center">
              {item.name === "Contact" ? (
                <Link href={item.href}>
                  <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300">
                    {/* Phone Icon */}
                    <div className="bg-gray-400 rounded-full p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#029DE8]">
                      <FaPhoneAlt className="w-4 h-4 text-gray-800 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-start leading-tight">
                      <p className="text-gray-400 font-semibold text-base transition-colors duration-300 group-hover:text-[#029DE8]">
                        Contact Us
                      </p>
                      <small className="text-gray-400 font-medium text-sm transition-colors duration-300 group-hover:text-[#029DE8]">
                        Call our experts
                      </small>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={`relative px-4 py-1 font-medium transition-all duration-300 ${pathname === item.href
                    ? "text-[#0047FF] font-semibold"
                    : "text-gray-800 hover:text-[#0047FF]"
                    }`}
                >
                  <span className="relative group">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-[#0047FF] transition-all duration-300 w-0 group-hover:w-full"></span>
                  </span>
                </Link>

              )}
              {/* Add separator except after last item */}
              {index < menuItems.length - 1 && (
                <span className="text-gray-300 text-xl select-none mx-2">|</span>
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
