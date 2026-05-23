import Image from "next/image";

const services = [
  {
    title: "Celebrity Promotion Videos",
    description: "Short reels with real celebrities",
    image: "celebpromotion.jpeg",
    features: [
      "Indoor shoot (budget-friendly)",
      "₹3,000 – ₹25,000",
      "No Instagram posting",
      "No store visit",
    ],
    waLink:
      "https://wa.me/919618880475?text=Hi%2C%20I%20am%20interested%20in%20Celebrity%20Promotion%20Videos.%20Please%20provide%20more%20details.",
  },
  {
    title: "Celebrity Store Visits",
    description: "Celebrity visits your business",
    image: "cevents.jpeg",
    features: [
      "Shoot at your location",
      "Starting ₹35,000+",
      "No Instagram posting",
    ],
    waLink:
      "https://wa.me/919618880475?text=Hi%2C%20I%20am%20interested%20in%20Celebrity%20Store%20Visits.%20Please%20provide%20more%20details.",
  },
  {
    title: "Shop Openings & Events",
    description: "Celebrity guest coordination",
    image: "celebshopopenings.jpeg",
    features: [
      "Openings, launches, events",
      "Starting ₹75,000+",
      "Transport & stay extra",
    ],
    waLink:
      "https://wa.me/919962228885?text=Hi%2C%20I%20am%20interested%20in%20Shop%20Openings%20%26%20Events.%20Please%20provide%20more%20details.",
  },
  {
    title: "Celebrity Wishes",
    description: "Birthday / Anniversary / Congrats",
    image: "celebwishes.jpeg",
    features: ["Delivered within 24 hours", "100% real celebrities"],
    waLink:
      "https://wa.me/916302048393?text=Hi%2C%20I%20am%20interested%20in%20Celebrity%20Wishes%20%28Birthday%2FAnniversary%29.%20Please%20provide%20more%20details.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Core <span className="text-[var(--color-gold)]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-[var(--color-dark-card)] rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-gold)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
            >
              <div className="relative w-full aspect-square sm:aspect-[4/5] bg-black/40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain object-top scale-[0.95] group-hover:scale-100 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-card)] via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="p-8 pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="mb-8 space-y-3 flex-grow">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-[var(--color-gold)] mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center w-full py-3 px-4 rounded-lg border border-[var(--color-gold)]/50 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black font-semibold transition-all group-hover:bg-[var(--color-gold)] group-hover:text-black"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-0">
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-[var(--color-gold)]/20 group">
            <Image
              src="pbanner.jpeg"
              alt="Promotional Services Banner"
              width={1200}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
