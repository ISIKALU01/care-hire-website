import Image from "next/image";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-black text-white">

      {/* INTRO */}
      <section className="py-20 bg-black/90">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 tracking-wide">
            OUR SERVICES
          </h1>
          <p className="text-gray-300 leading-relaxed">
            At RACMAR SOLUTION, we offer a wide range of car hire and vehicle
            solutions designed to meet your personal and business needs.
            Whether you need a ride for a few hours or a long-term vehicle,
            we deliver comfort, reliability, and class every step of the way.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Flexible Rentals */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices1.jpg"
              alt="Flexible Rentals"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              Flexible Rentals for Every Journey
            </h2>

            <p className="text-gray-300">
              We provide short-term and long-term car hire options tailored to your schedule. 
              Whether it’s for daily use, business trips, or weekend outings, our vehicles 
              are always ready when you are.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Daily, Weekly & Monthly Rentals</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Self-drive & Chauffeur options</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Clean, well-maintained vehicles</li>
            </ul>
          </div>
        </div>

        {/* 2. Executive */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices2.jpg"
              alt="Luxury Rentals"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              Executive & Luxury Rentals
            </h2>

            <p className="text-gray-300">
              Perfect for corporate use, VIP transport, weddings, and special occasions. 
              Our luxury vehicles are designed to give you a premium experience wherever you go.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> High-end, executive vehicles</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Professional chauffeur service</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Ideal for events and business travel</li>
            </ul>
          </div>
        </div>

        {/* 3. Airport */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices3.jpg"
              alt="Airport Transfer"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              Airport Pickup & Drop-off
            </h2>

            <p className="text-gray-300">
              Avoid the stress of transportation with our efficient airport services. 
              We ensure timely pickups and smooth drop-offs, so you can travel with peace of mind.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> On-time guaranteed service</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Comfortable and secure rides</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Hassle-free experience</li>
            </ul>
          </div>
        </div>

        {/* 4. Car Sales */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices4.jpg"
              alt="Car Sales"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              Car Sales
            </h2>

            <p className="text-gray-300">
              Looking to own a car? We offer carefully inspected and verified 
              vehicles for sale at competitive prices.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Tested and trusted cars</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Transparent pricing</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Purchase guidance</li>
            </ul>
          </div>
        </div>

        {/* 5. Custom Hire */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices5.jpg"
              alt="Custom Hire"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              Custom Hire Services
            </h2>

            <p className="text-gray-300">
              We understand that every customer is different. That’s why we offer 
              flexible and customized car hire solutions to suit your unique needs.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Long-term business rentals</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Event transport planning</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-600" /> Personalized packages</li>
            </ul>
          </div>
        </div>

      </section>

      {/* WHY US */}
      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
            WHY OUR SERVICES STAND OUT
          </h2>

          <ul className="text-gray-300 space-y-2">
            <li>✔ Reliable and well-maintained fleet</li>
            <li>✔ Affordable and flexible pricing</li>
            <li>✔ Professional and friendly team</li>
            <li>✔ Quick booking and fast response</li>
            <li>✔ Commitment to safety and customer satisfaction</li>
          </ul>
        </div>
      </section>

    </div>
  );
}