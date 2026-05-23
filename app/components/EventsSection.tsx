const events = [
  {
    location: "Warangal",
    brand: "December Delights Cafe",
    celebrity: "Actress Faria Abdulla",
    description:
      "Grand opening of the premium cafe with massive crowd gathering and media coverage.",
    image: "decemberdelights.jpeg",
  },
  {
    location: "Hyderabad",
    brand: "Sweet Tone Sweet Shop",
    celebrity: "Actress Ananya Nagalla",
    description:
      "Launch event driving heavy footfall and extensive social media buzz.",
    image: "sweettone.jpeg",
    imagePosition: "object-[center_25%]", // Slightly down from absolute top so face is visible
  },
  {
    location: "Karimnagar",
    brand: "Dolphin Hospital",
    celebrity: "Actress Mehreen Pirzada",
    description:
      "Inauguration ceremony adding immense trust and prestige to the institution.",
    image: "dolphin.jpeg",
  },
  {
    location: "Guntur",
    brand: "Marriage Event",
    celebrity: "Vishnu Priya & Anchor Ravi",
    description:
      "Successfully coordinated celebrity guests Vishnu Priya and Anchor Ravi for a grand wedding event, adding glamour and special attraction to the celebration.",
    image: "gunturevent.jpeg",
    imagePosition: "object-[center_20%]",
  },
  {
    location: "Tirupati",
    brand: "Vedic Vidyan School",
    celebrity: "Hyper Aadi Team",
    description:
      "Successfully coordinated Hyper Aadi team for the Annual Day celebrations, creating a memorable and engaging event experience for students and audience.",
    image: "tevent.jpeg",
    imagePosition: "object-top",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background flare for premium look */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Celebrity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
              Events & Openings
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-10"></div>

          {/* Key Points */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "10+ Successful Store Openings",
              "Celebrity Guests for Marriage Events",
              "Real Estate Venture Launch Events",
              "School Annual Day Celebrity Coordination (Tirupati)",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/5 border border-[var(--color-gold)]/20 p-4 rounded-xl shadow-[0_4px_10px_rgba(212,175,55,0.05)] hover:border-[var(--color-gold)]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[var(--color-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-200 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group relative bg-[#151515] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-gold)]/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
            >
              {/* Premium Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-full h-64 bg-[#1a1a1a] relative flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.brand}
                  className={`absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700 ${event.imagePosition || "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/40 to-transparent z-10"></div>

                {/* Overlay Location Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center bg-black/60 backdrop-blur-md border border-[var(--color-gold)]/30 text-[var(--color-gold)] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  <svg
                    className="w-3 h-3 mr-1.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {event.location}
                </div>
              </div>

              <div className="p-8 relative z-20 -mt-8">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[var(--color-gold)] to-yellow-500 text-black rounded-lg font-bold text-xs uppercase tracking-wider shadow-[0_4px_10px_rgba(212,175,55,0.3)] mb-4">
                  {event.celebrity}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  {event.brand}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
