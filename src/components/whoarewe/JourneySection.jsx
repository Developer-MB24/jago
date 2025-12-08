// src/components/whoweare/JourneySection.jsx
import React, { useState } from "react";

const tabs = [
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
];

const description =
  "Despite applying for three times and even hiring a lawyer to assist with the process, Morgan was unable to get authorization to fly to the USA for the premiere of her film about a factory-farmed pig.";

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = tabs[activeIndex].year;

  return (
    <section
      className="relative py-20 md:py-24 px-4"
      style={{
        backgroundImage:
          "url(/images/why-us-bg.webp), url(/images/about-us-bg.webp)",
        backgroundPosition: "bottom right, bottom left 1%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      {/* Inject local thm-btn styles so it doesn't conflict anywhere */}
      <style>{`
        .journey-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 17px;
          color: black;
          border: 1px solid #FF9933;
          padding: 10px 30px;
          border-radius: 30px;
          transition: 0.5s ease-in-out;
          text-transform: capitalize;
          overflow: hidden;
          letter-spacing: 0.25px;
          gap: 12px;
          cursor: pointer;
          background: transparent;
        }
        .journey-btn .text { 
          position: relative; 
          z-index: 2; 
        }
        .journey-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all 0.6s cubic-bezier(0, 0.96, 0.58, 1.1);
          z-index: 1;
        }
        .journey-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
        }
        .journey-btn-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FF9933;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          z-index: 2;
          transition: 0.3s ease;
        }
        .journey-btn:hover .journey-btn-icon {
          background: white;
          color: #FF9933;
        }
      `}</style>

      <div className="mx-auto max-w-5xl flex justify-end mb-8">
        <div className="w-full lg:w-[70%] xl:w-[60%] bg-white/90 rounded-2xl shadow-sm px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-3">
            <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
            <span className="font-semibold text-[#FF9933]">Our History</span>
          </div>

          {/* Title */}
          <h2 className="section-title__title font-heading">
            Journey Was <span className="text-[#FF9933]">Started</span>
          </h2>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              {tabs.map((tab, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={tab.year}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold border transition-all"
                    style={
                      active
                        ? {
                            backgroundColor: "#F8F7F0",
                            color: "black",
                            borderColor: "#138808",
                            boxShadow: "0 6px 16px -3px rgba(0, 69, 64, 0.11)",
                          }
                        : {
                            backgroundColor: "#FFFFFF",
                            color: "#4B5563",
                            borderColor: "transparent",
                          }
                    }
                  >
                    {tab.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content */}
          <div>
            <div className="mb-2">
              <h6 className="text-[18px] leading-[30px] font-medium text-black">
                Year {activeYear}
              </h6>
            </div>

            <div className="mb-3">
              <h5 className="text-[22px] md:text-[24px] font-caveat leading-[32px] md:leading-[36px] font-semibold">
                Got First Reward From (NYC)
              </h5>
            </div>

            <p className="text-[#4B5563] font-caveat mb-7 leading-relaxed">
              {description}
            </p>

            {/* ===== CTA BUTTON ADDED HERE ===== */}
            <a href="/project" className="journey-btn">
              <span className="text">Explore More</span>
              <span className="journey-btn-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
