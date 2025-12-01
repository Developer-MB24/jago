import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <>
      {/* ========== INLINE CSS (ALL ANIMATIONS + BUTTON CSS) ========== */}
      <style>{`
        /* Floating animations */
        @keyframes float-bob-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .float-bob-y { animation: float-bob-y 6s ease-in-out infinite; }

        @keyframes float-bob-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(18px); }
        }
        .float-bob-x { animation: float-bob-x 8s ease-in-out infinite; }

        /* Fade-in animation */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .delay-200 { animation-delay: 0.2s; }

        /* =============== BUTTON COMPLETE CSS (#FF9933) =============== */
        
        .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          appearance: none;
          outline: none !important;
          font-weight: 700;
          font-size: 17px;
          color: #000;
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
        }

        .thm-btn .thm-btn-text {
          position: relative;
          display: block;
          z-index: 2;
        }

        .thm-btn::before {
          content: "";
          background-color: #FF9933;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .thm-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 300ms;
        }

        .thm-btn::after {
          content: "";
          background-color: rgba(255, 153, 51, 0.30);
          position: absolute;
          inset: 0;
          z-index: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
        }

        .thm-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        .thm-btn .thm-btn-icon-box {
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

        .thm-btn:hover .thm-btn-icon-box {
          background-color: white;
          color: #FF9933;
          transition-delay: 200ms;
        }

        @keyframes bounceright {
          0% { transform: translateX(0); }
          100% { transform: translateX(4px); }
        }

        .thm-btn:hover .thm-btn-icon-box svg {
          animation: bounceright .3s alternate ease infinite;
        }

        .thm-btn:hover {
          color: white;
          border: 1px solid transparent;
        }
      `}</style>

      {/* ========== CONTACT FORM SECTION ========== */}
      <section className="relative overflow-hidden bg-[#FFF7EA] py-24">
        {/* Floating Shapes */}
        <div className="pointer-events-none absolute left-6 top-10 hidden md:block float-bob-y">
          <img src="/images/contact-page-shape-1.png" alt="" className="h-24" />
        </div>

        <div className="pointer-events-none absolute -right-1 bottom-0 hidden lg:block float-bob-x">
          <img src="/images/contact-page-shape-2.png" alt="" className="h-40" />
        </div>

        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full bg-black/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#111827]">
              Our Contact
            </div>

            <h2 className="fade-in-up text-3xl font-semibold leading-snug sm:text-4xl md:text-5xl text-slate-900">
              <span className="block">Join With Us To As</span>
              <span className="block text-[#FF9933]">
                Volunteer Contact Now!
              </span>
            </h2>
          </div>

          {/* Card */}
          <div className="fade-in-up delay-200">
            <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white/80 p-8 shadow-xl backdrop-blur-sm md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="block h-14 w-full rounded-2xl border border-slate-200 px-4 bg-transparent"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="block h-14 w-full rounded-2xl border border-slate-200 px-4 bg-transparent"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="block h-14 w-full rounded-2xl border border-slate-200 px-4 bg-transparent"
                  />

                  <div className="relative">
                    <select
                      name="serviceType"
                      className="block h-14 w-full rounded-2xl border border-slate-200 px-2 pr-10 bg-transparent"
                      defaultValue="Service Type"
                    >
                      <option disabled className="text-gray-300">
                        Service Type
                      </option>
                      <option>Type Of Service 01</option>
                      <option>Type Of Service 02</option>
                      <option>Type Of Service 03</option>
                      <option>Type Of Service 04</option>
                      <option>Type Of Service 05</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  className="block h-48 w-full rounded-2xl border border-slate-200 px-4 py-3 bg-transparent"
                />

                {/* ========== BUTTON ========== */}
                <div className="flex justify-center">
                  <button type="submit" className="thm-btn">
                    <span className="thm-btn-text">Send a Message</span>

                    <span className="thm-btn-icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 10h10M11 6l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/* ================================= */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
