// WhyChooseUsSection.jsx
import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <>
      {/* LOCAL CSS */}
      <style>{`
        .why-choose-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0 160px;
        }

        @media (max-width: 991px) {
          .why-choose-section {
            padding: 100px 0 120px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-section {
            padding: 80px 0;
          }
        }

        .why-choose-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .why-choose-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          row-gap: 40px;
        }

        .why-choose-col-left,
        .why-choose-col-right {
          flex: 0 0 50%;
          max-width: 50%;
        }

        @media (max-width: 991px) {
          .why-choose-col-left,
          .why-choose-col-right {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .why-choose-col-right {
            order: -1;
            margin-bottom: 30px;
          }
        }

        /* Left content side */
        .why-choose-content {
          max-width: 540px;
        }

        .why-choose-subtitle {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 600;
          color: #FF9933;
          margin-bottom: 8px;
        }

        .why-choose-title {
          font-size: 32px;
          line-height: 1.3;
          font-weight: 700;
          color: #138808;
          margin-bottom: 16px;
        }

        @media (max-width: 767px) {
          .why-choose-title {
            font-size: 26px;
          }
        }

        .why-choose-text {
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          margin-bottom: 24px;
        }

        /* Services (two bullets) */
        .why-choose-services {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 32px;
          margin-bottom: 28px;
        }

        .why-choose-service {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #222;
          background: rgba(19,136,8,0.06);
          border-radius: 999px;
          padding: 8px 16px;
        }

        .why-choose-service-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #138808;
          color: #ffffff;
          font-size: 11px;
        }

        /* Progress bars */
        .why-choose-progress-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .why-choose-progress-item {
          width: 100%;
        }

        .why-choose-progress-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .why-choose-progress-top p {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: #138808;
        }

        .why-choose-progress-track {
          position: relative;
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: rgba(19,136,8,0.12);
          overflow: hidden;
        }

        .why-choose-progress-bar {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #FF9933, #138808);
          transition: width 0.4s ease;
        }

        /* CTA button wrapper */
        .why-choose-cta {
          display: inline-flex;
        }

        /* Scoped thm-btn only for WhyChooseUsSection */
        .why-choose-section .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          appearance: none;
          outline: none !important;
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
          border: 1px solid #FF9933;
          padding: 10px 26px;
          border-radius: 999px;
          transition: 0.5s ease-in-out;
          text-transform: capitalize;
          overflow: hidden;
          letter-spacing: 0.25px;
          gap: 10px;
          z-index: 2;
          cursor: pointer;
          background: #FF9933;
          text-decoration: none;
        }

        .why-choose-section .thm-btn .thm-btn-text {
          position: relative;
          z-index: 2;
        }

        .why-choose-section .thm-btn::before {
          content: "";
          background-color: #138808;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .why-choose-section .thm-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 300ms;
        }

        .why-choose-section .thm-btn::after {
          content: "";
          background-color: rgba(19, 136, 8, 0.25);
          position: absolute;
          inset: 0;
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
        }

        .why-choose-section .thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .why-choose-section .thm-btn .thm-btn-icon-box {
          position: relative;
          width: 28px;
          height: 28px;
          background-color: #ffffff;
          border-radius: 999px;
          font-size: 12px;
          color: #138808;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 500ms ease;
          z-index: 2;
        }

        .why-choose-section .thm-btn:hover .thm-btn-icon-box {
          background-color: #ffffff;
          color: #FF9933;
          transition-delay: 200ms;
        }

        /* Right thumb side */
        .why-choose-thumb-wrapper {
          position: relative;
          width: 100%;
          max-width: 520px;
          margin-left: auto;
        }

        @media (max-width: 991px) {
          .why-choose-thumb-wrapper {
            margin: 0 auto;
          }
        }

        .why-choose-thumb-main {
          position: relative;
          margin-bottom: 120px;
          text-align: right;
          z-index: 1;
        }

        .why-choose-thumb-main img {
          border-radius: 10px;
          width: 100%;
          max-width: 360px;
        }

        @media (max-width: 575px) {
          .why-choose-thumb-main img {
            max-width: 260px;
          }
        }

        .why-choose-thumb-secondary {
          position: absolute;
          bottom: -25%;
          right: 40%;
          width: 52%;
          z-index: 2;
        }

        @media (max-width: 1199px) {
          .why-choose-thumb-secondary {
            width: 50%;
            bottom: -30%;
            right: 35%;
          }
        }

        @media (max-width: 991px) {
          .why-choose-thumb-secondary {
            right: 30%;
            bottom: -26%;
          }
        }

        @media (max-width: 575px) {
          .why-choose-thumb-secondary {
            right: 46%;
            width: 54%;
            bottom: -28%;
          }
        }

        .why-choose-thumb-secondary-inner {
          position: relative;
        }

        .why-choose-thumb-secondary-inner img {
          width: 100%;
          border-radius: 10px;
          border: 5px solid #ffffff;
        }

        .why-choose-play-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 110px;
          height: 110px;
        }

        @media (max-width: 1199px) {
          .why-choose-play-layer {
            width: 90px;
            height: 90px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-play-layer {
            width: 80px;
            height: 80px;
          }
        }

        .why-choose-play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FF9933;
          color: #ffffff;
          border: 2px solid #FF9933;
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          backdrop-filter: blur(6px);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        @media (max-width: 1199px) {
          .why-choose-play-btn {
            width: 65px;
            height: 65px;
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-play-btn {
            width: 60px;
            height: 60px;
            font-size: 15px;
          }
        }

        .why-choose-play-btn:hover {
          background: #138808;
          border-color: #138808;
          box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.12);
        }

        /* Shape & icon decorations */
        .why-choose-shape {
          position: absolute;
          left: 0;
          bottom: -60%;
          transform: scaleX(-1);
          z-index: -1;
        }

        .why-choose-shape img {
          max-width: 420px;
        }

        @media (max-width: 991px) {
          .why-choose-shape {
            bottom: -40%;
          }
        }

        @media (max-width: 575px) {
          .why-choose-shape img {
            max-width: 260px;
          }
        }

        .why-choose-floating-icon {
          position: absolute;
          right: 46%;
          top: 28%;
          z-index: -1;
        }

        .why-choose-floating-icon img {
          max-width: 80px;
        }

        @media (max-width: 1199px) {
          .why-choose-floating-icon {
            right: 37%;
            top: 29%;
          }
        }

        @media (max-width: 991px) {
          .why-choose-floating-icon {
            right: 78%;
            top: 55%;
          }
        }

        @media (max-width: 767px) {
          .why-choose-floating-icon {
            right: 81%;
            top: 54%;
          }
        }

        @media (max-width: 575px) {
          .why-choose-floating-icon {
            right: 82%;
            top: 65%;
          }

          .why-choose-floating-icon img {
            max-width: 60px;
          }
        }
      `}</style>

      <section className="why-choose-section">
        {/* Decorative background shape */}
        <div className="why-choose-shape">
          <img src="/images/shape-40.webp" alt="shape" />
        </div>

        {/* Floating icon */}
        <div className="why-choose-floating-icon left-[45rem]">
          <img src="/images/icon-14.svg" alt="icon" />
        </div>

        <div className="why-choose-container">
          <div className="why-choose-row">
            {/* LEFT COLUMN – CONTENT */}
            <div className="why-choose-col-left">
              <div
                className="why-choose-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="section-title__tagline-box mb-3">
                  <p className="label-osc mx-auto inline-block font-caveat text-[#f27b21] text-sm tracking-wide">
                    <span>Why Choose Us</span>
                  </p>
                </div>
                <h2 className="section-title__title font-heading">
                  We take practical steps for{" "}
                  <span className="text-[#FF9933]">100% transparency.</span>
                </h2>
                <p className="why-choose-text">
                  We directly support communities in need, ensuring every
                  donation makes a tangible difference.
                </p>

                <div className="why-choose-services">
                  <div className="why-choose-service">
                    <span className="why-choose-service-icon">
                      <FaCheck />
                    </span>
                    <span>Specialized Company</span>
                  </div>
                  <div className="why-choose-service">
                    <span className="why-choose-service-icon">
                      <FaCheck />
                    </span>
                    <span>Dependable Services</span>
                  </div>
                </div>

                <div className="why-choose-progress-group">
                  <div className="why-choose-progress-item">
                    <div className="why-choose-progress-top">
                      <p>Education Support</p>
                      <p>96%</p>
                    </div>
                    <div
                      className="why-choose-progress-track"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="96"
                    >
                      <div
                        className="why-choose-progress-bar"
                        style={{ width: "96%" }}
                      />
                    </div>
                  </div>

                  <div className="why-choose-progress-item">
                    <div className="why-choose-progress-top">
                      <p>Healthcare Access</p>
                      <p>72%</p>
                    </div>
                    <div
                      className="why-choose-progress-track"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="72"
                    >
                      <div
                        className="why-choose-progress-bar"
                        style={{ width: "72%" }}
                      />
                    </div>
                  </div>

                  <div className="why-choose-progress-item">
                    <div className="why-choose-progress-top">
                      <p>Food &amp; Shelter Support</p>
                      <p>84%</p>
                    </div>
                    <div
                      className="why-choose-progress-track"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="84"
                    >
                      <div
                        className="why-choose-progress-bar"
                        style={{ width: "84%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="why-choose-cta">
                  <a href="/econest/project" className="thm-btn">
                    <span className="thm-btn-text">Discover More</span>
                    <span className="thm-btn-icon-box">
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN – THUMBS / VIDEO */}
            <div className="why-choose-col-right">
              <div
                className="why-choose-thumb-wrapper"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <div className="why-choose-thumb-main left-28">
                  <img src="/images/thumb-106.webp" alt="Helping people" />
                </div>

                <div className="why-choose-thumb-secondary">
                  <div className="why-choose-thumb-secondary-inner">
                    <img src="/images/thumb-107.webp" alt="Campaign video" />
                    <div className="why-choose-play-layer">
                      <a
                        href="https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"
                        className="why-choose-play-btn"
                        data-fancybox="video"
                      >
                        Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
