import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black text-white">

      {/* HEADER */}
      <section className="py-20 bg-black/90">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-gray-300">
            Need a ride or have questions? Reach out to us anytime — we’re here
            to help you with fast and reliable service.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* CONTACT INFO */}
            <div className="space-y-6">

              <h2 className="text-2xl text-yellow-600 font-semibold tracking-wide">
                Get In Touch
              </h2>

              <p className="text-gray-300">
                Whether you need a quick booking or detailed information about
                our services, our team is ready to assist you.
              </p>

              <div className="space-y-4 text-gray-400">

                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-600 w-5 h-5" />
                  <span>+234 803 412 3844</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-yellow-600 w-5 h-5" />
                  <span>info@racmarsolutions.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-yellow-600 w-5 h-5" />
                  <span>Beside Jossy Store, Aafin Iyanu, Ologuneru, Ibadan</span>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348034123844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-600 text-black px-6 py-3 font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>

            </div>

            {/* FORM */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 space-y-5">

              <h2 className="text-xl text-yellow-600 font-semibold tracking-wide">
                Send a Message
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-gray-900 py-3 font-semibold hover:bg-yellow-500 transition-all transform hover:scale-[1.02]"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}