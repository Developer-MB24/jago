// src/components/service/ServiceWhatWeDo.jsx
import React from "react";

const services = [
  {
    id: 1,
    number: "No – 01",
    image: "/images/thumb-14.webp",
    title: "Waste Management",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
  {
    id: 2,
    number: "No – 02",
    image: "/images/thumb-15.webp",
    title: "Cleaning Ocean",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
  {
    id: 3,
    number: "No – 03",
    image: "/images/thumb-16.webp",
    title: "Plastic Recycling",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
];

export default function ServiceWhatWeDo() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-20 px-4"
      style={{
        backgroundImage: "url(/images/what-we-do-bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Local thm-btn CSS (isolated — affects only this component) */}
      <style>{`
        .what-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 9px 26px;
          border-radius: 30px;
          border: 1px solid #FF9933;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.3px;
          text-transform: capitalize;
          cursor: pointer;
          color: #fff !important;
          overflow: hidden;
          background: transparent;
          z-index: 2;
          transition: 0.5s ease-in-out;
        }

        .what-btn-text {
          position: relative;
          z-index: 2;
          color: #fff !important;
        }

        .what-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0,0.96,0.58,1.1) 0.8s;
          z-index: 1;
        }

        .what-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 250ms;
        }

        .what-btn::after {
          content: "";
          background-color: rgba(255,153,51,0.3);
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          z-index: 0;
          transition: all cubic-bezier(0,0.96,0.58,1.1) 0.8s;
        }

        .what-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .what-btn-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FF9933;
          color: #fff;
          font-size: 12px;
          z-index: 2;
          transition: 0.4s ease;
        }

        .what-btn:hover .what-btn-icon {
          background: #fff;
          color: #FF9933;
        }
      `}</style>

      {/* SHAPES */}
      <div className="pointer-events-none absolute top-0 right-0 z-10">
        <img src="/images/shapes/shape-10.webp" alt="shape-10" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10">
        <img src="/images/shapes/shape-11.webp" alt="shape-11" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/icon-1.svg" alt="icon-1" className="w-7 h-7" />
              <span className="text-sm font-semibold text-white">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
              We Offer Different Services <br /> For Helped You
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-white leading-7 mb-3">
              “Advanced cameras combined with a large display fast performance,
              and highly calibrated.”
            </p>

            <a className="text-[#FFCC40] hover:text-[#FFE28A] font-semibold inline-flex gap-2">
              View All Service →
            </a>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative rounded-[18px] overflow-hidden bg-[#00332f] shadow-[0_18px_60px_rgba(0,0,0,0.45)] group"
            >
              {/* IMAGE */}
              <a href={service.href}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </a>

              {/* NUMBER */}
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1.5 rounded-full text-xs bg-white/20 text-white border border-white/30 backdrop-blur">
                  {service.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="absolute left-0 right-0 bottom-0 px-4 pb-5">
                <div
                  className="rounded-[18px] p-5 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
                  style={{
                    background:
                      "linear-gradient(110deg,rgba(0,51,47,0.95),rgba(0,51,47,0.65))",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <h5 className="text-white text-[22px] font-semibold mb-2">
                    {service.title}
                  </h5>

                  <p className="text-white/85 text-[15px] mb-4">
                    {service.description}
                  </p>

                  {/* ⭐ UPDATED thm-btn (only appears on hover) */}
                  <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a href={service.href} className="what-btn">
                      <span className="what-btn-text">Read More</span>
                      <span className="what-btn-icon">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
