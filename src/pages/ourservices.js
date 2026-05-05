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
      <section className="py-16 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72 overflow-hidden rounded-xl">
            <div className="w-full h-full">
              <Image
                src="/images/wcar4.jpeg"
                alt="Flexible Rentals"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
              FLEXIBLE RENTALS FOR EVERY JOURNEY
            </h2>
            <p className="text-gray-300">
              We provide short-term and long-term car hire options tailored to
              your schedule.
            </p>

            <ul className="space-y-2 text-gray-400">
              {[
                "Daily, Weekly & Monthly Rentals",
                "Self-drive & Chauffeur options",
                "Clean, well-maintained vehicles",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* REUSABLE BLOCK */}
        {[
          {
            title: "EXECUTIVE RENTALS FOR A PREMIUM EXPERIENCE",
            img: "/images/ourservices5.jpg",
            reverse: true,
            content:
              "Perfect for corporate use, VIP transport, weddings, and special occasions.",
            list: [
              "High-end, executive vehicles",
              "Professional chauffeur service",
              "Ideal for events and business travel",
            ],
          },
          {
            title: "AIRPORT PICKUP AND DROP-OFF SERVICES",
            img: "/images/ourservices2.jpg",
            reverse: false,
            content:
              "Avoid the stress of transportation with our efficient airport services.",
            list: [
              "On-time guaranteed service",
              "Comfortable and secure rides",
              "Hassle-free experience",
            ],
          },
          {
            title: "CAR SALES",
            img: "/images/wcar2.jpeg",
            reverse: true,
            content:
              "We offer carefully inspected and verified vehicles for sale.",
            list: [
              "Tested and trusted cars",
              "Transparent pricing",
              "Purchase guidance",
            ],
          },
          {
            title: "CUSTOM HIRE SERVICES",
            img: "/images/ourservices1.jpg",
            reverse: false,
            content:
              "Flexible and customized car hire solutions tailored to your needs.",
            list: [
              "Long-term business rentals",
              "Event transport planning",
              "Personalized packages",
            ],
          },
          {
            title: "PROFESSIONAL CHAUFFEUR SERVICES",
            img: "/images/wcar3.jpg",
            reverse: true,
            content:
              "Premium chauffeur-driven transport with highly trained drivers.",
            list: [
              "Experienced & licensed chauffeurs",
              "Punctual and reliable service",
              "Executive travel experience",
            ],
          },
          {
            title: "DRIVER OUTSOURCING SERVICES",
            img: "/images/ourservices4.jpg", // add a suitable image in your public/images
            reverse: false,
            content:
              "Hire professional, vetted drivers for your personal or business needs without the hassle of recruitment.",
            list: [
              "Trained & background-checked drivers",
              "Flexible short-term & long-term placement",
              "Perfect for companies and private clients",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10`}
          >
            {/* IMAGE */}
            <div className="relative w-full lg:w-1/2 h-72 overflow-hidden rounded-xl">
              <div className="w-full h-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
                {service.title}
              </h2>

              <p className="text-gray-300">{service.content}</p>

              <ul className="space-y-2 text-gray-400">
                {service.list.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
                  Owerri, Oshogbo, Ebonyi, Warri, Asaba, Calabar... and more on
                  request.
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
                recommend RACMAR solutions.
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
