import Image from "next/image";

export default function HighestSellingSection() {
  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-gold)]/5 blur-[120px] mix-blend-screen z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse"></span>
            <span className="text-sm font-medium tracking-widest text-[var(--color-gold)] uppercase">
              Trending Now
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Highest Selling Promotions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
              – Heroine Madhavi Latha
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Discover our most successful and highly requested celebrity
            promotion campaigns.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[var(--color-gold)]/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="order-2 md:order-1 flex flex-col gap-6">
                <div>
                  <h3 className="text-4xl font-heading font-bold text-white mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                    Heroine Madhavi Latha
                  </h3>
                  <p className="text-[var(--color-gold)] font-medium tracking-wide uppercase text-sm">
                    Actress • Politician • Sanathanani • Public Speaker •
                    Devotional
                  </p>
                </div>

                <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                  <p>
                    <strong className="text-white">
                      Heroine Madhavi Latha
                    </strong>{" "}
                    is our lucky charm for business promotions.
                  </p>
                  <p>
                    She has delivered highest revenue-generating campaigns for
                    many business owners and is one of our most trusted and
                    demanded celebrities.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919618880475?text=Hi%2C%20I%20am%20interested%20in%20the%20Highest%20Selling%20Promotion%20featuring%20Heroine%20Madhavi%20Latha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 text-black bg-gradient-to-r from-[var(--color-gold)] to-yellow-400 hover:from-[var(--color-gold-hover)] hover:to-[var(--color-gold)] transition-all px-8 py-4 rounded-full font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:-translate-y-1 transform"
                  >
                    <span>Book Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="madhavi_latha.jpeg"
                  alt="Heroine Madhavi Latha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
