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
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=2000&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1570125909232-263263f1db5a?auto=format&fit=crop&w=2000&q=80",
    },
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

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="w-full h-full flex">
          {/* Left Content - Centered in the remaining space */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-8 xl:px-16">
            <div className="max-w-xl animate-fade-in-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Drive Your Dreams with{" "}
                <span className="text-yellow-600">Premium Cars</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8">
                Choose from our extensive fleet of luxury, economy, and SUV
                vehicles. Best rates guaranteed with 24/7 customer support.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-6 mb-8">
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
                href="/cars"
                className="inline-flex items-center gap-2 bg-yellow-600 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                View Our Fleet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Form - Takes full height and stays at the edge */}
          <div className="w-full lg:w-1/2 h-full flex items-center">
            <div className="w-full h-full bg-black/20 backdrop-blur-md shadow-2xl flex items-center p-4 sm:p-6 lg:p-8">
              <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-8 xl:mr-16">
                <div className="space-y-3 sm:space-y-4">
                  {/* Pickup Row - Date and Time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Pickup Date
                        </label>
                        <input
                          type="date"
                          defaultValue={today}
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>

                    <div
                      className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 
                    transition-all mb-4 sm:mb-0"
                    >
                      <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Return Row - Date and Time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Return Date
                        </label>
                        <input
                          type="date"
                          defaultValue={today}
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>

                    <div
                      className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 
                    transition-all mb-4 sm:mb-0"
                    >
                      <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Return Time
                        </label>
                        <input
                          type="time"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Data - below the date/time rows */}
                  <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                    <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="bg-white w-full outline-none placeholder:text-gray-400 text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 h-full"
                      />
                    </div>
                  </div>

                  <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                    <div className="bg-yellow-600 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                      <CarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                        Car Type
                      </label>
                      <select className="bg-white w-full outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 h-full">
                        <option className="bg-white text-gray-900">
                          Select Car Type
                        </option>
                        <option className="bg-white text-gray-900">
                          Economy
                        </option>
                        <option className="bg-white text-gray-900">
                          Luxury
                        </option>
                        <option className="bg-white text-gray-900">SUV</option>
                        <option className="bg-white text-gray-900">Van</option>
                        <option className="bg-white text-gray-900">Bus</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-1/2 mx-auto block bg-yellow-600 text-gray-900 py-2 sm:py-2.5 rounded font-semibold hover:bg-yellow-600 transition-all transform hover:scale-[1.02] shadow-lg mt-3 sm:mt-4 text-sm sm:text-base">
                    RESERVE YOUR JOURNEY
                  </button>
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
