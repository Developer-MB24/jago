// DonationCausesSection.jsx
import React, { useRef } from "react";
import { FaClock, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const campaigns = [
  {
    id: 1,
    title: "Help Children Rise out Life of Poverty",
    image: "/images/thumb-99.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
  {
    id: 2,
    title: "Gift an Education… Make A Life Better!",
    image: "/images/thumb-100.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
  {
    id: 3,
    title: "Lifeskills for Children in South Africa",
    image: "/images/thumb-101.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
  {
    id: 4,
    title: "Gift an Education… Make A Life Better!",
    image: "/images/thumb-100.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
  {
    id: 5,
    title: "Help Children Rise out Life of Poverty",
    image: "/images/thumb-99.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
  {
    id: 6,
    title: "Lifeskills for Children in South Africa",
    image: "/images/thumb-101.webp",
    daysLeft: 42,
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
  },
];

const DonationCausesSection = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* LOCAL CSS */}
      <style>{`
        .donation-causes-section {
          position: relative;
          padding: 100px 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          overflow: hidden;
        }

        .donation-causes-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          z-index: 0;
        }

        .donation-causes-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .donation-causes-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .donation-causes-subtitle {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          color: #FF9933;
          margin-bottom: 8px;
        }

        .donation-causes-title {
          font-size: 32px;
          line-height: 1.3;
          font-weight: 700;
          color: #ffffff;
        }

        /* Slider wrapper */
        .donation-causes-slider-wrapper {
          position: relative;
        }

        .donation-causes-slider {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding-bottom: 5px;
        }

        .donation-causes-slider::-webkit-scrollbar {
          height: 6px;
        }

        .donation-causes-slider::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }

        .donation-causes-slider::-webkit-scrollbar-thumb {
          background: #FF9933;
          border-radius: 10px;
        }

        .donation-cause-card {
          flex: 0 0 360px;
          background-color: #f8f7f0;
          border-radius: 10px;
          padding: 10px;
          scroll-snap-align: start;
          transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
        }

        .donation-cause-card:hover {
          background-color: #ffffff;
          box-shadow: 0 25px 40px rgba(0,0,0,0.15);
          transform: translateY(-4px);
        }

        .donation-cause-thumb {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }

        .donation-cause-thumb img {
          width: 100%;
          display: block;
          border-radius: 10px;
          transition: transform 0.4s ease;
        }

        .donation-cause-card:hover .donation-cause-thumb img {
          transform: scale(1.08);
        }

        .donation-cause-date {
          position: absolute;
          top: 16px;
          left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,0.45);
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(6px);
        }

        .donation-cause-date svg {
          font-size: 14px;
        }

        .donation-cause-content {
          padding: 18px 16px 10px;
        }

        .donation-cause-title {
          font-size: 20px;
          line-height: 1.5;
          font-weight: 600;
          color: #138808;
          margin-bottom: 12px;
        }

        .donation-cause-title a {
          color: inherit;
          text-decoration: none;
        }

        .donation-cause-title a:hover {
          color: #FF9933;
        }

        .donation-cause-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 14px;
          color: #555555;
        }

        .donation-cause-top-row p {
          margin: 0;
          font-weight: 500;
        }

        .donation-cause-top-row p:last-child {
          color: #138808;
        }

        .donation-progress {
          position: relative;
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: rgba(19,136,8,0.15);
          overflow: hidden;
          margin-bottom: 12px;
        }

        .donation-progress-bar {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #FF9933, #138808);
          transition: width 0.4s ease;
        }

        .donation-cause-fund-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          font-size: 14px;
          color: #777777;
        }

        .donation-cause-fund-row p {
          margin: 0;
        }

        .donation-cause-fund-row span {
          font-weight: 600;
          color: #138808;
        }

        .donation-cause-bottom {
          display: flex;
          justify-content: flex-start;
        }

        .donation-cause-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          background: #FF9933;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
        }

        .donation-cause-btn:hover {
          background: #138808;
          transform: translateY(-1px);
        }

        .donation-cause-btn .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: #ffffff;
          color: #138808;
          font-size: 12px;
        }

        /* Slider arrows */
        .donation-causes-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          color: #555555;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
          z-index: 2;
        }

        .donation-causes-arrow:hover {
          background: #FF9933;
          color: #ffffff;
          transform: translateY(-50%) scale(1.05);
        }

        .donation-causes-arrow--prev {
          left: -10px;
        }

        .donation-causes-arrow--next {
          right: -10px;
        }

        /* Decorative shapes */
        .donation-causes-shape {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          opacity: 0.7;
        }

        .donation-causes-shape img {
          max-width: 260px;
        }

        .donation-causes-icon-1 {
          position: absolute;
          right: 6%;
          top: 18%;
          z-index: 0;
        }

        .donation-causes-icon-1 img {
          max-width: 80px;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .donation-cause-card {
            flex-basis: 320px;
          }
        }

        @media (max-width: 991px) {
          .donation-causes-arrow--prev {
            left: 0;
            bottom: 0;
            top: auto;
            transform: translateY(0);
          }
          .donation-causes-arrow--next {
            right: 0;
            bottom: 0;
            top: auto;
            transform: translateY(0);
          }
          .donation-causes-slider-wrapper {
            padding-bottom: 70px;
          }
        }

        @media (max-width: 767px) {
          .donation-causes-section {
            padding: 80px 0;
          }
          .donation-causes-title {
            font-size: 26px;
          }
          .donation-cause-card {
            flex-basis: 85%;
          }
        }

        @media (max-width: 575px) {
          .donation-causes-inner {
            padding: 0 10px;
          }
          .donation-cause-card {
            flex-basis: 100%;
          }
        }
      `}</style>

      <section
        className="donation-causes-section"
        style={{
          backgroundImage: "url('/images/our-camping-bg-2.webp')",
        }}
      >
        {/* Decorative shapes */}
        <div className="donation-causes-shape">
          <img src="/images/shape-41.webp" alt="shape" />
        </div>
        <div className="donation-causes-icon-1">
          <img src="/images/icon-15.svg" alt="icon-15" />
        </div>

        <div className="donation-causes-inner">
          <div className="donation-causes-header">
            <div className="donation-causes-subtitle">
              Start donating poor people
            </div>
            <h2 className="donation-causes-title">Introduce Our Campaigns</h2>
          </div>

          <div className="donation-causes-slider-wrapper">
            <button
              type="button"
              className="donation-causes-arrow donation-causes-arrow--prev"
              onClick={() => handleScroll("left")}
            >
              <FaArrowLeft />
            </button>

            <div className="donation-causes-slider" ref={sliderRef}>
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="donation-cause-card">
                  <div className="donation-cause-thumb">
                    <a href="/econest/donations">
                      <img src={campaign.image} alt={campaign.title} />
                    </a>
                    <div className="donation-cause-date">
                      <FaClock />
                      <span>{campaign.daysLeft} Days Left</span>
                    </div>
                  </div>

                  <div className="donation-cause-content">
                    <div className="donation-cause-title">
                      <a href="/econest/donations">{campaign.title}</a>
                    </div>

                    <div className="donation-cause-top-row">
                      <p>Donation Complete</p>
                      <p>{campaign.progress}%</p>
                    </div>

                    <div className="donation-progress">
                      <div
                        className="donation-progress-bar"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>

                    <div className="donation-cause-fund-row">
                      <p>
                        Raised: <span>{campaign.raised}</span>
                      </p>
                      <p>
                        Goal: <span>{campaign.goal}</span>
                      </p>
                    </div>

                    <div className="donation-cause-bottom">
                      <a
                        href="/econest/donations"
                        className="donation-cause-btn"
                      >
                        Donate Now
                        <span className="icon-wrap">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="donation-causes-arrow donation-causes-arrow--next"
              onClick={() => handleScroll("right")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationCausesSection;
