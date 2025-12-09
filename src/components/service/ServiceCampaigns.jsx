import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const campaigns = [
  {
    id: 1,
    category: "Animal",
    image: "/images/thumb-4.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Protecting Endangered Species and Their Habitats",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 89,
    raised: "$13,650",
    goal: "$16,560",
    wishlist: 259,
  },
  {
    id: 2,
    category: "Plantation",
    image: "/images/thumb-3.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Reforestation and Tree Planting Campaign 2025",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 64,
    raised: "$6,650",
    goal: "$10,560",
    wishlist: 259,
  },
  {
    id: 3,
    category: "Animal",
    image: "/images/thumb-2.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Sustainable Energy for All: Why Your Donation Matters",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
    wishlist: 259,
  },
  {
    id: 4,
    category: "Plantation",
    image: "/images/thumb-3.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Reforestation and Tree Planting Campaign 2025",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 64,
    raised: "$6,650",
    goal: "$10,560",
    wishlist: 259,
  },
  {
    id: 5,
    category: "Plantation",
    image: "/images/thumb-3.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Reforestation and Tree Planting Campaign 2025",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 64,
    raised: "$6,650",
    goal: "$10,560",
    wishlist: 259,
  },
];

const ServiceCampaigns = () => {
  const [activeIndex, setActiveIndex] = useState(0); // which campaign is "center / active"

  return (
    <>
      {/* 🔥 Local button style (only for this section) */}
      <style>{`
        .campaign-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 9px 24px;
          border-radius: 999px;
          border: 1px solid #FF9933;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.25px;
          text-transform: capitalize;
          cursor: pointer;
          background: transparent;
          color: #ffffff !important;
          overflow: hidden;
          z-index: 2;
          transition: 0.5s ease-in-out;
        }

        .campaign-btn-text {
          position: relative;
          z-index: 2;
          color: black !important;
        }

        .campaign-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #FF9933;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .campaign-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 250ms;
        }

        .campaign-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255,153,51,0.3);
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 0;
        }

        .campaign-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .campaign-btn-icon {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FF9933;
          color: #ffffff;
          font-size: 12px;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .campaign-btn:hover .campaign-btn-icon {
          background: #ffffff;
          color: #FF9933;
        }
      `}</style>

      <section
        className="relative overflow-x-clip py-24 sm:py-20"
        style={{
          backgroundImage: "url('/images/our-camping-bg.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#f8f7f0",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section heading */}
          <div className="mb-12 sm:mb-10 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <img
                src="/images/icon-2.svg"
                alt="icon-2"
                className="h-7 w-7 object-contain"
              />

              <p className="label-osc mx-auto inline-block font-caveat text-[#FF9933] text-sm tracking-wide">
                <span>Our Camping</span>
              </p>
            </div>

            <h2 className="section-title__title  font-heading   ">
              Your Gift For a{" "}
              <span className="text-[#FF9933]">Greener Tomorrow</span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative camping-slider-wrapper flex flex-col items-center">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop
              centeredSlides
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="camping-slider-active w-full"
            >
              {campaigns.map((campaign, idx) => (
                <SwiperSlide key={campaign.id}>
                  <CampaignCard
                    campaign={campaign}
                    isActive={idx === activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Styles: hero-style pagination pill + bullets + active card */}
      <style>{`
        /* PAGINATION PILL UNDER SLIDER */
        .camping-slider-active .swiper-pagination {
          position: static;
          margin-top: 2.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          gap: 0.75rem;
        }

        .camping-slider-active .swiper-pagination-bullet {
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: transparent;
          border: 1px solid transparent;
          opacity: 1;
          margin: 0;
          padding: 0;
          transition: all 0.3s ease;
        }

        .camping-slider-active .swiper-pagination-bullet::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 7px;
          height: 7px;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background:
            radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0,0,0,0.23) 0%, rgba(0,0,0,0) 86.18%),
            radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255,255,255,0.413) 0%, rgba(255,255,255,0) 69.79%),
            #FFFFFF;
        }

        .camping-slider-active .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 0.60);
          border-color: #F8F7F0;
        }

        .camping-slider-active .swiper-pagination-bullet-active::before {
          background:
            radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0,0,0,0.23) 0%, rgba(0,0,0,0) 86.18%),
            radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255,255,255,0.413) 0%, rgba(255,255,255,0) 69.79%),
            #004540;
        }
      `}</style>
    </>
  );
};

const CampaignCard = ({ campaign, isActive }) => {
  const donationBg = isActive ? "bg-[#004540]" : "bg-[#f8f7f0]";
  const titleColor = isActive ? "text-[#FFFBEB]" : "text-[#004540]";
  const percentColor = isActive ? "text-[#FFFBEB]" : "text-[#004540]";
  const labelColor = isActive ? "text-[#FFFBEB]" : "text-[#868681]";
  const amountColor = isActive ? "text-[#FFDB57]" : "text-[#004540]";
  const progressColor = isActive ? "bg-[#FFCC40]" : "bg-[#004540]";
  const wishlistBorder = isActive
    ? "border-[rgba(255,251,235,0.4)] text-[#FFFBEB]"
    : "border-[rgba(0,24,25,0.1)] text-[#004540]";

  return (
    <div className="camping-card group bg-white rounded-[10px] shadow-[0_4px_56.5px_rgba(0,0,0,0.06)] p-2 transition-transform duration-300 hover:-translate-y-1">
      {/* Thumb */}
      <div className="relative overflow-hidden rounded-[10px]">
        <a
          href={campaign.href}
          className="block rounded-[10px] overflow-hidden"
        >
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full rounded-[10px] transform transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <div className="absolute top-5 left-5">
          <a
            href={campaign.href}
            className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/5 text-white text-sm shadow-[inset_0_4px_11px_rgba(255,255,255,0.4),inset_-1px_-4px_23.1px_rgba(0,24,25,0.28)] backdrop-blur"
          >
            {campaign.category}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="content-top px-5 py-5">
          {/* Date pill */}
          <div className="inline-flex items-center gap-2 bg-[#f8f7f0] border-2 border-white shadow-[0_6px_30px_rgba(0,69,64,0.09)] rounded-[10px] px-3 py-1.5 text-[#868681] text-sm font-medium mb-3">
            <img
              src="/images/calendar.svg"
              alt="calendar-icon"
              className="w-4 h-4"
            />
            <span>{campaign.daysLeft}</span>
          </div>

          {/* Title */}
          <div className="title">
            <h3 className="text-[23px] leading-9 font-semibold text-[#004540] mb-1 md:text-[20px] md:leading-snug">
              <a href={campaign.href} className="text-[#004540]">
                {campaign.title}
              </a>
            </h3>
          </div>

          {/* Text */}
          <div className="text">
            <p className="text-[17px] leading-7 text-[#444]">
              {campaign.description}
            </p>
          </div>
        </div>

        {/* Donation block */}
        <div
          className={`${donationBg} donation-wrap rounded-md px-5 pt-4 pb-6 transition-colors duration-300`}
        >
          {/* Top row */}
          <div className="d-top flex items-center justify-between gap-3 mb-3">
            <p
              className={`text-[18px] leading-7 font-medium mb-0 ${titleColor}`}
            >
              Donation Complete
            </p>
            <p
              className={`text-[18px] leading-7 font-medium mb-0 ${percentColor}`}
            >
              {campaign.progress}%
            </p>
          </div>

          {/* Progress bar */}
          <div
            className="progress w-full h-2 rounded-full bg-[#0045401a] overflow-hidden mb-3"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={campaign.progress}
          >
            <div
              className={`progress-bar h-full rounded-full transition-all duration-500 ${progressColor}`}
              style={{ width: `${campaign.progress}%` }}
            />
          </div>

          {/* Fund info */}
          <div className="fund flex items-center justify-between gap-5 mt-2 mb-6">
            <p className={`text-[15px] leading-none mb-0 ${labelColor}`}>
              Raised:{" "}
              <span className={`font-semibold ${amountColor}`}>
                {campaign.raised}
              </span>
            </p>
            <p className={`text-[15px] leading-none mb-0 ${labelColor}`}>
              Goal:{" "}
              <span className={`font-semibold ${amountColor}`}>
                {campaign.goal}
              </span>
            </p>
          </div>

          {/* Bottom buttons */}
          <div className="d-bottom flex items-center justify-between gap-4">
            {/* ✅ Updated Donate Now button using local thm-btn style */}
            <a href={campaign.href} className="campaign-btn">
              <span className="campaign-btn-text">Donate Now</span>
              <span className="campaign-btn-icon">→</span>
            </a>

            <button
              type="button"
              className={`d-wishlist inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] border bg-transparent text-sm font-semibold transition ${wishlistBorder}`}
            >
              <span className="text-[13px]">♡</span>
              <span>{campaign.wishlist}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCampaigns;
