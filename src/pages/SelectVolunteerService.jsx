import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    key: "education",
    label: "Education",
    route: "/register/education",
    description: "Teach, mentor, and support students in learning.",
    icon: "🎓",
  },
  {
    key: "health",
    label: "Health",
    route: "/register/health",
    description: "Assist in health camps and awareness programs.",
    icon: "🩺",
  },
  {
    key: "agriculture",
    label: "Agriculture",
    route: "/register/agriculture",
    description: "Support farmers and sustainable agriculture efforts.",
    icon: "🌾",
  },
  {
    key: "geographical",
    label: "Geographical Issues",
    route: "/register/geographical",
    description: "Help communities impacted by climate and disasters.",
    icon: "🌍",
  },
  {
    key: "employment",
    label: "Employment",
    route: "/register/employment",
    description: "Guide youth with skills and job readiness.",
    icon: "💼",
  },
  {
    key: "social-political",
    label: "Social & Political Awareness",
    route: "/register/social-political",
    description: "Spread awareness of rights, duties, and democracy.",
    icon: "🗳️",
  },
  {
    key: "misc",
    label: "Miscellaneous",
    route: "/register/miscellaneous",
    description: "Contribute in other flexible volunteer roles.",
    icon: "🤝",
  },
];

const SelectVolunteerService = () => {
  const navigate = useNavigate();

  const handleSelect = (route) => navigate(route);
  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-[#FFF7EA] flex flex-col">
      {/* Top bar / breadcrumb */}
      <header className="w-full border-b border-[#F3E4CF] bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFEDD5] text-xs font-semibold text-[#FF9933]">
              1
            </span>
            <span className="font-medium text-[#111827]">
              Volunteer Registration
            </span>
            <span className="text-[#D1D5DB]">/</span>
            <span>Select Service</span>
          </div>

          <button
            type="button"
            onClick={handleBack}
            className="text-sm font-medium text-[#0F172A] inline-flex items-center gap-1 hover:text-[#FF9933] transition-colors"
          >
            <span className="text-lg leading-none">←</span> Back
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-5xl px-4 py-10 md:py-14">
          {/* Hero section */}
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-flex items-center rounded-full bg-[#FFEDD5] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF9933] mb-3">
              Step 1 • Choose your impact area
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0E2C27] mb-3">
              Where would you like to volunteer?
            </h1>
            {/* <p className="max-w-2xl mx-auto text-sm md:#FF9933 text-[#4B5563]">
              Pick the area that best matches your skills and passion. You can
              always update your preferences later in your volunteer profile.
            </p> */}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service) => (
              <button
                key={service.key}
                type="button"
                onClick={() => handleSelect(service.route)}
                className="group h-full w-full rounded-2xl bg-white px-5 py-5 text-left
                           border border-[#F3E4CF] shadow-sm
                           hover:shadow-md hover:-translate-y-1 hover:border-[#FF9933]
                           transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-2xl 
                               bg-[#FFF7EA] border border-[#FED7AA] text-xl"
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="#FF9933 md:text-lg font-semibold text-[#111827] mb-1">
                      {service.label}
                    </h2>
                    <p className="text-xs md:text-sm text-[#6B7280]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-medium text-[#FF9933] bg-[#FFF4E6] px-2.5 py-1 rounded-full">
                    Select this service
                  </span>
                  <span
                    className="text-sm text-[#9CA3AF] group-hover:text-[#FF9933] 
                               transform group-hover:translate-x-1 transition-all"
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Helper text */}
          {/* <div className="mt-8 text-center text-xs md:text-sm text-[#6B7280]">
            Not sure where to start? Choose the closest option now — our team
            will help you refine your role after registration.
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default SelectVolunteerService;
