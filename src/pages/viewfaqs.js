import Image from "next/image";

const faqs = [
  {
    question: "HOW DO I BOOK A CAR?",
    answer:
      "You can book directly through our website or contact us via WhatsApp for fast assistance and confirmation.",
  },
  {
    question: "ARE YOUR SERVICES AVAILABLE 24/7?",
    answer:
      "Yes, we operate round the clock to ensure you get reliable transportation whenever you need it.",
  },
  {
    question: "DO YOU PROVIDE DRIVERS?",
    answer:
      "Yes, all our car hire services come with professional and experienced chauffeurs for your comfort and safety.",
  },
  {
    question: "ARE THERE ANY HIDDEN CHARGES?",
    answer:
      "No, our pricing is fully transparent with no hidden fees. What you see is exactly what you pay.",
  },
  {
    question: "WHAT AREAS DO YOU COVER?",
    answer:
      "We serve Lagos including Victoria Island, Ikoyi, Lekki, Ikeja, and also offer interstate trips to Ibadan, Abeokuta, Ilorin, and more.",
  },
  {
    question: "IS FUEL INCLUDED?",
    answer:
      "Fuel is not included in the base price. Clients are responsible for fueling unless a pre-fueling option is arranged.",
  },
  {
    question: "DO YOU OFFER AIRPORT TRANSFERS?",
    answer:
      "Yes, we provide reliable airport pickup and drop-off services with professional chauffeurs.",
  },
  {
    question: "CAN I BOOK FOR INTERSTATE TRAVEL?",
    answer:
      "Absolutely. We provide chauffeur-driven interstate travel across multiple cities in Nigeria.",
  },
];

const FaqPage = () => {
  return (
    <section className="bg-black/90 text-white">

      {/* HERO */}
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/images/ourservices3.jpg"
          alt="FAQs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <h1 className="relative z-10 text-4xl md:text-5xl font-semibold text-yellow-600 tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>

      {/* FAQ GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Intro */}
        <div className="text-center mb-14">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our chauffeur services,
            bookings, and travel coverage across Lagos and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 md:p-7 transition duration-300 
              hover:-translate-y-2 hover:bg-white/10 
              hover:shadow-[0_0_25px_rgba(234,179,8,0.12)] rounded-lg"
            >
              <h3 className="text-yellow-600 font-semibold mb-3 tracking-wide text-sm md:text-base">
                {faq.question}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqPage;