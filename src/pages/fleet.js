import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cars = [
  {
    name: "Toyota Prado",
    image: "/images/carsite1.jpg",
    desc: "Comfortable city rides",
  },
  {
    name: "Lexus SUV",
    image: "/images/carsite2.jpg",
    desc: "Luxury & executive travel",
  },
  {
    name: "Toyota Camry",
    image: "/images/carsite3.jpg",
    desc: "Group & event transport",
  },
  {
    name: "Toyota Camry",
    image: "/images/carsite4.jpg",
    desc: "Premium comfort experience",
  },
  {
    name: "Toyota Sienna",
    image: "/images/carsite5.jpg",
    desc: "SUV for long-distance travel",
  },
  {
    name: "Toyota Corolla",
    image: "/images/carsite6.jpg",
    desc: "Affordable executive rides",
  },
  {
    name: "Toyota Camry",
    image: "/images/fleet11.jpg",
    desc: "Premium comfort experience",
  },
  {
    name: "HUMMER H2",
    image: "/images/fleet12.jpg",
    desc: "SUV for long-distance travel",
  },
  {
    name: "HIACE bus",
    image: "/images/fleet3.jpg",
    desc: "Affordable executive rides",
  },
];

export default function Fleet() {
  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <section className="py-20 bg-black/90">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4 tracking-wide">
            OUR FLEET
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our range of well-maintained vehicles designed for comfort,
            style, and reliability. Whether for business, travel, or events,
            we have the perfect car for you.
          </p>
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {cars.map((car, index) => (
              <div
                key={index}
                className="group relative overflow-hidden transition duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 w-full p-4">
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {car.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{car.desc}</p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-400 font-bold text-sm">
                      {car.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl text-yellow-600 font-semibold mb-4">
            Need Help Choosing a Car?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact us today and let our team help you select the perfect vehicle
            for your trip or event.
          </p>

          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 bg-yellow-600 text-gray-900 px-6 py-3 font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
          >
            Book a Ride
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}