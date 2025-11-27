import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { key: "education", label: "Education", route: "/register/education" },
  { key: "health", label: "Health", route: "/register/health" },
  { key: "agriculture", label: "Agriculture", route: "/register/agriculture" },
  {
    key: "geographical",
    label: "Geographical Issues",
    route: "/register/geographical",
  },
  { key: "employment", label: "Employment", route: "/register/employment" },
  {
    key: "social-political",
    label: "Social & Political Awareness",
    route: "/register/social-political",
  },
  { key: "misc", label: "Miscellaneous", route: "/register/miscellaneous" },
];

const SelectVolunteerService = () => {
  const navigate = useNavigate();
  const handleSelect = (route) => navigate(route);

  return (
    <div className="min-h-screen bg-[#FFF7EA] flex flex-col items-center">
      <div className="w-full max-w-3xl px-4 pt-12 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-10">
          Select Your Volunteer Service
        </h1>

        {/* VERTICAL LIST OF BUTTONS */}
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <button
              key={service.key}
              type="button"
              onClick={() => handleSelect(service.route)}
              className="w-full rounded-2xl bg-white px-6 py-5 text-center
                         text-lg font-semibold text-[#0F172A]
                         shadow-sm border border-[#E5E7EB]
                         hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectVolunteerService;
