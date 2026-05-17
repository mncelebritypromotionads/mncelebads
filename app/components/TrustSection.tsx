import Image from "next/image";

const brands = [
  "images.png",
  "images (1).png",
  "images (4).jpeg",
  "images (5).jpeg",
  "unnamed.png",
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#0B0B0B] border-y border-[var(--color-gold)]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwxNzUsNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Trusted by{" "}
          <span className="text-[var(--color-gold)]">Leading Brands</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-16">
          We have delivered successful celebrity promotions for top brands and
          growing businesses across Telugu states.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 opacity-90 p-4">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-xl bg-white shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] overflow-hidden p-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand}
                  alt={`Trusted Brand ${idx + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 max-w-5xl mx-auto px-4 sm:px-0 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-10 leading-relaxed max-w-4xl mx-auto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-gold)] to-yellow-200 drop-shadow-sm">
              &ldquo;మీ బిజినెస్ కి కూడా సెలబ్రిటీ బ్రాండ్ అంబాసిడర్
              ఉండొచ్చు!&rdquo;
            </span>
          </h3>
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-[var(--color-gold)]/20 group">
            <Image
              src="https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776161419/1776157243660_ccqgqv.png"
              alt="Celebrity Brand Ambassador"
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
