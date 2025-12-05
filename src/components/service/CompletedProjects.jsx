import React, { useState } from "react";

const HelpSection = () => {
  const [activeTab, setActiveTab] = useState("educationhelp");

  return (
    <>
      <style>{`
        /*-------------------------------------------
          Float bob (bg shape)
        -------------------------------------------*/
        @keyframes float-bob-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .float-bob-y {
          animation: float-bob-y 6s ease-in-out infinite;
        }

        /*-------------------------------------------
          Services Three
        -------------------------------------------*/
        .services-three {
          position: relative;
          display: block;
          padding: 120px 0 120px;
          z-index: 1;
          font-family: var(--helpest-font, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
          background-color: #FFF9F2;
        }

        .services-three__bg-shape-img {
          position: absolute;
          top: 50px;
          right: 50px;
          opacity: .10;
          z-index: -1;
        }

        .services-three__bg-shape-img img {
          width: auto;
        }

        .services-three__inner {
          position: relative;
          display: block;
        }

        .services-three__tab-box {
          position: relative;
          display: block;
        }

        .services-three__tab-box .tab-buttons {
          position: relative;
          display: block;
        }

        .services-three__tab-box .tab-buttons .tab-btn {
          position: relative;
          display: block;
          cursor: pointer;
        }

        .services-three__tab-box .tab-buttons .tab-btn + .tab-btn {
          margin-top: 20px;
        }

        .services-three__tab-box .tab-buttons .tab-btn span {
          position: relative;
          display: inline-block;
          text-align: center;
          font-size: 20px;
          font-weight: 800;
          font-family: var(--helpest-font-two, "Nunito", system-ui, sans-serif);
          border-radius: 24px;
          width: 100%;
          color: #020617;
          background-color: #FFF7EA;
          padding: 26px 20px 26px;
          cursor: pointer;
          transition: all 200ms linear;
          transition-delay: 0.1s;
          overflow: hidden;
          z-index: 1;
        }

        .services-three__tab-box .tab-buttons .tab-btn.active-btn span {
          color: #FFFFFF;
        }

        .services-three__tab-box .tab-buttons .tab-btn span::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          background-color: #3B82F6; /* primary blue */
          background-position: top bottom;
          transition-delay: .1s;
          transition-timing-function: ease-in-out;
          transition-duration: .5s;
          transition-property: all;
          transform-origin: top;
          transform-style: preserve-3d;
          transform: scaleY(0);
          z-index: -1;
        }

        /* 2nd tab orange, 3rd tab green */
        .services-three__tab-box .tab-buttons .tab-btn:nth-child(2) span::before {
          background-color: #FF9933;
        }
        .services-three__tab-box .tab-buttons .tab-btn:nth-child(3) span::before {
          background-color: #138808 !important;
        }

        .services-three__tab-box .tab-buttons .tab-btn.active-btn span::before {
          transform: scaleY(1.0);
        }

        .services-three__tab-box .tabs-content {
          position: relative;
          display: block;
        }

        .services-three__tab-box .tabs-content .tab {
          position: relative;
          display: none;
          transform: translateX(35px);
          transition: all 600ms ease;
          z-index: 10;
        }

        .services-three__tab-box .tabs-content .tab.active-tab {
          display: block;
          margin-top: 0px;
          transform: translateX(0px);
        }

        .services-three__tab-box .tabs-content__inner {
          position: relative;
          display: block;
        }

        .services-three__single {
          position: relative;
          display: flex;
          align-items: center;
          gap: 30px;
          border-radius: 24px;
          padding: 32px 30px 32px;
          background-color: #FFF7EA;
        }

        .services-three__img {
          position: relative;
          display: block;
          max-width: 360px;
          -webkit-mask: url("") no-repeat center center;
          mask: url("") no-repeat center center;
          -webkit-mask-size: cover;
          mask-size: cover;
        }

        .services-three__img img {
          width: 100%;
          border-radius: 24px;
          display: block;
        }

        .services-three__content {
          position: relative;
          display: block;
          flex: 1;
        }

        .services-three__title {
          font-size: 26px;
          line-height: 34px;
          font-weight: 800;
          font-family: var(--helpest-font-two, "Nunito", system-ui, sans-serif);
          margin: 0 0 24px;
          color: #020617;
        }

        .services-three__points-box {
          position: relative;
          display: block;
        }

        .services-three__points-box li {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .services-three__points-box li + li {
          margin-top: 20px;
        }

        .services-three__points-box li .icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 50px;
          background-color: #3B82F6; /* primary blue */
          border-radius: 20px;
          transform: rotate(45deg);
        }

        .services-three__points-box li:nth-child(2) .icon {
          background-color: #FF9933; /* orange */
        }

        .services-three__points-box li:nth-child(3) .icon {
          background-color: #138808; /* green if used */
        }

        .services-three__points-box li .icon::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border: 1px dashed #FFFFFF;
          border-radius: 10px;
        }

        .services-three__points-box li .icon span {
          position: relative;
          display: inline-block;
          font-size: 18px;
          color: #FFFFFF;
          transform: rotate(-45deg);
        }

        .services-three__points-box li .content {
          position: relative;
          display: block;
          flex: 1;
        }

        .services-three__points-box li .content h4 {
          font-size: 16px;
          font-weight: 800;
          line-height: 20px;
          margin: 0 0 5px;
          font-family: var(--helpest-font-two, "Nunito", system-ui, sans-serif);
          color: #020617;
        }

        .services-three__points-box li .content p {
          font-weight: 500;
          font-size: 14px;
          color: #4b5563;
        }

        /* Small screens */
        @media (max-width: 1024px) {
          .services-three {
            padding: 80px 0 90px;
          }

          .services-three__single {
            flex-direction: column;
            padding: 26px 22px 26px;
          }

          .services-three__img {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .services-three__tab-box .tab-buttons .tab-btn span {
            font-size: 18px;
            padding: 20px 16px;
          }
          .services-three__title {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="services-three">
        {/* Floating background shape */}
        <div className="services-three__bg-shape-img float-bob-y">
          <img src="/images/services-three-bg-shape-img.png" alt="shape" />
        </div>

        <div className="container mx-auto max-w-6xl px-4">
          {/* Section title */}
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full bg-[#FFF0DD] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF9933]">
              We take care them
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl leading-snug text-slate-900"
              style={{
                fontFamily: "var(--helpest-font-two, Nunito, system-ui)",
                fontWeight: 800,
              }}
            >
              <span className="block">We Always Help The</span>
              <span className="block text-[#FF9933]">Needy People</span>
            </h2>
          </div>

          {/* Tabs + content */}
          <div className="services-three__inner">
            <div className="services-three__tab-box">
              <div className="lg:flex lg:gap-10">
                {/* Left Tabs */}
                <div className="mb-8 lg:mb-0 lg:w-1/3">
                  <ul className="tab-buttons clearfix list-unstyled">
                    <li
                      className={`tab-btn ${
                        activeTab === "educationhelp" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("educationhelp")}
                    >
                      <span>Education Help</span>
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "treatmenthelp" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("treatmenthelp")}
                    >
                      <span>Treatment Help</span>
                    </li>
                    <li
                      className={`tab-btn ${
                        activeTab === "healthyfood" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("healthyfood")}
                    >
                      <span>Healthy Food</span>
                    </li>
                  </ul>
                </div>

                {/* Right Tab Content */}
                <div className="lg:w-2/3">
                  <div className="tabs-content">
                    {/* Education Help */}
                    <div
                      className={`tab ${
                        activeTab === "educationhelp" ? "active-tab" : ""
                      }`}
                      id="educationhelp"
                    >
                      <div className="tabs-content__inner">
                        <div className="services-three__single">
                          <div className="services-three__img">
                            <img
                              src="/images/services-three-img-1.jpg"
                              alt="Education Help"
                            />
                          </div>
                          <div className="services-three__content">
                            <h3 className="services-three__title">
                              How You Can Help Us?
                            </h3>
                            <ul className="services-three__points-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>Child Deserves Better Healthy Foods</h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>
                                    Childhood Education Development support
                                  </h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Treatment Help */}
                    <div
                      className={`tab ${
                        activeTab === "treatmenthelp" ? "active-tab" : ""
                      }`}
                      id="treatmenthelp"
                    >
                      <div className="tabs-content__inner">
                        <div className="services-three__single">
                          <div className="services-three__img">
                            <img
                              src="/images/services-three-img-2.jpg"
                              alt="Treatment Help"
                            />
                          </div>
                          <div className="services-three__content">
                            <h3 className="services-three__title">
                              How You Can Help Us?
                            </h3>
                            <ul className="services-three__points-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>Child Deserves Better Healthy Foods</h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>
                                    Childhood Education Development support
                                  </h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Healthy Food */}
                    <div
                      className={`tab ${
                        activeTab === "healthyfood" ? "active-tab" : ""
                      }`}
                      id="healthyfood"
                    >
                      <div className="tabs-content__inner">
                        <div className="services-three__single">
                          <div className="services-three__img">
                            <img
                              src="/images/services-three-img-3.jpg"
                              alt="Healthy Food"
                            />
                          </div>
                          <div className="services-three__content">
                            <h3 className="services-three__title">
                              How You Can Help Us?
                            </h3>
                            <ul className="services-three__points-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>Child Deserves Better Healthy Foods</h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span>✔</span>
                                </div>
                                <div className="content">
                                  <h4>
                                    Childhood Education Development support
                                  </h4>
                                  <p>
                                    Category that involves giving financial or
                                    material support.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End tabs */}
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

export default HelpSection;
