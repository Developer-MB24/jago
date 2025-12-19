import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaSeedling,
  FaGlobeAsia,
  FaBriefcase,
  FaBalanceScale,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    key: "education",
    label: "Education",
    desc: "Teach, mentor, and support students in learning.",
    route: "/register/education",
    icon: FaGraduationCap,
  },
  {
    key: "health",
    label: "Health",
    desc: "Assist in health camps and awareness programs.",
    route: "/register/health",
    icon: FaHeartbeat,
  },
  {
    key: "agriculture",
    label: "Agriculture",
    desc: "Support farmers and sustainable agriculture efforts.",
    route: "/register/agriculture",
    icon: FaSeedling,
  },
  {
    key: "geographical",
    label: "Geographical Issues",
    desc: "Help communities impacted by climate and disasters.",
    route: "/register/geographical",
    icon: FaGlobeAsia,
  },
  {
    key: "employment",
    label: "Employment",
    desc: "Guide youth with skills and job readiness.",
    route: "/register/employment",
    icon: FaBriefcase,
  },
  {
    key: "social",
    label: "Social & Political Awareness",
    desc: "Spread awareness of rights, duties, and democracy.",
    route: "/register/social-political",
    icon: FaBalanceScale,
  },
  {
    key: "misc",
    label: "Miscellaneous",
    desc: "Contribute in other flexible volunteer roles.",
    route: "/register/miscellaneous",
    icon: FaHandsHelping,
  },
];

export default function SelectVolunteerService() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#F9FBFF] overflow-hidden">
      <img
        src="/images/register4.png"
        alt=""
        className="absolute top-10 left-10 w-60 opacity-90"
      />
      <img
        src="/images/register5.png"
        alt=""
        className="absolute top-72 left-3 w-72 opacity-90"
      />
      <img
        src="/images/register3.png"
        alt=""
        className="absolute top-10 right-10 w-60 opacity-90"
      />
      <img
        src="/images/register6.jpeg"
        alt=""
        className="absolute right-12 bottom-[25rem] w-60 opacity-90 "
      />
      <img
        src="/images/register1.jpg"
        alt=""
        className="absolute bottom-0 left-0 w-[520px]"
      />
      <img
        src="/images/register2.jpg"
        alt=""
        className="absolute bottom-0 right-0 w-[520px]"
      />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-center text-3xl font-bold text-[#0F172A] mb-12">
          Where would you prefer to volunteer?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isMisc = service.key === "misc";

            return (
              <button
                key={service.key}
                onClick={() => navigate(service.route)}
                className={`group bg-white rounded-2xl border border-[#F1E3CC]
                  px-8 py-6 min-h-[220px] text-left shadow-sm
                  hover:shadow-lg hover:border-[#FF9933]
                  transition-all duration-300
                  ${isMisc ? "lg:col-start-2" : ""}`}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12
                      rounded-full bg-[#FFF3E0]
                      text-[#FF9933] text-xl
                      group-hover:bg-[#FF9933]
                      group-hover:text-white transition"
                  >
                    <Icon />
                  </div>

                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {service.label}
                  </h3>
                </div>

                <p className="text-sm text-[#475569] mb-6">{service.desc}</p>

                <span className="text-sm font-semibold text-[#FF9933]">
                  Select this service →
                </span>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
