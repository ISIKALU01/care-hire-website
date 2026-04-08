// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl">DriveRent</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for quality car rentals. Best prices, great service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-500 transition">Home</Link></li>
              <li><Link href="/cars" className="text-gray-400 hover:text-blue-500 transition">Our Fleet</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-blue-500 transition">Book Now</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@driverent.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Car Street, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                {/* <Facebook className="h-6 w-6" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                {/* <Twitter className="h-6 w-6" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                {/* <Instagram className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DriveRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;