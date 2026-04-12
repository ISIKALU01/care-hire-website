import Image from "next/image";
import { Calendar, Clock, MapPin, Car as CarIcon } from "lucide-react";

const BookPage = () => {
  return (
    <section className="w-full bg-black">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/images/pagecar.jpg"
          alt="Luxury Chauffeur Booking"
          fill
          className="object-cover"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TITLE */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-semibold text-yellow-600 tracking-wide">
          RESERVATIONS
        </h1>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-6 sm:p-10">
          <div className="space-y-6">
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pickup Date */}
              <div className="flex bg-white h-[58px] rounded overflow-hidden">
                <div className="bg-yellow-600 flex items-center justify-center w-12">
                  <Calendar className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-2">
                  <label className="text-xs text-gray-600">Pickup Date</label>
                  <input
                    type="date"
                    className="outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>

              {/* Pickup Time */}
              <div className="flex bg-white h-[58px] rounded overflow-hidden">
                <div className="bg-yellow-600 flex items-center justify-center w-12">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-2">
                  <label className="text-xs text-gray-600">Pickup Time</label>
                  <input
                    type="time"
                    className="outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="flex bg-white h-[58px] rounded overflow-hidden">
                <div className="bg-yellow-600 flex items-center justify-center w-12">
                  <Calendar className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-2">
                  <label className="text-xs text-gray-600">Return Date</label>
                  <input
                    type="date"
                    className="outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="flex bg-white h-[58px] rounded overflow-hidden">
                <div className="bg-yellow-600 flex items-center justify-center w-12">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-2">
                  <label className="text-xs text-gray-600">Return Time</label>
                  <input
                    type="time"
                    className="outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex bg-white h-[58px] rounded overflow-hidden">
              <div className="bg-yellow-600 flex items-center justify-center w-12">
                <MapPin className="h-5 w-5 text-black" />
              </div>
              <div className="flex-1 flex flex-col justify-center px-2">
                <label className="text-xs text-gray-600">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="outline-none text-gray-900 text-sm"
                />
              </div>
            </div>

            {/* CAR TYPE */}
            <div className="flex bg-white h-[58px] rounded overflow-hidden">
              <div className="bg-yellow-600 flex items-center justify-center w-12">
                <CarIcon className="h-5 w-5 text-black" />
              </div>
              <div className="flex-1 flex flex-col justify-center px-2">
                <label className="text-xs text-gray-600">Car Type</label>
                <select className="outline-none text-gray-900 text-sm bg-white">
                  <option>Select Car Type</option>
                  <option>Economy</option>
                  <option>Luxury</option>
                  <option>SUV</option>
                  <option>Van</option>
                  <option>Bus</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-yellow-600 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-[1.02] shadow-lg">
              RESERVE YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      {/* SERVICE INFORMATION */}
      <div className="mt-16">
        <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 tracking-wide">
              PLEASE NOTE, THE FOLLOWING CONDITIONS
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl">
              Please review the details below to ensure a smooth and seamless
              booking experience.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Fuel Policy */}
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-medium text-white">
                Fuel Policy
              </h4>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Fuel is not included in the base rental price. Vehicles are
                provided without fuel, and clients are responsible for fueling
                throughout the duration of their trip.
              </p>

              <p className="text-gray-500 text-sm md:text-base">
                For added convenience, a pre-fueling option can be arranged upon
                request.
              </p>
            </div>

            {/* Pickup & Drop-off */}
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-medium text-white">
                Pickup & Drop-off Service
              </h4>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                For point-to-point transfers, select your preferred pickup time
                and set the return time approximately three hours later during
                booking.
              </p>

              <p className="text-gray-500 text-sm md:text-base">
                This service is designed for direct travel between locations
                without intermediate stops, ensuring efficiency and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPage;
