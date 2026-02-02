// app/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/home/hero_bg.png')`, // ← put your image here
            // or use external URL:
            // backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?...')`,
          }}
        />

        {/* Dark overlay to make text readable */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" /> */}

        {/* Optional: very subtle noise texture (remove if you don't want it) */}
        {/* <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1350px] w-[11/12] mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[64px] font-bold tracking-tight mb-6 text-white font-ubuntu">
          Scale Your Business With{" "}
          <i>
            <span className="text-[#ff4d00]">
              Intelligent, Secure,
              <br />
              AI-Driven
            </span>{" "}
            Solutions.
          </i>
        </h1>

        <p className="text-lg md:text-xl font-normal text-gray-300 max-w-[1350px] mx-auto mb-10 leading-relaxed font-ubuntu">
          Beyond AI delivers end-to-end AI, Cloud, Cybersecurity, and Endpoint
          technologies designed to accelerate growth, strengthen security, and
          automate complex workflows. Deploy enterprise-grade solutions faster,
          scale without limits, and unlock real measurable impact across your
          organization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#demo"
            className="
    group
    inline-flex items-center gap-3 
    px-8 py-3 
    bg-[#ff4d00] hover:bg-[#ff6600] 
    text-white font-medium 
    rounded-full          /* or rounded-4xl if you prefer very rounded */
    transition-colors duration-300 
    text-lg 
    shadow-lg shadow-orange-900/40 
    overflow-hidden
    relative
  "
          >
            {/* Text - stays in place */}
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-10px]">
              Get In Touch
            </span>

            {/* Icon wrapper - moves left on hover */}
            <div
              className="
      relative 
      flex items-center justify-center 
      h-7 w-7 rounded-full 
      bg-black/90 
      transition-all duration-400 
      group-hover:translate-x-[20px]   /* moves left and slightly out */
      group-hover:scale-90
    "
            >
              {/* Original arrow icon - fades out */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 23 23"
                fill="none"
                className="transition-opacity duration-300 group-hover:opacity-0"
              >
                <path
                  d="M7.48767 14.0255L14.9274 8.38967"
                  stroke="#F3F6F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.38965 7.4877L14.9274 8.38966L14.0254 14.9274"
                  stroke="#F3F6F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* New arrow icon - comes from right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="
        absolute 
        opacity-0 translate-x-8 
        transition-all duration-400 
        group-hover:opacity-100 
        group-hover:translate-x-0
      "
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#F3F6F9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <Link
            href="#products"
            className="inline-flex items-center px-8 py-3 border border-[#E34400] hover:border-gray-400 text-gray-200 hover:text-white font-medium rounded-4xl transition-colors duration-300 text-lg"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
