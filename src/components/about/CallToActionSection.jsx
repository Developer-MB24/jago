// CallToActionSection.jsx
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CallToActionSection() {
  return (
    <section className="work-process overflow-hidden pt-24 pb-28 md:pt-20 md:pb-24 sm:pt-20 sm:pb-20">
      {/* thm-btn styles (same as used elsewhere) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
            color: #fff !important;
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
            background: transparent;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
              sans-serif;
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
            background-color: rgba(255, 153, 51, 0.3);
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
        `,
        }}
      />

      <div className="container mx-auto px-4">
        {/* section heading */}
        <div className="text-center mb-12 sm:mb-10">
          <div
            className="inline-flex items-center justify-center gap-3 bg-[rgba(0,69,64,0.06)] rounded-full px-5 py-2 backdrop-blur-sm mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src="/images/icon-2.svg"
              alt="icon"
              className="w-7 h-7 object-contain"
            />
            <span className="text-[#004540] font-medium text-[16px]">
              Contact Us
            </span>
          </div>

          <div
            className="common-title mx-auto mb-0 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#004540] leading-snug">
              Simple Steps Wastage to Recycling Item Processing
            </h2>
          </div>
        </div>

        {/* content row */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
          {/* left: work process cards */}
          <div className="w-full xl:w-7/12">
            <div
              className="work-process-cards grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              {[
                {
                  num: "01",
                  t1: "Collection",
                  t2: "and Segregation",
                  p: "Separate into categories: organic, plastic, metal, paper, glass, and e-waste.",
                },
                {
                  num: "02",
                  t1: "Cleaning",
                  t2: "and Sorting",
                  p: "Wash and remove contaminants from recyclable materials.",
                },
                {
                  num: "03",
                  t1: "Reformation",
                  t2: "& Manufacturing",
                  p: "Convert processed materials into raw forms like pellets, sheets, or fibers.",
                },
                {
                  num: "04",
                  t1: "Reuse",
                  t2: "& Distribution",
                  p: "Promote products made from recycled materials to encourage sustainability.",
                },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className="
                    work-process-card
                    bg-white rounded-[10px]
                    shadow-[0_35px_41.5px_-16px_rgba(0,69,64,0.08)]
                    px-7 py-9
                  "
                >
                  {/* card top */}
                  <div className="card-top flex items-center gap-6 mb-8">
                    <img
                      src="/images/shape-37.webp"
                      alt="shape"
                      className="max-w-[70%]"
                    />
                    <div
                      className="
                        number
                        w-[70px] h-[70px]
                        rounded-full border-2 border-white
                        flex items-center justify-center
                        bg-[#004540]
                        shadow-[0_15px_32.2px_-9px_rgba(0,24,25,0.2)]
                      "
                    >
                      <h4 className="text-[24px] leading-9 font-semibold text-[#FF9933] mb-0">
                        {step.num}
                      </h4>
                    </div>
                  </div>

                  {/* card content */}
                  <div className="card-content">
                    <h4 className="text-[#004540] font-medium text-[26px] leading-[30px] max-w-[210px]">
                      {step.t1}
                    </h4>
                    <h4 className="text-[#004540] font-medium text-[26px] leading-[30px] max-w-[210px] mb-3">
                      {step.t2}
                    </h4>
                    <p className="text-[17px] leading-[28px] text-[#4b5563]">
                      {step.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right: contact form */}
          <div className="w-full xl:w-5/12">
            <div
              className="contact-form-3 relative bg-[#004540] rounded-[10px] px-9 pr-12 py-9 text-white overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <div className="form-content relative z-[1]">
                <h3 className="text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.3] font-medium mb-3">
                  Have you any questions?{" "}
                  <span role="img" aria-label="smile">
                    😍
                  </span>
                </h3>
                <p className="max-w-[357px] text-[16px] leading-[1.6] opacity-90 mb-6">
                  The point of using lorem ipsum is that it has more-or-less
                  packages normal
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="
                        w-full rounded-[10px] border-2 border-white/20 
                        bg-[rgba(248,247,240,0.1)]
                        px-5 py-3.5 text-[16px]
                        placeholder-[#f8f7f0]
                        focus:outline-none focus:border-[#FF9933] focus:placeholder-white
                      "
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="
                        w-full rounded-[10px] border-2 border-white/20 
                        bg-[rgba(248,247,240,0.1)]
                        px-5 py-3.5 text-[16px]
                        placeholder-[#f8f7f0]
                        focus:outline-none focus:border-[#FF9933] focus:placeholder-white
                      "
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="
                        w-full rounded-[10px] border-2 border-white/20 
                        bg-[rgba(248,247,240,0.1)]
                        px-5 py-3.5 text-[16px]
                        placeholder-[#f8f7f0]
                        focus:outline-none focus:border-[#FF9933] focus:placeholder-white
                      "
                      placeholder="+1 xxx xxx xxxx"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      rows="4"
                      className="
                        w-full rounded-[10px] border-2 border-white/20 
                        bg-[rgba(248,247,240,0.1)]
                        px-5 py-3.5 text-[16px]
                        placeholder-[#f8f7f0]
                        resize-none
                        focus:outline-none focus:border-[#FF9933] focus:placeholder-white
                      "
                      placeholder="Say Something..."
                    ></textarea>
                  </div>

                  <button type="submit" className="thm-btn">
                    <span className="thm-btn-text">Submit Now</span>
                    <span className="thm-btn-icon-box">
                      <FaArrowRightLong />
                    </span>
                  </button>
                </form>

                {/* background shape */}
                <img
                  src="/images/shape-5.webp"
                  alt="shape-5"
                  className="pointer-events-none absolute -top-[220px] -right-[260px] -z-[1] w-[420px] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
