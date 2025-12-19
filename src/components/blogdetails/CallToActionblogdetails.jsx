import React from "react";

export default function CallToActionblogdetails({
  title = (
    <>
      We Are{" "}
      <span className="text-[#FF9933] font-bold">Non profit charity</span>{" "}
      <span className="text-[#138808] font-bold">world</span> Organization
    </>
  ),
  subtitle = (
    <>
      Denouncing pleasure and praising pain was born and will give you a
      complete great explorer of the truth the master-builder.
    </>
  ),
  buttonText = "Donate Now",
  buttonHref = "/donate-now",

  photo = "/images/about-two-img-2.jpg",
  shapeImage = "/images/site-footer-two-content-shape-1.png",
  maskUrl = "/images/cta-mask.png",
}) {
  const maskStyle = maskUrl
    ? {
        WebkitMaskImage: `url(${maskUrl})`,
        maskImage: `url(${maskUrl})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center center",
        maskPosition: "center center",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }
    : {};

  return (
    <section className="relative isolate py-16 sm:py-20 z-50">
      <style>{`
        @keyframes topBottomLocal {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -15px); }
        }
        .cta-shape-bob {
          animation: topBottomLocal 3s ease-in-out infinite;
        }

        /* ============================
           THEME BUTTON (UPDATED)
        ============================ */
        .thm-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;

          padding: 6px 25px 6px;
          padding-right: 6px;

          font-weight: 700;
          font-size: 15px;
          color: #138808;

          border: 1px solid #FF9933;
          border-radius: 30px;

          overflow: hidden;
          background: transparent;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .thm-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #FF9933;
          clip-path: circle(0% at 50% 50%);
          transition: clip-path cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: -1;
        }

        .thm-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255, 153, 51, 0.3);
          clip-path: circle(0% at 50% 50%);
          transition: clip-path cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s;
          z-index: -2;
        }

        .thm-btn:hover {
          color: #ffffff;
        }

        .thm-btn:hover::before,
        .thm-btn:hover::after {
          clip-path: circle(150% at 50% 50%);
        }

        .thm-btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #FF9933;
          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: all 0.4s ease;
          z-index: 2;
        }

        .thm-btn:hover .thm-btn-icon {
          background-color: #ffffff;
          color: #FF9933;
        }
      `}</style>

      <div className="relative mx-auto max-w-[1120px] -mb-32 px-[15px] z-50">
        <div
          className="relative text-center bg-[#f1f9fb] pt-[91px] pb-[200px] rounded-[24px] shadow-md overflow-hidden"
          style={maskStyle}
        >
          {shapeImage && (
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 cta-shape-bob">
              <img src={shapeImage} alt="" />
            </div>
          )}

          <h3 className="text-[35px] font-extrabold leading-[45px] text-[#138808]">
            {title}
          </h3>

          <p className="mt-[10px] mb-[20px] font-medium text-[#111827]">
            {subtitle}
          </p>

          {/* CTA BUTTON */}
          <div className="mt-4 flex justify-center">
            <a href={buttonHref} className="thm-btn">
              <span className="relative z-10">{buttonText}</span>

              <span className="thm-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="absolute -bottom-[35px] left-1/2 -translate-x-1/2 z-20 max-w-[200px] w-full">
            <div className="w-[140px] sm:w-[180px] mx-auto rounded-full overflow-hidden shadow ring-4 ring-[#eef7f6]">
              <img
                src={photo}
                alt="Footer highlight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
