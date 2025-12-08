// src/components/whoweare/EconestUpcomingEvents.jsx
import React from "react";

const events = [
  {
    id: 1,
    image: "/images/thumb-36.webp",
    dateRange: "12 Jan–20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "8:30am - 4:00pm",
    location: "Jones Street, New York",
    joined: 236,
  },
  {
    id: 2,
    image: "/images/thumb-37.webp",
    dateRange: "12 Jan–20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "9:00am - 6:00pm",
    location: "85 Great Portland Street, London",
    joined: 162,
  },
];

export default function EconestUpcomingEvents() {
  return (
    <section className="our-events-section-2 relative bg-[#F8F7F0] pt-24 pb-24 md:pt-20 md:pb-20 mb-24">
      {/* ===================== thm-btn STYLES ===================== */}
      <style>{`
        .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 17px;
          color: black !important;
          border: 1px solid #FF9933;
          padding: 8px 30px;
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
        .thm-btn .thm-btn-text {
          position: relative;
          z-index: 2;
          color:black;
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
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
        }
        .thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }
        .thm-btn .thm-btn-icon-box {
          width: 40px;
          height: 40px;
          background-color: #FF9933;
          border-radius: 50%;
          font-size: 14px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 500ms ease;
          z-index: 2;
        }
        .thm-btn:hover .thm-btn-icon-box {
          background-color: white;
          color: #FF9933;
          transition-delay: 200ms;
        }
      `}</style>
      {/* ========================================================== */}

      <div className="mx-auto max-w-6xl px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
              <span className="text-sm font-semibold text-[#FF9933]">
                Our Arrange
              </span>
            </div>

            <h2 className="section-title__title  font-heading">
              Econest <span className="text-[#FF9933]">Upcoming Events</span>
            </h2>
          </div>

          {/* ==== UPDATED TOP BUTTON (View All Events) ==== */}
          <div className="md:w-1/3 flex md:justify-end">
            <a href="/camping" className="thm-btn inline-flex">
              <span className="thm-btn-text">View All Events</span>
              <span className="thm-btn-icon-box">→</span>
            </a>
          </div>
        </div>

        {/* Event cards */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card-2 flex flex-col md:flex-row bg-white rounded-[10px] p-2 md:p-2 relative z-[2]"
            >
              {/* Thumb */}
              <div className="relative md:w-[48%] w-full flex-none z-[1] group">
                <a className="block rounded-[10px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="md:w-[52%] w-full md:pt-10 md:pb-4 md:px-10 px-5 py-6">
                <div className="inline-flex mb-5 px-5 py-3 bg-[#F8F7F0] border border-[#FF9933] rounded-full shadow-[0_6px_16px_-3px_rgba(0,69,64,0.11)]">
                  <h5 className="m-0 text-[14px] md:text-[16px] font-semibold text-black whitespace-nowrap">
                    {event.dateRange}
                  </h5>
                </div>

                <h2 className="font-caveat leading-snug font-medium text-black mb-3">
                  <a href="/camping-details">{event.title}</a>
                </h2>

                <div className="address flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-5">
                  <div className="time flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-clock text-[#134A43]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="location flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-location-dot text-[#134A43]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* === UPDATED Join Event BUTTON === */}
                <div className="join-event flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
                  <div>
                    <a href="/camping-details" className="thm-btn inline-flex">
                      <span className="thm-btn-text">Join Event</span>
                      <span className="thm-btn-icon-box">→</span>
                    </a>
                  </div>

                  {/* Joined people */}
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/author-1.webp"
                      className="max-w-[90px] w-full"
                    />
                    <div className="text-left">
                      <h5 className="text-[18px] font-semibold text-[#134A43] leading-tight mb-0">
                        {event.joined}
                      </h5>
                      <span className="text-sm text-[#4B5563]">
                        Joined People
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
