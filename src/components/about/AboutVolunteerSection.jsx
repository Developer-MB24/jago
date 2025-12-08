// AboutVolunteerSection.jsx
import React, { useEffect, useRef } from "react";
import { FaChartLine, FaLightbulb, FaThumbsUp, FaUsers } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <section className="about-us-section-2 pt-[100px] sm:pt-20 md:pt-[90px] pb-24 md:pb-28 lg:pb-[300px] bg-[#f5f7f6]">
      {/* === Scoped .thm-btn styles only for AboutVolunteerSection === */}
      <style>{`
        .about-us-section-2 .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 17px;
          color: black;
          border: 1px solid #FF9933;
          padding: 8px 30px;
          border-radius: 30px;
          transition: 0.5s ease-in-out;
          text-transform: capitalize;
          overflow: hidden;
          letter-spacing: 0.25px;
          gap: 14px;
          z-index: 2;
          cursor: pointer;
          background: transparent;
        }

        .about-us-section-2 .thm-btn .thm-btn-text {
          position: relative;
          z-index: 2;
          color: black;
        }

        .about-us-section-2 .thm-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .about-us-section-2 .thm-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 300ms;
        }

        .about-us-section-2 .thm-btn::after {
          content: "";
          background-color: rgba(255, 153, 51, 0.3);
          position: absolute;
          inset: 0;
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
        }

        .about-us-section-2 .thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .about-us-section-2 .thm-btn .thm-btn-icon-box {
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

        .about-us-section-2 .thm-btn:hover .thm-btn-icon-box {
          background-color: white;
          color: #FF9933;
          transition-delay: 200ms;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Top content */}
        <div className="section-top-5 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left */}
          <div className="md:w-1/2 space-y-4">
            <div
              className="common-title text-left mt-14"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h2 className="section-title__title font-heading">
                We have worked for you since 1989.{" "}
                <span className="text-[#FF9933]">Recycle the world.</span>
              </h2>
            </div>
          </div>

          {/* Right */}
          <div
            className="md:w-1/2 space-y-4 text-left md:mt-14 md:text-right"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h6 className="font-caveat text-slate-500">
              Welcome to Econest, A leading Recycling Innovator With a Rich
              History of Excellence.
            </h6>
            <p className="font-caveat text-slate-500">
              The implant fixture is first placed, likely then a dental
              prosthetic is added.
            </p>
          </div>
        </div>

        {/* Button */}
        <a className="thm-btn mt-6 md:mt-8 inline-flex" href="#">
          <span className="thm-btn-text">Explore More</span>
          <span className="thm-btn-icon-box">
            <FaArrowRightLong />
          </span>
        </a>

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
              relative mt-6 md:mt-8
              lg:absolute lg:left-1/2 lg:-translate-x-1/2
              lg:bottom-[-150px]
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
                  py-10 lg:py-8 md:py-8
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

                <h2 className="mb-2 font-semibold text-[30px] md:text-[32px] leading-[1] text-[#053b33]">
                  {value}
                  {suffix}
                </h2>

                <p className="text-[13px] leading-[18px] text-slate-600">
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
