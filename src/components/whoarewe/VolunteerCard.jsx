// src/components/whoweare/VolunteersSection.jsx
import React from "react";
import { ArrowRight, Share2, Facebook, Twitter, Instagram } from "lucide-react";

const volunteers = [
  {
    name: "Joshua Sendu",
    role: "CEO-Founder",
    image: "/images/thumb-17.webp",
  },
  {
    name: "John Maxwell",
    role: "Team Leader",
    image: "/images/thumb-18.webp",
  },
  {
    name: "Bm Ashik (Moni)",
    role: "Sr. Volunteer",
    image: "/images/thumb-19.webp",
  },
  {
    name: "Denial Pasha",
    role: "Volunteer",
    image: "/images/thumb-20.webp",
  },
];

export default function VolunteersSection() {
  return (
    <section className="w-full bg-[#F8F7F0] py-24 md:py-24 px-4">
      {/* Inject updated thm-btn styles for this section */}
      <style>{`
        .vol-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 35px;
          border: 1px solid #FF9933;
          color: black;
          text-transform: capitalize;
          overflow: hidden;
          cursor: pointer;
          z-index: 1;
          transition: 0.4s ease-in-out;
          background: transparent;
        }
        .vol-btn-text {
          position: relative;
          z-index: 2;
        }
        .vol-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #FF9933;
          clip-path: circle(0% at 50% 50%);
          transition: clip-path 0.6s cubic-bezier(0.33, 1, 0.68, 1);
          z-index: 1;
        }
        .vol-btn:hover::before {
          clip-path: circle(140% at 50% 50%);
        }
        .vol-btn-icon {
          width: 38px;
          height: 38px;
          background: #FF9933;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          z-index: 2;
          transition: 0.4s ease;
        }
        .vol-btn:hover .vol-btn-icon {
          background: white;
          color: #FF9933;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Top row: title + button + mini CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
              <span className="text-sm font-semibold text-[#FF9933]">
                We Are Volunteer
              </span>
            </div>

            <h2 className="section-title__title font-heading">
              Together For <span className="text-[#FF9933]">The Planet</span>
            </h2>
          </div>

          {/* Right buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* UPDATED BUTTON */}
            <a href="/volunteer" className="vol-btn">
              <span className="vol-btn-text">View All Volunteer</span>
              <span className="vol-btn-icon">
                <ArrowRight size={16} />
              </span>
            </a>

            {/* Join us mini CTA */}
            <div className="flex items-center gap-3 sm:gap-2 px-0 sm:px-0">
              <img
                src="/images/shape-12.webp"
                alt="shape-12"
                className="hidden sm:block w-16 h-16 object-contain"
              />
              <a
                href="/be-volunteer"
                className="flex items-center gap-3 border-2 border-[#0045401A] sm:border-none rounded-full sm:rounded-none px-4 py-2 sm:px-0 sm:py-0"
              >
                <span className="text-sm font-semibold text-black max-w-[120px] leading-snug">
                  If you want can join us
                </span>
                <span className="border-2 border-[#0045401A] rounded-full p-2 hover:bg-[#FF9933] hover:border-[#FF9933] hover:text-white transition">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Volunteer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {volunteers.map((v) => (
            <div
              key={v.name}
              className="group relative bg-white p-2.5 rounded-[10px] shadow-sm"
            >
              <a href="/volunteer-details" className="block">
                {/* Image */}
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="mt-2.5 text-center rounded-[10px] bg-[#F8F7F0] px-4 py-3 transition group-hover:bg-[#138808]">
                  <h5 className="text-[20px] font-semibold leading-[32px] text-[#138808] mb-1 transition group-hover:text-white">
                    {v.name}
                  </h5>
                  <p className="text-sm text-[#4B5563] transition group-hover:text-white">
                    {v.role}
                  </p>
                </div>
              </a>

              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 rounded-full bg-[#FF9933] border-2 border-white flex items-center justify-center text-white hover:bg-[#138808] transition">
                  <Share2 size={18} />
                </button>

                <div className="flex flex-col gap-2 opacity-0 -translate-y-3 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <a
                    href="https://facebook.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-white transition"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-white transition"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-white transition"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
