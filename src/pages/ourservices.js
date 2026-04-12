import Image from "next/image";
import { Check, User } from "lucide-react";

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
            solutions designed to meet your personal and business needs. Whether
            you need a ride for a few hours or a long-term vehicle, we deliver
            comfort, reliability, and class every step of the way.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Flexible Rentals */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices11.jpg"
              alt="Flexible Rentals"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              FLEXIBLE RENTALS FOR EVERY JOURNEY
            </h2>

            <p className="text-gray-300">
              We provide short-term and long-term car hire options tailored to
              your schedule. Whether it’s for daily use, business trips, or
              weekend outings, our vehicles are always ready when you are.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Daily, Weekly &
                Monthly Rentals
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Self-drive &
                Chauffeur options
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Clean,
                well-maintained vehicles
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Executive */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices5.jpg"
              alt="Luxury Rentals"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              EXECUTIVE RENTALS FOR A PREMIUM EXPERIENCE
            </h2>

            <p className="text-gray-300">
              Perfect for corporate use, VIP transport, weddings, and special
              occasions. Our luxury vehicles are designed to give you a premium
              experience wherever you go.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> High-end,
                executive vehicles
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Professional
                chauffeur service
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Ideal for events
                and business travel
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Airport */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices2.jpg"
              alt="Airport Transfer"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              AIRPORT PICKUP AND DROP-OFF SERVICES
            </h2>

            <p className="text-gray-300">
              Avoid the stress of transportation with our efficient airport
              services. We ensure timely pickups and smooth drop-offs, so you
              can travel with peace of mind.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> On-time guaranteed
                service
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Comfortable and
                secure rides
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Hassle-free
                experience
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Car Sales */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices12.jpg"
              alt="Car Sales"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              CAR SALES
            </h2>

            <p className="text-gray-300">
              Looking to own a car? We offer carefully inspected and verified
              vehicles for sale at competitive prices.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Tested and trusted
                cars
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Transparent
                pricing
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Purchase guidance
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Custom Hire */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices1.jpg"
              alt="Custom Hire"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              CUSTOM HIRE SERVICES
            </h2>

            <p className="text-gray-300">
              We understand that every customer is different. That’s why we
              offer flexible and customized car hire solutions to suit your
              unique needs.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Long-term business
                rentals
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Event transport
                planning
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Personalized
                packages
              </li>
            </ul>
          </div>
        </div>

        {/* 6. professional chauffeurs */}
        {/* 6. professional chauffeurs */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/ourservices4.jpg"
              alt="Professional Chauffeur Services"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              PROFESSIONAL CHAUFFEUR SERVICES
            </h2>

            <p className="text-gray-300">
              Experience premium chauffeur-driven transport with highly trained,
              courteous, and professional drivers available for business,
              airport transfers, events, and private travel.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Experienced &
                licensed chauffeurs
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Punctual and
                reliable service
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-yellow-600" /> Comfortable,
                executive travel experience
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="w-full py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          {/* CENTERED HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-600 tracking-wide">
              AREAS WE SERVE
            </h2>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* TEXT SIDE */}
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-gray-400 mt-3">
                Based in Lagos and Ibadan, we provide chauffeur services across
                Lagos, Ibadan and long-distance routes across Nigeria.
              </p>
              {/* Lagos Coverage */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Lagos and Ibadan Coverage
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Everywhere in Ibadan, Victoria Island, Ikoyi, Lekki, Ikeja,
                  Ajah, Surulere, Yaba, Maryland, Lagos Island...
                </p>
              </div>

              {/* Interstate */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Interstate & Long-Distance Travel
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We provide chauffeur-driven transportation from Ibadan and
                  Lagos to destinations across the Southwest and other parts of
                  Nigeria, including:Abeokuta, Sagamu, Benin City, Ilorin,
                  Akure, Oshogbo, Ondo, Warri, Asaba... and more on request.
                </p>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/lagosroad1.jpg"
                  alt="Areas We Serve - Chauffeur Coverage Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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

      {/* REVIEWS SECTION */}
      <section className="w-full py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-600 tracking-wide">
              REVIEWS
            </h2>
            <p className="text-gray-400 mt-3">
              What our clients say about The RACMAR experience
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <User className="w-8 h-8 text-yellow-600 mb-4" />

              <p className="text-gray-300 text-sm leading-relaxed">
                I was referred to RACMAR solutions and was impressed by their
                professional team. The management has done a commendable job
                replicating high-end US luxury standards here in Nigeria. Our
                chauffeur was elegant, on time, and prioritized our safety
                throughout the journey. I highly recommend this company for
                anyone seeking a premium car rental service that truly
                understands international hospitality and reliability.
              </p>

              <p className="mt-4 text-yellow-600 font-semibold">— Adeyemi</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <User className="w-8 h-8 text-yellow-600 mb-4" />

              <p className="text-gray-300 text-sm leading-relaxed">
                Great service is about more than transportation. It is about
                trust, safety, and consistency. Traveling with my wife and two
                young children, we experienced true chauffeur-level
                professionalism. Always on time, and proactive customer
                check-ins throughout our stay. If you are visiting Lagos and
                want reliability, professionalism, and peace of mind, I highly
                recommend TheLuxAuto.
              </p>

              <p className="mt-4 text-yellow-600 font-semibold">— Kai Dunna</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <User className="w-8 h-8 text-yellow-600 mb-4" />

              <p className="text-gray-300 text-sm leading-relaxed">
                My recent travel to Nigeria with my family would not have been
                as memorable without RACMAR. I want to appreciate the two
                drivers, Olisa and Israel, for making the experience worth a
                million. They were very professional, punctual, and excellent
                representatives of the company. If you need a chauffeur service
                in Lagos, this is the team to trust for a stress-free
                experience.
              </p>

              <p className="mt-4 text-yellow-600 font-semibold">
                — Olumide Fisayo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
