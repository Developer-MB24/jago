// src/components/whoweare/MajorPartnersSection.jsx
import React from "react";

const partnerLogos = [
  "/images/logo-2.webp",
  "/images/logo-3.webp",
  "/images/logo-4.webp",
  "/images/logo-5.webp",
  "/images/logo-6.webp",
  "/images/logo-7.webp",
];

export default function MajorPartnersSection() {
  return (
    <section className="pt-20 pb-32 md:pt-20 md:pb-24 bg-white">
      {/* ===================== thm-btn STYLES ADDED HERE ===================== */}
      <style>{`
        .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          font-weight: 700;
          font-size: 17px;
          color: black !important;
          border: 1px solid #FF9933;
          padding: 10px 32px;
          border-radius: 30px;
          transition: 0.5s ease-in-out;
          text-transform: capitalize;
          overflow: hidden;
          letter-spacing: 0.25px;
          gap: 14px;
          cursor: pointer;
          background: transparent;
          z-index: 2;
        }

        .thm-btn-text {
          position: relative;
          z-index: 2;
          color: black !important;
        }

        .thm-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .thm-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 300ms;
        }

        .thm-btn::after {
          content: "";
          background-color: rgba(255, 153, 51, 0.3);
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 0;
        }

        .thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .thm-btn-icon-box {
          position: relative;
          width: 40px;
          height: 40px;
          background-color: #FF9933;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: white;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .thm-btn:hover .thm-btn-icon-box {
          background: white;
          color: #FF9933;
        }
      `}</style>
      {/* ====================================================================== */}

      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="hidden sm:block w-20 md:w-28">
            <img
              src="/images/shape-4.webp"
              alt="shape-left"
              className="w-full h-auto"
            />
          </div>

          <p className="label-osc mx-auto md:text-3xl inline-block font-caveat text-[#FF9933] text-sm tracking-wide">
            <span>Major Partners</span>
          </p>
          <div className="hidden sm:block w-20 md:w-28">
            <img
              src="/images/shape-4.webp"
              alt="shape-right"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Logos marquee */}
        <div className="border-y border-[rgba(0,69,64,0.08)] py-10 my-4 overflow-hidden">
          <div className="relative partner-marquee flex items-center">
            {/* Track 1 */}
            <div className="partner-marquee-track flex items-center gap-10 md:gap-14">
              {partnerLogos.map((src, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="flex items-center bg-black justify-center min-w-[130px]"
                >
                  <img
                    src={src}
                    alt="partner-logo"
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 */}
            <div className="partner-marquee-track flex items-center gap-10 md:gap-14">
              {partnerLogos.map((src, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="flex items-center bg-black justify-center min-w-[130px]"
                >
                  <img
                    src={src}
                    alt="partner-logo"
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== UPDATED BUTTON (thm-btn) ========== */}
        <div className="text-center mt-8">
          <a href="/contact" className="thm-btn inline-flex">
            <span className="thm-btn-text">Become a Partner</span>
            <span className="thm-btn-icon-box">→</span>
          </a>
        </div>
        {/* =============================================== */}
      </div>

      {/* marquee animation */}
      <style>{`
        .partner-marquee {
          width: max-content;
        }
        .partner-marquee-track {
          animation: partner-marquee 22s linear infinite;
        }
        .partner-marquee-track:nth-child(2) {
          animation-delay: -11s;
        }
        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
