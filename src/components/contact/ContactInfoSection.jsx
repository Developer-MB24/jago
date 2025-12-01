import React from "react";

const ContactInfoSection = () => {
  return (
    <section className="relative bg-[#FFF7EA] pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: Google Map */}
          <div className="lg:col-span-8">
            <div className="relative mb-6 overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.05)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.872767330837!2d-118.80725602484803!3d34.152675673126316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e823bc2e3c8573%3A0xe4e1e58fa2b9b91a!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1689800646032!5m2!1sen!2sus"
                className="h-[420px] w-full rounded-3xl border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-4">
            <ul className="space-y-5">
              {/* Address */}
              <li className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_0_60px_rgba(0,0,0,0.05)]">
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-black/10">
                  {/* Background circle animation */}
                  <span className="absolute inset-0 scale-0 rounded-full bg-[#2563EB] transition-transform duration-300 origin-center group-hover:scale-100" />
                  {/* Icon */}
                  <svg
                    className="relative z-10 h-7 w-7 text-[#2563EB] transition-colors duration-300 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21s-6-5.16-6-10a6 6 0 0 1 12 0c0 4.84-6 10-6 10z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="11"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-semibold leading-6 text-slate-900">
                    Address
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    2972 Westheimer Rd. Santa
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_0_60px_rgba(0,0,0,0.05)]">
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-black/10">
                  <span className="absolute inset-0 scale-0 rounded-full bg-[#FF9933] transition-transform duration-300 origin-center group-hover:scale-100" />
                  <svg
                    className="relative z-10 h-7 w-7 text-[#FF9933] transition-colors duration-300 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8l7 5 7-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-semibold leading-6 text-slate-900">
                    Email Address
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    <a
                      href="mailto:jeams.sons@example.com"
                      className="transition-colors hover:text-[#FF9933]"
                    >
                      jeams.sons@example.com
                    </a>
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_0_60px_rgba(0,0,0,0.05)]">
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-black/10">
                  <span className="absolute inset-0 scale-0 rounded-full bg-[#138808] transition-transform duration-300 origin-center group-hover:scale-100" />
                  <svg
                    className="relative z-10 h-7 w-7 text-[#138808] transition-colors duration-300 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.5 4.75 9.25 4 11 8l-1.3.9a2.5 2.5 0 0 0-.83 3.28 9.5 9.5 0 0 0 3.9 3.9 2.5 2.5 0 0 0 3.28-.83L17 13l4 1.75-.75 2.02A3.5 3.5 0 0 1 17.03 20a11.5 11.5 0 0 1-10-10A3.5 3.5 0 0 1 7.5 4.75Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-semibold leading-6 text-slate-900">
                    Phone number
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    <a
                      href="tel:7045550127"
                      className="transition-colors hover:text-[#138808]"
                    >
                      (704) 555-0127
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
