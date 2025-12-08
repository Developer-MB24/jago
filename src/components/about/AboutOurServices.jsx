import React from "react";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
  FaDonate,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Education Fund",
    text: "Poor address a range of simply application and infrastructure",
    icon: <FaGraduationCap />,
    aos: "fade-right",
    delay: "0",
  },
  {
    id: 2,
    title: "Inspire Help",
    text: "Poor address a range of simply application and infrastructure",
    icon: <FaHandsHelping />,
    aos: "fade-right",
    delay: "100",
  },
  {
    id: 3,
    title: "Helthcare",
    text: "Poor address a range of simply application and infrastructure",
    icon: <FaHeartbeat />,
    aos: "fade-left",
    delay: "200",
  },
  {
    id: 4,
    title: "Fund Raised",
    text: "Poor address a range of simply application and infrastructure",
    icon: <FaDonate />,
    aos: "fade-left",
    delay: "300",
  },
];

const AboutOurServices = () => {
  return (
    <>
      <style>
        {`
/* ======================= SERVICES ONE ======================= */

.services-one {
  position: relative;
  display: block;
  padding: 120px 0 0;
  z-index: 1;
}

.services-one__shape-1 {
  position: absolute;
  top: 40px;
  right: 40px;
  opacity: 0.10;
  z-index: -1;
}
.services-one__shape-1 img {
  width: auto;
  animation: treeMove 4s linear infinite;
}

/* MAIN CARD WRAPPER */
.services-one__single {
  position: relative;
  display: block;
  text-align: center;
  margin-bottom: 30px;
  background-color: var(--helpest-extra);
  padding: 40px 30px 31px;
  border-radius: var(--helpest-bdr-radius);
}

/* HEXAGON WRAPPER */
.services-one__icon-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
  margin: 0 auto;
  padding: 5px;
  background-color: rgba(var(--helpest-base-rgb), .40);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* DIFFERENT COLORS PER CHILD */
.services-one ul li:nth-child(2) .services-one__icon-inner {
  background-color: rgba(var(--helpest-primary-rgb), .40);
}
.services-one ul li:nth-child(3) .services-one__icon-inner {
  background-color: rgba(var(--helpest-secondary-rgb), .40);
}
.services-one ul li:nth-child(4) .services-one__icon-inner {
  background-color: rgba(255, 60, 207, .40);
}

/* INNER HEX SHAPE */
.services-one__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 70px;
  margin: 0 auto;
  background-color: var(--helpest-base);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Hover: inner turns white */
.services-one__single:hover .services-one__icon {
  background-color: var(--helpest-white);
  transition-delay: 500ms;
}

/* React icon styling */
.services-one__icon-react {
  font-size: 40px;
  color: var(--helpest-white);
  transition: all 500ms linear;
}

.services-one__single:hover .services-one__icon-react {
  color: var(--helpest-base);
  animation: wobble-horizontal-hover 1s ease-in-out;
}

/* Variant icon hover colors */
.services-one ul li:nth-child(2) .services-one__single:hover .services-one__icon-react {
  color: var(--helpest-primary);
}
.services-one ul li:nth-child(3) .services-one__single:hover .services-one__icon-react {
  color: var(--helpest-secondary);
}
.services-one ul li:nth-child(4) .services-one__single:hover .services-one__icon-react {
  color: #e13ccf;
}

/* Title */
.services-one__title {
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  margin: 20px 0 10px;
}

.services-one__title a {
  color: var(--helpest-black);
}
.services-one__title a:hover {
  color: var(--helpest-base);
}

/* Read more */
.services-one__read-more a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-weight: 600;
  color: var(--helpest-gray);
}
.services-one__read-more a:hover {
  color: var(--helpest-base);
}

.services-one__read-more-icon {
  color: var(--helpest-base);
  font-size: 14px;
}

/* Wiggle animation */
@keyframes wobble-horizontal-hover {
  16.65% { transform: translateX(5px); }
  33.3% { transform: translateX(-3px); }
  49.95% { transform: translateX(4px); }
  66.6% { transform: translateX(-2px); }
  83.25% { transform: translateX(1px); }
  100% { transform: translateX(0); }
}

/* Floating animation */
@keyframes treeMove {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
        `}
      </style>

      <section className="services-one">
        {/* Floating decorative shape */}
        <div className="services-one__shape-1">
          <img src="/images/services-one-shape-1.png" alt="" />
        </div>

        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="section-title text-center mb-12">
            <div className="section-title__tagline-box mb-3">
              <p className="label-osc mx-auto inline-block font-caveat text-[#FF9933] text-sm tracking-wide">
                <span>OUR SERVICE</span>
              </p>
            </div>
            <h2 className="section-title__title  font-heading   ">
              We Service Now help{" "}
              <span className="text-[#FF9933]">Poor people Lives</span>
            </h2>
          </div>

          {/* SERVICE ITEMS */}
          <ul className="list-unstyled grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <li
                key={item.id}
                className="aos-init aos-animate"
                data-aos={item.aos}
                data-aos-duration="1000"
                data-aos-delay={item.delay}
              >
                <div className="services-one__single">
                  <div className="services-one__icon-inner">
                    <div className="services-one__icon">
                      <span className="services-one__icon-react">
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  <h3 className="services-one__title">
                    <a href="#">{item.title}</a>
                  </h3>

                  <p className="services-one__text">{item.text}</p>

                  <div className="services-one__read-more">
                    <a href="#">
                      Read More{" "}
                      <FaArrowRight className="services-one__read-more-icon" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutOurServices;
