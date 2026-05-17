export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="file_000000005568720bb64218a33d73f0f5.png"
                alt="MN Celeb Ads"
                className="h-10 w-auto md:h-12 scale-[1.4] md:scale-[1.6] origin-left"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-[var(--color-gold)] transition-colors"
            >
              Services
            </a>
            <a
              href="#celebrities"
              className="text-sm font-medium text-gray-300 hover:text-[var(--color-gold)] transition-colors"
            >
              Our Celebrities
            </a>
            <a
              href="#events"
              className="text-sm font-medium text-gray-300 hover:text-[var(--color-gold)] transition-colors"
            >
              Events
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+919618880475"
              className="hidden md:flex items-center text-sm font-semibold text-white whitespace-nowrap bg-white/10 hover:bg-white/20 border border-white/10 transition-all px-5 py-2.5 rounded-full mr-4"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919618880475?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Celebrity%20Promotions."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] transition-all px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            >
              Get Celebrity
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
