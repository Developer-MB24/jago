// AboutHero.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStar } from "react-icons/fa";
import { FaXTwitter, FaArrowRightLong } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-no-repeat bg-left hero-section-4"
      style={{ backgroundImage: "url('/images/hero-bg-4.webp')" }}
    >
      {/* === thm-btn styles === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Scoped only to .hero-section-4 */
      .hero-section-4 .thm-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        appearance: none;
        outline: none !important;
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

      .hero-section-4 .thm-btn .thm-btn-text {
        position: relative;
        display: block;
        z-index: 2;
        color:black;
      }

      .hero-section-4 .thm-btn::before {
        content: "";
        background-color: #FF9933;
        position: absolute;
        inset: 0;
        clip-path: circle(0% at 50% 50%);
        transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
        z-index: 1;
      }

      .hero-section-4 .thm-btn:hover::before {
        clip-path: circle(100% at 50% 50%);
        transition-delay: 300ms;
      }

      .hero-section-4 .thm-btn::after {
        content: "";
        background-color: rgba(255, 153, 51, 0.3);
        position: absolute;
        inset: 0;
        z-index: 0;
        clip-path: circle(0% at 50% 50%);
        transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
      }

      .hero-section-4 .thm-btn:hover::after {
        clip-path: circle(100% at 50% 50%);
      }

      .hero-section-4 .thm-btn .thm-btn-icon-box {
        position: relative;
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

      .hero-section-4 .thm-btn:hover .thm-btn-icon-box {
        background-color: white;
        color: #FF9933;
        transition-delay: 200ms;
      }
    `,
        }}
      />

      <div
        className="
          hidden lg:flex flex-col gap-3
          absolute left-6 top-1/2 -translate-y-1/2
          z-20
        "
      >
        {[
          <FaFacebookF key="fb" />,
          <FaXTwitter key="x" />,
          <FaInstagram key="ig" />,
          <FaLinkedinIn key="in" />,
        ].map((Icon, idx) => (
          <button
            key={idx}
            type="button"
            className="
              w-7 h-7 
              flex items-center justify-center 
              rounded-full 
              bg-white/80 
              text-[#138808]
              text-[10px]
              shadow-sm
              hover:bg-[#138808] hover:text-white
              transition
            "
          >
            {Icon}
          </button>
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="max-w-6xl mx-auto px-4 lg:px-12 py-20 lg:py-24 flex flex-col lg:flex-row items-stretch">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="max-w-xl">
            <div
              className="
                inline-flex w-auto items-center gap-3 
                rounded-full 
                bg-[rgba(0,69,64,0.06)] 
                px-5 py-2 
                backdrop-blur-sm 
                mb-6
              "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src="/images/icon-2.svg"
                alt="Eco icon"
                className="w-7 h-7"
              />
              <span className="text-[#138808] text-sm font-medium">
                Eco-friendly designs
              </span>
            </div>

            {/* Title */}

            <h2 className="section-title__title  font-heading   ">
              From Waste to Wonder:
              <span className="text-[#FF9933]">The Power of Recycling</span>
            </h2>

            {/* Paragraph */}
            <p
              className="mt-6 text-gray-600 font-caveat text-[16px] sm:text-[18px] leading-[1.6]"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              As the world faces increasing environmental challenges, the need
              for sustainable and eco-friendly solutions.
            </p>

            <div
              className="
                mt-10 
                flex flex-col sm:flex-row 
                items-start sm:items-center 
                gap-6
              "
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              {/* thm-btn */}
              <a href="/econest/about" className="thm-btn">
                <span className="thm-btn-text text-black">Discover More</span>
                <span className="thm-btn-icon-box">
                  <FaArrowRightLong />
                </span>
              </a>

              {/* rating block */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm text-[#138808] font-semibold">
                    <span className="text-[#138808]">★</span> Trustpilot
                  </span>
                  <div className="flex text-[#FFC400] text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="mt-1 text-gray-600 text-sm">
                  Excellent 4.9 out of 5
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-8">
          <div className="h-[360px] sm:h-[420px] lg:h-[480px] xl:h-[520px]">
            <img
              src="/images/thumb-85.webp"
              alt="Recycling volunteer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
