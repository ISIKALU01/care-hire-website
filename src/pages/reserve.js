import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Car as CarIcon,
  Phone,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const BookPage = () => {
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    location: "",
    carType: "",
    phoneNumber: "", // ✅ NEW FIELD
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeFuGry0M7_aX0lSHZNz6zD0G7ivvAySb17IfovOs54vxvM_g/formResponse";

    const formBody = new FormData();

    formBody.append("entry.1358463684", formData.pickupDate);
    formBody.append("entry.2117360501", formData.pickupTime);
    formBody.append("entry.1365613852", formData.returnDate);
    formBody.append("entry.1936374746", formData.returnTime);
    formBody.append("entry.2111940346", formData.location);
    formBody.append("entry.1454574233", formData.carType);
    formBody.append("entry.1319272363", formData.phoneNumber); // ✅ NEW MAPPING

    await fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section className="w-full bg-black relative">
      {/* SUCCESS TOAST */}
      {success && (
        <div className="fixed top-6 right-6 z-50 animate-fadeIn">
          <div className="bg-black border border-yellow-600 shadow-2xl rounded-xl px-5 py-4 flex items-center gap-3 w-[300px]">
            <CheckCircle className="text-yellow-600" />
            <div>
              <p className="text-yellow-500 font-semibold text-sm">
                Booking Confirmed
              </p>
              <p className="text-gray-300 text-xs">
                Your reservation has been submitted successfully.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/images/pagecar.jpg"
          alt="Luxury Chauffeur Booking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-semibold text-yellow-600 tracking-wide">
          RESERVATIONS
        </h1>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit}>
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
                    <label className="text-xs text-gray-600">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      onChange={handleChange}
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
                    <label className="text-xs text-gray-600">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      onChange={handleChange}
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
                    <label className="text-xs text-gray-600">
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      onChange={handleChange}
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
                    <label className="text-xs text-gray-600">
                      Return Time
                    </label>
                    <input
                      type="time"
                      name="returnTime"
                      onChange={handleChange}
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
                  <label className="text-xs text-gray-600">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className="outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>

              {/* PHONE NUMBER (NEW) */}
              <div className="flex bg-white h-[58px] rounded overflow-hidden">
                <div className="bg-yellow-600 flex items-center justify-center w-12">
                  <Phone className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-2">
                  <label className="text-xs text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="Provide phone number you can be reached on"
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
                  <select
                    name="carType"
                    onChange={handleChange}
                    className="outline-none text-gray-900 text-sm bg-white"
                  >
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
              <button
                type="submit"
                className="w-full bg-yellow-600 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                RESERVE YOUR JOURNEY
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default BookPage;