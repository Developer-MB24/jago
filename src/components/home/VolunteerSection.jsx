import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const VolunteerSection = () => {
  const volunteers = [
    {
      id: 1,
      name: "Jessica Brown",
      role: "Volunteer",
      img: "/images/team-2-1.jpg",
      delay: "0",
    },
    {
      id: 2,
      name: "James Fuller",
      role: "Founder",
      img: "/images/team-2-2.jpg",
      delay: "100",
    },
    {
      id: 3,
      name: "Jasmet Mangat",
      role: "Manager",
      img: "/images/team-2-3.jpg",
      delay: "300",
    },
    {
      id: 4,
      name: "Tim Southe",
      role: "Founder",
      img: "/images/team-2-4.jpg",
      delay: "400",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --helpest-base: #ff5528;
          --helpest-primary: #ffc107;
          --helpest-secondary: #26cc8c;
          --helpest-white: #ffffff;
          --helpest-black: #020617;
          --helpest-bdr-radius: 24px;
          --helpest-white-rgb: 255,255,255;
        }

        .team-two {
          position: relative;
          display: block;
          padding: 120px 0 0px;
         
          z-index: 1;
        }

        .team-two__single {
          position: relative;
          display: block;
          margin-bottom: 30px;
          transition: all 500ms ease;
        }
        .team-two__single:hover {
          transform: translateY(-10px);
        }

        .team-two__img-box {
          position: relative;
          display: block;
        }
        .team-two__img-box::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 6px;
          background-color: var(--helpest-base);
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='6' viewBox='0 0 300 6'%3E%3Cimage xlink:href='data:image/png;base64,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' x='0' y='0' width='300' height='6'/%3E%3C/svg%3E") no-repeat center center;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='6' viewBox='0 0 300 6'%3E%3Cimage xlink:href='data:image/png;base64,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' x='0' y='0' width='300' height='6'/%3E%3C/svg%3E") no-repeat center center;
          -webkit-mask-size: cover;
          mask-size: cover;
          z-index: 2;
        }

        .team-two ul li:nth-child(2) .team-two__img-box::before {
          background-color: var(--helpest-primary);
        }
        .team-two ul li:nth-child(3) .team-two__img-box::before {
          background-color: var(--helpest-secondary);
        }
        .team-two ul li:nth-child(4) .team-two__img-box::before {
          background-color: #7726eb;
        }

        .team-two__img {
          position: relative;
          display: block;
          overflow: hidden;
          border-top-left-radius: var(--helpest-bdr-radius);
          border-top-right-radius: var(--helpest-bdr-radius);
          z-index: 1;
        }

        .team-two__img::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(34, 34, 34, .85);
          border-top-left-radius: var(--helpest-bdr-radius);
          border-top-right-radius: var(--helpest-bdr-radius);
          opacity: 0;
          transform: translateY(-50%);
          transition: all 0.7s ease;
        }

        .team-two__single:hover .team-two__img::after {
          opacity: 1;
          transform: translateY(0%);
          transition-delay: 500ms;
        }

        .team-two__img:before {
          position: absolute;
          content: '';
          left: 0px;
          bottom: 0px;
          width: 100%;
          height: 1%;
          border: 3px solid var(--helpest-base);
          border-top-left-radius: var(--helpest-bdr-radius);
          border-top-right-radius: var(--helpest-bdr-radius);
          background-color: transparent;
          transition: all 600ms ease;
          z-index: 1;
        }

        .team-two ul li:nth-child(2) .team-two__img:before {
          border: 3px solid var(--helpest-primary);
        }
        .team-two ul li:nth-child(3) .team-two__img:before {
          border: 3px solid var(--helpest-secondary);
        }
        .team-two ul li:nth-child(4) .team-two__img:before {
          border: 3px solid #7726eb;
        }

        .team-two__single:hover .team-two__img:before {
          opacity: 1;
          height: 100%;
        }

        .team-two__img img {
          width: 100%;
          border-top-left-radius: var(--helpest-bdr-radius);
          border-top-right-radius: var(--helpest-bdr-radius);
          transition: all 500ms ease;
        }

        .team-two__single:hover .team-two__img img {
          transform: scaleX(1.05);
          transition-delay: 700ms;
        }

        .team-two__social {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
          z-index: 2;
        }

        .team-two__single:hover .team-two__social {
          opacity: 1;
          transform: translateY(0px);
          transition-delay: 700ms;
        }

        .team-two__social a {
          position: relative;
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--helpest-white);
          border-radius: var(--helpest-bdr-radius);
          font-size: 15px;
          overflow: hidden;
          transition: all 500ms ease;
          border: 1px solid rgba(var(--helpest-white-rgb), .50);
          z-index: 1;
          margin: 0 7px;
        }

        .team-two__social a:hover {
          color: var(--helpest-white);
          border: 1px solid var(--helpest-base);
        }

        .team-two ul li:nth-child(2) .team-two__social a:hover {
          border-color: var(--helpest-primary);
        }

        .team-two ul li:nth-child(3) .team-two__social a:hover {
          border-color: var(--helpest-secondary);
        }

        .team-two ul li:nth-child(4) .team-two__social a:hover {
          border-color: #7726eb;
        }

        .team-two__social a:before {
          position: absolute;
          inset: 0;
          content: "";
          background-color: var(--helpest-base);
          border-radius: 0%;
          transform: scale(0);
          transform-origin: center;
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.62, 0.21, 0.45, 1.52);
          z-index: -1;
        }

        .team-two ul li:nth-child(2) .team-two__social a:before {
          background-color: var(--helpest-primary);
        }

        .team-two ul li:nth-child(3) .team-two__social a:before {
          background-color: var(--helpest-secondary);
        }

        .team-two ul li:nth-child(4) .team-two__social a:before {
          background-color: #7726eb;
        }

        .team-two__social a:hover:before {
          transform: scaleX(1);
        }

        .team-two__content {
          position: relative;
          display: block;
          background-color: var(--helpest-white);
          text-align: center;
          box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 7%);
          padding: 33px 20px 33px;
          border-radius: var(--helpest-bdr-radius);
          border-bottom: 5px solid var(--helpest-base);
          transition: all 500ms ease;
        }

        .team-two ul li:nth-child(2) .team-two__content {
          border-bottom-color: var(--helpest-primary);
        }
        .team-two ul li:nth-child(3) .team-two__content {
          border-bottom-color: var(--helpest-secondary);
        }
        .team-two ul li:nth-child(4) .team-two__content {
          border-bottom-color: #7726eb;
        }

        .team-two__single:hover .team-two__content {
          border-bottom: 5px solid var(--helpest-black);
        }

        .team-two__name {
          font-size: 22px;
          line-height: 30px;
          font-weight: 800;
          margin-bottom: 2px;
        }

        .team-two__name a {
          color: var(--helpest-black);
          text-decoration: none;
        }

        .team-two__name a:hover {
          color: var(--helpest-base);
        }

        .team-two ul li:nth-child(2) .team-two__name a:hover {
          color: var(--helpest-primary);
        }

        .team-two ul li:nth-child(3) .team-two__name a:hover {
          color: var(--helpest-secondary);
        }

        .team-two ul li:nth-child(4) .team-two__name a:hover {
          color: #7726eb;
        }

        .team-two__sub-title {
          font-size: 18px;
          font-weight: 500;
        }

        @keyframes fadeRight {
          0% { opacity:0; transform:translateX(-40px);}
          100% { opacity:1; transform:translateX(0);}
        }
        @keyframes fadeLeft {
          0% { opacity:0; transform:translateX(40px);}
          100% { opacity:1; transform:translateX(0);}
        }
      `}</style>

      <section className="team-two">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-2 inline-block">
              <p className="label-osc mx-auto inline-block font-caveat text-[#f27b21] text-sm tracking-wide">
                <span>Expert Volunteer</span>
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020617] leading-snug">
              Meet Our <span className="text-orange-500">Volunteer</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
            {volunteers.map((v, index) => (
              <li
                key={v.id}
                className="aos-init aos-animate"
                style={{
                  animation:
                    index < 2
                      ? `fadeRight 1s ease forwards`
                      : `fadeLeft 1s ease forwards`,
                  animationDelay: `${v.delay}ms`,
                }}
              >
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img src={v.img} alt={v.name} />
                      <div className="team-two__social absolute bottom-5 left-0 right-0 flex items-center justify-center opacity-0 translate-y-12 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                        <a href="volunteer-details.html" className="icon-btn">
                          <FaFacebookF />
                        </a>
                        <a href="volunteer-details.html" className="icon-btn">
                          <FaTwitter />
                        </a>
                        <a href="volunteer-details.html" className="icon-btn">
                          <FaInstagram />
                        </a>
                        <a href="volunteer-details.html" className="icon-btn">
                          <FaPinterestP />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-two__content">
                    <h3 className="team-two__name">
                      <a href="#">{v.name}</a>
                    </h3>
                    <p className="team-two__sub-title">{v.role}</p>
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

export default VolunteerSection;
