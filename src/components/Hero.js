// components/Hero.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Car as CarIcon,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const today = new Date().toISOString().split("T")[0];

  const slides = [
    { id: 1, image: "/images/hero1.jpg" },
    { id: 2, image: "/images/hero2.jpg" },
    { id: 3, image: "/images/hero3.jpg" },
    { id: 4, image: "/images/hero4.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 xl:px-16 py-10 lg:py-0">
            <div className="max-w-xl animate-fade-in-left text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                Drive Your Dreams with{" "}
                <span className="text-yellow-600">RACMAR</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8">
                Choose from our extensive fleet of luxury, economy, and SUV
                vehicles. Best rates guaranteed with 24/7 customer support.
              </p>

              {/* Quick Stats */}
              <div className="flex justify-center lg:justify-start gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">500+</div>
                  <div className="text-sm text-gray-200">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">50+</div>
                  <div className="text-sm text-gray-200">Luxury Cars</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">24/7</div>
                  <div className="text-sm text-gray-200">Support</div>
                </div>
              </div>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 bg-yellow-600 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                View Our Fleet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT FORM (ONLY LG+) ================= */}
          <div className="hidden lg:flex lg:w-1/2 h-full items-center">
            <div className="w-full h-full bg-black/20 backdrop-blur-md shadow-2xl flex items-center p-4 sm:p-6 lg:p-8">
              <div className="w-full h-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-8 xl:mr-16">
                <div className="space-y-3 sm:space-y-4 pt-10">
                  {/* Pickup Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-stretch bg-white h-[58px]">
                      <div className="bg-yellow-600 flex items-center justify-center w-12">
                        <Calendar className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <label className="text-xs text-gray-600 px-2 pt-1">
                          Pickup Date
                        </label>
                        <input
                          type="date"
                          defaultValue={today}
                          className="bg-white w-full h-full outline-none text-gray-900 text-sm px-2"
                        />
                      </div>
                    </div>

                    <div className="flex items-stretch bg-white h-[58px]">
                      <div className="bg-yellow-600 flex items-center justify-center w-12">
                        <Clock className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <label className="text-xs text-gray-600 px-2 pt-1">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          className="bg-white w-full h-full outline-none text-gray-900 text-sm px-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Return Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-stretch bg-white h-[58px]">
                      <div className="bg-yellow-600 flex items-center justify-center w-12">
                        <Calendar className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <label className="text-xs text-gray-600 px-2 pt-1">
                          Return Date
                        </label>
                        <input
                          type="date"
                          defaultValue={today}
                          className="bg-white w-full h-full outline-none text-gray-900 text-sm px-2"
                        />
                      </div>
                    </div>

                    <div className="flex items-stretch bg-white h-[58px]">
                      <div className="bg-yellow-600 flex items-center justify-center w-12">
                        <Clock className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <label className="text-xs text-gray-600 px-2 pt-1">
                          Return Time
                        </label>
                        <input
                          type="time"
                          className="bg-white w-full h-full outline-none text-gray-900 text-sm px-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-stretch bg-white h-[58px]">
                    <div className="bg-yellow-600 flex items-center justify-center w-12">
                      <MapPin className="h-6 w-6 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <label className="text-xs text-gray-600 px-2 pt-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="bg-white w-full h-full outline-none text-gray-900 text-sm px-2"
                      />
                    </div>
                  </div>

                  {/* Car Type */}
                  <div className="flex items-stretch bg-white h-[58px]">
                    <div className="bg-yellow-600 flex items-center justify-center w-12">
                      <CarIcon className="h-6 w-6 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <label className="text-xs text-gray-600 px-2 pt-1">
                        Car Type
                      </label>
                      <select className="bg-white w-full outline-none text-gray-900 text-sm px-2 h-full">
                        <option>Select Car Type</option>
                        <option>Economy</option>
                        <option>Luxury</option>
                        <option>SUV</option>
                        <option>Van</option>
                        <option>Bus</option>
                      </select>
                    </div>
                  </div>
                  <Link href="/reserve">
                    <button className="w-1/2 mx-auto block bg-yellow-600 text-gray-900 px-3 py-2 rounded font-bold hover:bg-yellow-600 transition-all transform hover:scale-[1.02] shadow-lg mt-3 text-sm">
                      RESERVE YOUR JOURNEY
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
