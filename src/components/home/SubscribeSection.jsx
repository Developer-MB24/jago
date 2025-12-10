import React, { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#FF9933] text-white px-16 relative">
      {/* BUTTON ANIMATION CSS — scoped ONLY to this section */}
      <style>
        {`
        .subscribe-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 28px 0 32px;
          height: 56px;
          border-radius: 999px;
          border: 1px solid #ffffff;
          font-weight: 700;
          font-size: 17px;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          overflow: hidden;
          transition: 0.5s ease-in-out;
        }

        .subscribe-btn-text {
          position: relative;
          z-index: 2;
          color: black !important;
        }

        /* expanding background */
        .subscribe-btn::before {
          content: "";
          background-color: #ffffff;
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: 1;
        }

        .subscribe-btn:hover::before {
          clip-path: circle(100% at 50% 50%);
          transition-delay: 200ms;
        }

        /* second soft ring */
        .subscribe-btn::after {
          content: "";
          background-color: rgba(255,255,255,0.35);
          position: absolute;
          inset: 0;
          clip-path: circle(0% at 50% 50%);
          transition: all cubic-bezier(0,0.96,0.58,1.1) 0.8s;
          z-index: 0;
        }

        .subscribe-btn:hover::after {
          clip-path: circle(100% at 50% 50%);
        }

        /* Arrow Circle */
        .subscribe-btn-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #ffffff;
          color: #FF9933;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 500ms ease;
        }

        /* icon in hover */
        .subscribe-btn:hover .subscribe-btn-icon {
          background-color: #FF9933;
          color: #ffffff;
        }
      `}
      </style>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <form
          onSubmit={onSubmit}
          className="grid items-center gap-6 md:gap-8 lg:grid-cols-12"
          aria-label="Subscribe to our newsletter"
        >
          {/* Title */}
          <h2 className="lg:col-span-5 text-white text-3xl md:text-3xl font-extrabold tracking-tight font-title">
            Subscribe Our Newsletters
          </h2>

          {/* Email input with underline */}
          <div className="lg:col-span-5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full bg-transparent placeholder-white/90 text-white font-paragraph outline-none
                           pb-2 border-b border-white/40 focus:border-white transition"
              />

              <span className="pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px] bg-white/20"></span>
            </div>
          </div>

          {/* Animated Subscribe Button */}
          <div className="lg:col-span-2">
            <button type="submit" className="subscribe-btn w-full md:w-auto">
              <span className="subscribe-btn-text">Subscribe</span>

              <span className="subscribe-btn-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h12M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
