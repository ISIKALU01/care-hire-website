// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Car, Menu, X, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "OUR FLEET", path: "/fleet" },
    { name: "SERVICES", path: "/ourservices" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW */}
        <div className="flex justify-between items-center h-20 font-raleway">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/racmarlogo.png"
              alt="DriveRent Logo"
              width={140}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="relative text-sm lg:text-base font-medium text-gray-300 transition"
              >
                <span
                  className={`${
                    isActive(link.path)
                      ? "text-yellow-600"
                      : "hover:text-yellow-600"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-600 transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/reserve"
              className="bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2
              hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-yellow-600 hover:text-yellow-600 transition"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* BOTTOM ROW DESKTOP */}
        <div className="hidden md:flex justify-between items-center py-2 border-t border-white/30">
          {/* Socials */}
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition transform hover:scale-125"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center text-yellow-600 gap-1 hover:text-white transition">
              <Phone size={14} /> +234 803 412 3844
            </span>
            <span className="flex items-center gap-1 text-yellow-600  hover:text-white transition">
              <MdEmail size={16} /> info@racmarsolutions.com
            </span>
            <span className="flex items-center gap-1 text-yellow-600  hover:text-white transition">
              <FaWhatsapp size={14} /> +234 803 412 3844
            </span>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10 space-y-5 bg-black/60 backdrop-blur-lg">
            {/* Links */}
            <div className="flex flex-col space-y-4 px-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0"
                  } ${
                    isActive(link.path)
                      ? "text-yellow-600"
                      : "text-white hover:text-yellow-600"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/reserve"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-2 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium
              hover:bg-yellow-700 transition transform hover:scale-105"
            >
              Book Now
            </Link>

            {/* Socials */}
            <div className="flex justify-center gap-6 pt-3 border-t border-white/10">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-gray-400 hover:text-yellow-600 transition transform hover:scale-125"
                />
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Phone size={14} /> +234 803 412 3844
              </span>
              <span className="flex items-center gap-1">
                <MdEmail size={16} /> info@racmarsolutions.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} /> +234 803 412 3844
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
