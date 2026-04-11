// pages/index.js
import React from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import {
  Shield,
  HeadphonesIcon,
  Clock,
  ThumbsUp,
  Car,
  Wifi,
  Fuel,
  Snowflake,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      title: "Insurance Included",
      description: "Full coverage insurance with every rental",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-yellow-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Flexible Returns",
      description: "Return at any of our locations",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-yellow-600" />,
      title: "Best Price Guarantee",
      description: "We match any competitor price",
    },
  ];

  const amenities = [
    { icon: <Wifi />, name: "Free WiFi" },
    { icon: <Fuel />, name: "Full Tank" },
    { icon: <Snowflake />, name: "Air Conditioning" },
    { icon: <Car />, name: "GPS Available" },
  ];

  return (
    <>
      <Hero />

      {/*  */}
      <div className="w-full bg-black/90 text-white px-10 sm:px-20 lg:px-20 py-15 sm:py-18 lg:py-36">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mb-40">
          {/* Left Side - Heading */}
          <h2 className="text-yellow-500 w-full lg:w-1/2 text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
            RACMAR SOLUTIONS — Reliable Car Hire in Ibadan and Lagos for
            Business, Airport & Events
          </h2>

          {/* Right Side - Paragraph */}
          <p className="w-full lg:w-1/2 text-sm sm:text-base text-gray-300 leading-relaxed">
            Looking for reliable car hire in Ibadan? RACMAR SOLUTIONS provides
            professional chauffeur-driven car hire services across Ibadan
            including Bodija, Idishin, Eleyele and other areas, also Lagos
            including Victoria Island, Lekki, Ikeja, and Ikoyi, offering both
            affordable and luxury vehicles for airport transfers, business
            travel, and special events. Our 24/7 availability and commitment to
            reliability make us a trusted choice for residents, executives, and
            visitors.
          </p>
        </div>

        {/* Car Images Section */}
        <div className="w-full sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Swipe Indicator (Mobile Only) */}
            <div className="flex items-center justify-center mb-4 lg:hidden">
              <div className="flex items-center gap-2 text-gray-400 text-xs animate-pulse">
                <span>Swipe</span>
                <div className="w-6 h-[2px] bg-gray-400 relative overflow-hidden">
                  <span className="absolute left-0 top-0 h-full w-2 bg-yellow-500 animate-[slide_1.2s_infinite]" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
              {/* Card 1 */}
              <div className="relative min-w-[85%] sm:min-w-[60%] lg:min-w-0 h-64 sm:h-72 lg:h-80 overflow-hidden group snap-start">
                <Image
                  src="/images/carsite5.jpg"
                  alt="Toyota Camry"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-4 w-full">
                  <h3 className="text-white text-lg font-semibold">
                    Toyota Camry
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Comfortable city rides
                  </p>
                  <p className="text-yellow-400 font-bold text-sm mt-1">
                    ₦45,000/day
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative min-w-[85%] sm:min-w-[60%] lg:min-w-0 h-64 sm:h-72 lg:h-80 overflow-hidden group snap-start">
                <Image
                  src="/images/carsite6.jpg"
                  alt="Lexus RX 350"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-4 w-full">
                  <h3 className="text-white text-lg font-semibold">
                    Lexus RX 350
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Luxury & executive travel
                  </p>
                  <p className="text-yellow-400 font-bold text-sm mt-1">
                    ₦85,000/day
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative min-w-[85%] sm:min-w-[60%] lg:min-w-0 h-64 sm:h-72 lg:h-80 overflow-hidden group snap-start">
                <Image
                  src="/images/carsite3.jpg"
                  alt="Toyota Hiace"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-4 w-full">
                  <h3 className="text-white text-lg font-semibold">
                    Toyota Hiace
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Group & event transport
                  </p>
                  <p className="text-yellow-400 font-bold text-sm mt-1">
                    ₦120,000/day
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 bg-yellow-600 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
              >
                View Our Fleet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-36 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
              Why Choose DriveRent?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              We provide the best car rental experience with transparent pricing
              and excellent service
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-black/60 p-6 text-center transition relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-yellow-600/10 blur-xl" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex justify-center mb-4 text-yellow-500"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl text-white font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* our services section */}
      <section className="py-24 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-600">
              OUR SERVICES
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group">
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/images/carsite5.jpg"
                  alt="Car Hire Lagos"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" /> */}
              </div>

              {/* Content */}
              <div className="bg-black/60 p-5 space-y-3">
                <h3 className="text-yellow-600 text-xl font-bold">
                  CAR HIRE LAGOS
                </h3>
                <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                  Flexible car hire in Lagos services for daily use, business
                  travel, and personal transportation.
                </p>

                <Link
                  href="/cars"
                  className="inline-flex items-center gap-2 text-yellow-500 font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/images/carsite6.jpg"
                  alt="Airport Transfers"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
              </div>

              <div className="bg-black/60 p-5 space-y-3">
                <h3 className="text-yellow-600 text-xl font-bold">
                  AIRPORT TRANSFERS
                </h3>
                <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                  Reliable airport pickup and drop-off services with
                  professional drivers and timely scheduling.
                </p>

                <Link
                  href="/cars"
                  className="inline-flex items-center gap-2 text-yellow-500 font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/images/carsite3.jpg"
                  alt="Event & Corporate Hire"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
              </div>

              <div className="bg-black/60 p-5 space-y-3">
                <h3 className="text-yellow-600 text-xl font-bold">
                  EVENT & CORPORATE HIRE
                </h3>
                <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                  Premium vehicles for weddings, corporate events, and executive
                  travel with chauffeur service.
                </p>

                <Link
                  href="/cars"
                  className="inline-flex items-center gap-2 text-yellow-500 font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Every Rental Includes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="text-blue-500">{amenity.icon}</div>
                <span className="text-lg">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your car today and get 20% off your first rental
          </p>
          <Link
            href="/booking"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
