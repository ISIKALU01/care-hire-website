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

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Insurance Included",
      description: "Full coverage insurance with every rental",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Flexible Returns",
      description: "Return at any of our locations",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: "Best Price Guarantee",
      description: "We match any competitor price",
    },
  ];

  const popularCars = [
    {
      name: "Tesla Model 3",
      price: "$99/day",
      image: "/api/placeholder/400/300",
      type: "Electric",
    },
    {
      name: "BMW X5",
      price: "$129/day",
      image: "/api/placeholder/400/300",
      type: "SUV",
    },
    {
      name: "Mercedes C-Class",
      price: "$89/day",
      image: "/api/placeholder/400/300",
      type: "Luxury",
    },
    {
      name: "Toyota Camry",
      price: "$49/day",
      image: "/api/placeholder/400/300",
      type: "Economy",
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DriveRent?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide the best car rental experience with transparent pricing
              and excellent service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
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
