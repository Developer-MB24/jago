import React, { useEffect, useState } from "react";
import { FaUser, FaHandHoldingUsd, FaUsers, FaDonate } from "react-icons/fa";

const Statsstrip = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [220, 95, 150, 32]; // same as data-stop
    const duration = 1500; // ms
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const newValues = targets.map((t) => Math.floor(t * progress));
      setCounts(newValues);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <style>{`
        /* ================== Counter One (original design) ================== */
        .counter-one {
          position: relative;
          display: block;
          padding: 120px 0 90px;
     
          z-index: 1;
        }

        .counter-one__bg-color {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: -1;
        }

        .counter-one__bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .counter-one__inner {
          position: relative;
          display: block;
        }

        .counter-one__count-list {
          position: relative;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .counter-one__count-list li {
          position: relative;
          text-align: center;
          flex: 0 0 25%;
          max-width: 25%;
          width: 100%;
        }

        .counter-one__single {
          position: relative;
          display: block;
          text-align: center;
          margin-bottom: 22px;
        }

        .counter-one__single-shape {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 3px;
          height: 100px;
          background-color: rgba(var(--helpest-black-rgb), .15);
          transform: translateY(-53%);
        }

        .counter-one__icon-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 80px;
          margin: 0 auto;
          padding: 5px 5px 5px;
          background-color: rgba(var(--helpest-base-rgb), .40);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .counter-one ul li:nth-child(2) .counter-one__icon-inner {
          background-color: rgba(var(--helpest-primary-rgb), .40);
        }

        .counter-one ul li:nth-child(3) .counter-one__icon-inner {
          background-color: rgba(var(--helpest-secondary-rgb), .40);
        }

        .counter-one ul li:nth-child(4) .counter-one__icon-inner {
          background-color: rgba(119, 38, 235, .40);
        }

        .counter-one__icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 70px;
          background-color: var(--helpest-base);
          margin: 0 auto;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          z-index: 1;
        }

        .counter-one__icon:before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          background-color: var(--helpest-white);
          transform: scale(0);
          transform-origin: center;
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.62, 0.21, 0.45, 1.52);
          z-index: -1;
        }

        .counter-one__single:hover .counter-one__icon:before {
          transform: scaleX(1);
        }

        .counter-one__count-list li:nth-child(2) .counter-one__icon {
          background-color: var(--helpest-primary);
        }

        .counter-one__count-list li:nth-child(3) .counter-one__icon {
          background-color: var(--helpest-secondary);
        }

        .counter-one__count-list li:nth-child(4) .counter-one__icon {
          background-color: #7726eb;
        }

        .counter-one__icon span {
          position: relative;
          display: inline-block;
          font-size: 40px;
          color: var(--helpest-white);
          transition: all 500ms linear;
          transition-delay: 0.1s;
        }

        .counter-one__single:hover .counter-one__icon span {
          color: var(--helpest-base);
          -webkit-animation-name: wobble-horizontal-hover;
          animation-name: wobble-horizontal-hover;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
          -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
        }

        .counter-one__count-list li:nth-child(2) .counter-one__single:hover .counter-one__icon span {
          color: var(--helpest-primary);
        }

        .counter-one__count-list li:nth-child(3) .counter-one__single:hover .counter-one__icon span {
          color: var(--helpest-secondary);
        }

        .counter-one__count-list li:nth-child(4) .counter-one__single:hover .counter-one__icon span {
          color: #7726eb;
        }

        .counter-one__content {
          position: relative;
          display: block;
        }

        .counter-one__count {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: 0.54px;
          text-transform: uppercase;
          margin: 25px 0 5px;
        }

        .counter-one__count span {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: 0.54px;
          text-transform: uppercase;
        }

        .counter-one__text {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
        }

        /* ========== WOW-like fade animations ========== */
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .wow {
          opacity: 0;
        }

        .wow.fadeInLeft {
          animation-name: fadeInLeft;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        .wow.fadeInRight {
          animation-name: fadeInRight;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        /* ========== Wobble hover animation ========== */
        @keyframes wobble-horizontal-hover {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-6px); }
          30% { transform: translateX(5px); }
          45% { transform: translateX(-4px); }
          60% { transform: translateX(3px); }
          75% { transform: translateX(-2px); }
        }

        /* ========== Responsive tweaks ========== */
        @media (max-width: 1023px) {
          .counter-one {
            padding: 80px 0 60px;
          }

          .counter-one__count-list li {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 24px;
          }

          .counter-one__single-shape {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .counter-one__count-list li {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>

      <section className="counter-one">
        {/* BG image overlay */}
        <div className="counter-one__bg-color">
          <div
            className="counter-one__bg"
            style={{
              backgroundImage: "url(/images/counter-one-bg.jpg)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="counter-one__inner">
            <ul className="counter-one__count-list list-unstyled">
              {/* 1 */}
              <li
                className="wow fadeInLeft"
                style={{ animationDelay: "100ms" }}
              >
                <div className="counter-one__single">
                  <div className="counter-one__single-shape" />
                  <div className="counter-one__icon-inner">
                    <div className="counter-one__icon">
                      {/* React Icon wrapped in span so original CSS applies */}
                      <span>
                        <FaUser />
                      </span>
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count">
                      <span>{counts[0]}</span>K
                    </h3>
                    <p className="counter-one__text">Poor Educate</p>
                  </div>
                </div>
              </li>

              {/* 2 */}
              <li
                className="wow fadeInLeft"
                style={{ animationDelay: "200ms" }}
              >
                <div className="counter-one__single">
                  <div className="counter-one__single-shape" />
                  <div className="counter-one__icon-inner">
                    <div className="counter-one__icon">
                      <span>
                        <FaHandHoldingUsd />
                      </span>
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count">
                      <span>{counts[1]}</span>m+
                    </h3>
                    <p className="counter-one__text">Fund Raised</p>
                  </div>
                </div>
              </li>

              {/* 3 */}
              <li
                className="wow fadeInRight"
                style={{ animationDelay: "300ms" }}
              >
                <div className="counter-one__single">
                  <div className="counter-one__single-shape" />
                  <div className="counter-one__icon-inner">
                    <div className="counter-one__icon">
                      <span>
                        <FaUsers />
                      </span>
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count">
                      <span>{counts[2]}</span>K
                    </h3>
                    <p className="counter-one__text">Team Member</p>
                  </div>
                </div>
              </li>

              {/* 4 */}
              <li
                className="wow fadeInRight"
                style={{ animationDelay: "400ms" }}
              >
                <div className="counter-one__single">
                  <div className="counter-one__icon-inner">
                    <div className="counter-one__icon">
                      <span>
                        <FaDonate />
                      </span>
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count">
                      <span>{counts[3]}</span>M+
                    </h3>
                    <p className="counter-one__text">Donate now</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statsstrip;
