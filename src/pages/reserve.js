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
    phoneNumber: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeFuGry0M7_aX0lSHZNz6zD0G7ivvAySb17IfovOs54vxvM_g/formResponse";

    const formBody = new FormData();

    formBody.append("entry.1358463684", formData.pickupDate);
    formBody.append("entry.2117360501", formData.pickupTime);
    formBody.append("entry.1365613852", formData.returnDate);
    formBody.append("entry.1936374746", formData.returnTime);
    formBody.append("entry.2111940346", formData.location);
    formBody.append("entry.1454574233", formData.carType);
    formBody.append("entry.1319272363", formData.phoneNumber);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSuccess(true);

      // Reset form
      setFormData({
        pickupDate: "",
        pickupTime: "",
        returnDate: "",
        returnTime: "",
        location: "",
        carType: "",
        phoneNumber: "",
      });

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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

      {/* HERO */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/images/pagecar_converted.avif"
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

      {/* FORM */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit}>
          <div className="bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl p-6 sm:p-10">
            <div className="space-y-6">
              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup Date */}
                <InputBox icon={<Calendar />} label="Pickup Date">
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 text-sm bg-transparent"
                  />
                </InputBox>

                {/* Pickup Time */}
                <InputBox icon={<Clock />} label="Pickup Time">
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 text-sm bg-transparent"
                  />
                </InputBox>

                {/* Return Date */}
                <InputBox icon={<Calendar />} label="Return Date">
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 text-sm bg-transparent"
                  />
                </InputBox>

                {/* Return Time */}
                <InputBox icon={<Clock />} label="Return Time">
                  <input
                    type="time"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 text-sm bg-transparent"
                  />
                </InputBox>
              </div>

              {/* Location */}
              <InputBox icon={<MapPin />} label="Pickup Location">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter pickup location"
                  className="w-full outline-none text-gray-900 text-sm bg-transparent"
                />
              </InputBox>

              {/* Phone */}
              <InputBox icon={<Phone />} label="Phone Number">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Provide reachable phone number"
                  className="w-full outline-none text-gray-900 text-sm bg-transparent"
                />
              </InputBox>

              {/* Car Type */}
              <InputBox icon={<CarIcon />} label="Car Type">
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className="w-full outline-none text-gray-900 text-sm bg-transparent"
                >
                  <option value="">Select Car Type</option>
                  <option>Economy</option>
                  <option>Luxury</option>
                  <option>SUV</option>
                  <option>Van</option>
                  <option>Bus</option>
                </select>
              </InputBox>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto mx-auto block bg-yellow-600 text-black font-semibold px-6 py-2.5 rounded-md hover:bg-yellow-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Reserve Now"}
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

/* ✅ REUSABLE INPUT COMPONENT */
const InputBox = ({ icon, label, children }) => (
  <div className="flex items-stretch bg-white min-h-[64px] overflow-hidden">
    {/* ICON SIDE */}
    <div className="bg-yellow-600 flex items-center justify-center w-12 self-stretch text-black">
      {icon}
    </div>

    {/* INPUT SIDE */}
    <div className="flex-1 px-3 py-2 flex flex-col justify-center">
      <label className="text-[11px] text-gray-500 leading-tight">{label}</label>
      {children}
    </div>
  </div>
);

export default BookPage;
