export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-[var(--color-gold)]/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="file_000000005568720bb64218a33d73f0f5.png"
                alt="MN Celeb Ads"
                className="h-20 md:h-24 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-4">
              Premium celebrity advertising and promotional events across Telugu
              states. Transforming businesses into trusted brands.
            </p>
            <div className="text-gray-400 text-sm max-w-xs leading-relaxed text-center md:text-left">
              <p>
                Krishna Nagar Road, Opp Pattabhipuram Police Station, Guntur
              </p>
              <p className="mt-2 text-[var(--color-gold)] font-medium">
                Hyderabad &bull; Banglore
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="text-white font-bold tracking-widest text-sm mb-2">
              IMPORTANT LINKS
            </h4>
            <a
              href="https://wa.me/c/919985720623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-[var(--color-gold)] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </span>
              <span>Our Catalog (Select Celebrity)</span>
            </a>
            <a
              href="https://www.mydigitalsite.in/MN-CELEBRITY-ADS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-[var(--color-gold)] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h16v12H4V6zm3 3a2 2 0 110 4 2 2 0 010-4zm6 0h4v2h-4V9zm0 3h4v2h-4v-2zm-6 2c-1.333 0-4 1-4 3v1h8v-1c0-2-2.667-3-4-3z" />
                </svg>
              </span>
              <span>Our Profile Digital Card</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold tracking-widest text-sm mb-6">
              CONNECT WITH US
            </h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {/* Instagram 1 */}
              <a
                href="https://www.instagram.com/mn_celebrity_ads_2019?igsh=cXp1emc2M3Yzb3I1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title="Instagram 1"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[var(--color-gold)] group-hover:text-black transition-all transform group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
              {/* Instagram 2 */}
              <a
                href="https://instagram.com/mn__celebrity__ads_official?igshid=13vaell882w5r"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title="Instagram 2"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[var(--color-gold)] group-hover:text-black transition-all transform group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100039068920797"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title="Facebook"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#1877F2] group-hover:text-white transition-all transform group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              {/* Youtube */}
              <a
                href="https://youtube.com/channel/UCSAEQ_nqB04sE5iiRpvisnQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title="YouTube"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#FF0000] group-hover:text-white transition-all transform group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <p className="md:w-1/3 md:text-left">
            &copy; {new Date().getFullYear()} MN Celebrity Ads. All rights
            reserved.
          </p>

          <p className="md:w-1/3 flex items-center justify-center gap-1">
            Made with{" "}
            <span className="text-red-500 text-base leading-none">❤️</span> by{" "}
            <a
              href="https://www.staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-gold)] transition-colors font-medium tracking-wide"
            >
              StaffArc
            </a>
          </p>

          <div className="md:w-1/3 flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
