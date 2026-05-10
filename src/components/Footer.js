import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo + Text */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images/racmarlogo_converted.avif"
                  alt="DriveRent Logo"
                  width={140}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>
            <p className="text-white text-sm max-w-sm">
              Reliable car hire services in Lagos & Ibadan. Available 24/7 with
              no hidden charges.
            </p>
          </div>

          {/* Links */}
          <div className="flex font-medium gap-6 text-md">
            <Link
              href="/"
              className="text-yellow-600 hover:text-yellow-500 transition"
            >
              Home
            </Link>
            <Link
              href="/fleet"
              className="text-yellow-600 hover:text-yellow-500 transition"
            >
              Fleet
            </Link>
            <Link
              href="/ourservices"
              className="text-yellow-600 hover:text-yellow-500 transition"
            >
              Book
            </Link>
            <Link
              href="/contact"
              className="text-yellow-600 hover:text-yellow-500 transition"
            >
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-sm text-gray-400 items-center lg:items-end">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-600" />
              <span className="text-white">+234 803 412 3844</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-600" />
              <span className="text-white">info@racmarsolutions.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-white text-xs">
          © {new Date().getFullYear()} RACMAR. All rights reserved. Developed by{" "}
          {"ElegantUI "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
