// AboutVolunteerSection.jsx
import React, { useEffect, useRef } from "react";
import { FaChartLine, FaLightbulb, FaThumbsUp, FaUsers } from "react-icons/fa";

const stats = [
  { Icon: FaChartLine, value: "98", suffix: "%", label: "Company Success" },
  { Icon: FaLightbulb, value: "565", suffix: "+", label: "Company Strategies" },
  { Icon: FaThumbsUp, value: "36", suffix: "k", label: "Complete Projects" },
  { Icon: FaUsers, value: "100", suffix: "+", label: "Experienced Members" },
];

const AboutVolunteerSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-us-section-2 pt-[100px] xs:pt-20 pb-[300px] md:pb-[200px] xs:pb-20 bg-[#f5f7f6]">
      <div className="container mx-auto px-4">
        {/* Top content */}
        <div className="section-top-5 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left */}
          <div className="md:w-1/2 space-y-4">
            <div
              className="common-subtitle flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img alt="icon-1" src="/images/icon-2.svg" />
              <span className="text-sm font-medium text-emerald-700">
                About Us
              </span>
            </div>

            <div
              className="common-title text-left"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-[#053b33]">
                We have worked for you since 1989. recycle the world
              </h2>
            </div>
          </div>

          {/* Right */}
          <div
            className="md:w-1/2 space-y-4 text-left md:text-right"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h6 className="text-sm md:text-base font-semibold text-[#053b33]">
              Welcome to Econest, A leading Recycling Innovator With a Rich
              History of Excellence.
            </h6>
            <p className="text-xs md:text-sm text-slate-500 max-w-md md:ml-auto">
              The implant fixture is first placed, so that it ilikely to then
              dental prosthetic is added then dental prosthetic.
            </p>
          </div>
        </div>
        <button className="inline-flex -top-96 items-center gap-3 bg-[#f3c839] hover:bg-[#e3b82c] text-[#053b33] text-sm font-semibold px-7 py-3 rounded-full transition-colors">
          Explore More
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#053b33] text-white">
            →
          </span>
        </button>

        {/* Image + Achievements */}
        <div className="thumb relative mt-8 md:mt-10 rounded-xl">
          <img
            alt="thumb"
            src="/images/thumb-86.webp"
            className="w-full rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
          />

          <div
            className="
              company-achievements-2
              w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              gap-5 items-center
              absolute left-1/2 -translate-x-1/2
              bottom-[-140px]
              lg:bottom-[-150px]
              md:bottom-[-180px]
              xs:static xs:translate-x-0 xs:mt-6
            "
          >
            {stats.map(({ Icon, value, suffix, label }, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="
                  opacity-0 translate-y-10
                  transition-all duration-700 ease-out
                  achievement
                  bg-white/10 border border-white/10 shadow-[0_4px_41.8px_rgba(0,69,64,0.06)]
                  backdrop-blur-[50.25px]
                  rounded-2xl text-center
                  py-10 lg:py-8 md:py-8 xs:py-8
                "
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div
                  className="
                    flex items-center justify-center mx-auto mb-5
                    text-[26px] bg-[#f7f0d7]
                    w-[64px] h-[64px]
                    rounded-full
                  "
                >
                  <Icon className="text-[#f3c839]" />
                </div>

                <h2
                  className="
                    mb-2 font-semibold
                    text-[30px] md:text-[32px]
                    leading-[1]
                    text-[#053b33]
                  "
                >
                  {value}
                  {suffix}
                </h2>
                <p
                  className="
                    text-[13px] leading-[18px] text-slate-600
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVolunteerSection;
