import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    key: "education",
    label: "Education",
    route: "/register/education",
  },
  {
    key: "health",
    label: "Health",
    route: "/register/health",
  },
  {
    key: "agriculture",
    label: "Agriculture",
    route: "/register/agriculture",
  },
  {
    key: "geographical",
    label: "Geographical Issues",
    route: "/register/geographical",
  },
  {
    key: "employment",
    label: "Employment",
    route: "/register/employment",
  },
  {
    key: "social-political",
    label: "Social & Political Awareness",
    route: "/register/social-political",
  },
  {
    key: "misc",
    label: "Miscellaneous",
    route: "/register/miscellaneous", // only if/when you create this form
  },
];

const SelectVolunteerService = () => {
  const navigate = useNavigate();

  const handleSelect = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-[#FFF7EA] flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 pt-8 pb-16">
        {/* Top button like your reference */}
        <div className="flex justify-end mb-6">
          <button
            type="button"
            className="rounded-full border border-[#0F172A] bg-white px-4 py-1.5 text-sm font-semibold text-[#0F172A] shadow-sm"
          >
            Volunteer Registration
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-8">
          Select Your Volunteer Service
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center">
          {services.map((service) => (
            <button
              key={service.key}
              type="button"
              onClick={() => handleSelect(service.route)}
              className="w-full max-w-xs rounded-2xl bg-white px-6 py-4 text-center text-base md:text-lg font-semibold text-[#0F172A] shadow-sm border border-[#E5E7EB] hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Optional small note */}
        <p className="mt-8 text-center text-xs md:text-sm text-slate-600">
          After selecting a service, you&apos;ll be taken to the registration
          form for that specific volunteering area.
        </p>
      </div>
    </div>
  );
};

export default SelectVolunteerService;
