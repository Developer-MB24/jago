// src/components/home/UpcomingEvent.jsx
import React from "react";

const events = [
  {
    id: 1,
    day: "20",
    dateText: "March\nin 2025",
    title: "Tree Plantation Challenge",
    location: "Jones Street, New York",
    time: "8:30am - 4:00pm",
    joined: 236,
    category: "Tree Plantation",
    thumb: "images/thumb-8.webp",
  },
  {
    id: 2,
    day: "28",
    dateText: "February\nin 2025",
    title: "Forest Cleaning Challenge",
    location: "Los Angeles",
    time: "10:30am - 4:00pm",
    joined: 49,
    category: "Forest",
    thumb: "images/thumb-9.webp",
  },
];

export default function UpcomingEvent() {
  return (
    <section className="our-events-section pt-24 pb-24 md:pt-20 md:pb-20">
      {/* LOCAL thm-btn CSS (safe & isolated) */}
      <style>{`
        .event-thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          color: #fff !important;
          border: 1px solid #FF9933;
          padding: 10px 28px;
          border-radius: 30px;
          transition: 0.5s ease-in-out;
          text-transform: capitalize;
          overflow: hidden;
          letter-spacing: 0.3px;
          gap: 14px;
          background: transparent;
          cursor: pointer;
          z-index: 2;
        }

        .event-thm-btn-text {
          position: relative;
          z-index: 2;
          color: black !important;
        }

        .event-thm-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0,0.96,0.58,1.1) 0.8s;
          z-index: 1;
        }

        .event-thm-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 300ms;
        }

        .event-thm-btn::after {
          content: "";
          background-color: rgba(255,153,51,0.35);
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          z-index: 0;
          transition: all cubic-bezier(0,0.96,0.58,1.1) 0.9s;
        }

        .event-thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .event-thm-btn-icon-box {
          width: 38px;
          height: 38px;
          background-color: #FF9933;
          border-radius: 50%;
          font-size: 14px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 500ms ease;
        }

        .event-thm-btn:hover .event-thm-btn-icon-box {
          background-color: #fff;
          color: #FF9933;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-12 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
            <span className="text-sm font-semibold text-[#FF9933]">
              Upcoming Event
            </span>
          </div>
          <h2 className="section-title__title font-heading">
            Our Events, Let&apos;s{" "}
            <span className="text-[#FF9933]">All Participate</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card relative bg-[#F8F7F0] rounded-[18px] p-5 md:p-6 overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.03)] group"
            >
              <div className="card-content pb-5 border-b border-black/10">
                {/* Date + people */}
                <div className="event-card-top flex items-center justify-between gap-4">
                  <div className="top-left flex items-start gap-4 md:gap-5">
                    <img
                      src="images/calendar-2.svg"
                      alt="calendar"
                      className="w-10 h-10"
                    />
                    <h3 className="text-[#134A43] font-medium text-[32px] leading-none">
                      {event.day}
                      <span className="block text-[16px] text-[#4B5563] whitespace-pre-line">
                        {event.dateText}
                      </span>
                    </h3>
                  </div>

                  <div className="top-right flex items-center gap-3">
                    <img src="images/author-1.webp" className="max-w-[90px]" />
                    <div>
                      <h5 className="text-[18px] font-semibold text-[#134A43] leading-tight mb-0">
                        {event.joined}
                      </h5>
                      <span className="text-sm text-[#4B5563]">
                        Joined People
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-left text-[1.6rem] md:text-[2rem] mt-5 mb-3 text-[#134A43] font-medium">
                  <a href="/camping-details">{event.title}</a>
                </h2>

                {/* Location + time */}
                <div className="address flex flex-col sm:flex-row gap-3 mb-5">
                  <div className="flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-location-dot text-[#134A43]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-clock text-[#134A43]" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* UPDATED BUTTON */}
                <div className="event-btn text-left">
                  <a href="/camping-details" className="event-thm-btn">
                    <span className="event-thm-btn-text">Join Event</span>
                    <span className="event-thm-btn-icon-box">→</span>
                  </a>
                </div>
              </div>

              {/* Bottom thumb */}
              <div className="thumb relative mt-4 rounded-[16px] overflow-hidden">
                <img
                  src={event.thumb}
                  className="w-full h-full object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category */}
                <div className="absolute bottom-4 right-4">
                  <a className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white hover:text-[#134A43] transition">
                    {event.category}
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
