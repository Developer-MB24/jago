import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        /* ===== Global palette for the footer (replaces CSS variables) ===== */
        :root {
          --helpest-white: #ffffff;
          --helpest-white-rgb: 255, 255, 255;
          --helpest-black: #111827;
          --helpest-black-rgb: 17, 24, 39;
          --helpest-base: #FF9933;
          --helpest-base-rgb: 255, 153, 51;
          --helpest-secondary: #10B981;
          --helpest-extra: #FFF7EA;
          --helpest-primary: #3B82F6;
          --helpest-gray: #6B7280;
          --helpest-font-two: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --helpest-bdr-radius: 40px;
        }

        /* ===== Simple layout helpers (Bootstrap-like) ===== */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-left: -12px;
          margin-right: -12px;
        }

        .col-xl-4,
        .col-xl-3,
        .col-xl-2,
        .col-lg-6,
        .col-md-6 {
          padding-left: 12px;
          padding-right: 12px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .col-md-6 {
            width: 50%;
          }
        }

        @media (min-width: 992px) {
          .col-lg-6 {
            width: 50%;
          }
        }

        @media (min-width: 1200px) {
          .col-xl-4 {
            width: 33.3333%;
          }
          .col-xl-3 {
            width: 25%;
          }
          .col-xl-2 {
            width: 16.6667%;
          }
        }

        .list-unstyled {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        /* ===== Animations ===== */
        @keyframes float-bob-y {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .float-bob-y {
          animation: float-bob-y 6s ease-in-out infinite;
        }

        @keyframes topBottom {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        /* ===== Site Footer Two ===== */
        .site-footer-two {
          position: relative;
          display: block;
          z-index: 1;
        }

        .site-footer-two__top {
          position: relative;
          display: block;
          overflow: hidden;
          background-color: #0e2c27; /* overlay color */
          z-index: 1;
        }

        .site-footer-two__bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.10;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .site-footer-two__shape-1 {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.05;
          z-index: -1;
        }

        .site-footer-two__shape-1 img {
          width: auto;
        }

        /* tighter like screenshot */
        .site-footer-two__top-inner {
          position: relative;
          display: block;
          padding: 60px 0 45px;
        }

        .footer-widget-two__about {
          position: relative;
          display: block;
        }

        .footer-widget-two__about-logo {
          position: relative;
          display: inline-block;
        }

        .footer-widget-two__about-text {
          margin: 0;
          color: var(--helpest-white);
          padding-top: 18px;
          padding-bottom: 12px;
          font-size: 13px;
          line-height: 22px;
          max-width: 280px;
          opacity: 0.9;
        }

        .footer-widget-two__about-tagline {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--helpest-white);
        }

        .site-footer-two__social {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 16px;
        }

        .site-footer-two__social a {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--helpest-white);
          background-color: transparent;
          border: 1px solid var(--helpest-base);
          border-radius: 10px;
          font-size: 15px;
          height: 32px;
          width: 32px;
          overflow: hidden;
          transition: all 500ms ease;
          z-index: 1;
        }

        .site-footer-two__social a + a {
          margin-left: 8px;
        }

        .site-footer-two__social a:hover {
          color: var(--helpest-white);
          background-color: var(--helpest-base);
        }

        .footer-widget-two__services {
          position: relative;
          display: block;
          margin-left: 40px;
        }

        .footer-widget-two__title {
          position: relative;
          display: inline-block;
          font-size: 18px;
          color: var(--helpest-white);
          font-weight: 700;
          line-height: 26px;
          margin-bottom: 20px;
        }

        .footer-widget-two__services-list {
          position: relative;
          display: block;
        }

        .footer-widget-two__services-list li + li {
          margin-top: 10px;
        }

        .footer-widget-two__services-list li a {
          color: var(--helpest-white);
          position: relative;
          display: inline-block;
          transition: all 300ms ease;
          font-size: 14px;
          line-height: 24px;
          opacity: 0.85;
        }

        .footer-widget-two__services-list li a:hover {
          color: var(--helpest-base);
          opacity: 1;
        }

        .footer-widget-two__links {
          position: relative;
          display: block;
        }

        .footer-widget-two__contact {
          position: relative;
          display: block;
          margin-left: 10px;
        }

        .footer-widget-two__contact-list {
          position: relative;
          display: block;
        }

        .footer-widget-two__contact-list li {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-widget-two__contact-list li + li {
          margin-top: 10px;
        }

        .footer-widget-two__contact-list li:last-child {
          align-items: flex-start;
        }

        .footer-widget-two__contact-list li:last-child .icon {
          top: 7px;
        }

        .footer-widget-two__contact-list li .icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .footer-widget-two__contact-list li .icon span {
          position: relative;
          display: inline-block;
          font-size: 14px;
          color: var(--helpest-base);
        }

        .footer-widget-two__contact-list li p {
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: var(--helpest-white);
          margin: 0;
        }

        .footer-widget-two__contact-list li p a {
          color: var(--helpest-white);
        }

        .footer-widget-two__contact-list li p a:hover {
          color: var(--helpest-base);
        }

        .site-footer-two__bottom {
          position: relative;
          display: block;
          border-top: 1px solid rgba(var(--helpest-white-rgb), 0.10);
          background-color: #0e2c27;
        }

        .site-footer-two__bottom-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 0 18px;
          flex-wrap: wrap;
          text-align: center;
        }

        .site-footer-two__copyright {
          position: relative;
          display: block;
          top: 2px;
        }

        .site-footer-two__copyright-text {
          color: var(--helpest-white);
          font-size: 13px;
          opacity: 0.9;
        }

        @media (max-width: 991px) {
          .footer-widget-two__services {
            margin-left: 0;
            margin-top: 30px;
          }
          .footer-widget-two__links {
            margin-top: 30px;
          }
          .footer-widget-two__contact {
            margin-left: 0;
            margin-top: 30px;
          }
        }
      `}</style>

      <footer className="site-footer-two">
        {/* Main footer top section */}
        <div className="site-footer-two__top">
          <div
            className="site-footer-two__bg"
            style={{
              backgroundImage: "url('/images/site-footer-two-bg.jpg')",
            }}
          ></div>
          <div className="site-footer-two__shape-1 float-bob-y">
            <img src="/images/indian-map.png" alt="India outline" />
          </div>

          <div className="container">
            <div className="site-footer-two__top-inner">
              <div className="row">
                {/* Column 1: About + tagline + social icons */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="footer-widget-two__about">
                    <div className="footer-widget-two__about-logo w-28">
                      <a href="/">
                        <img
                          src="/images/jaago-manav-logo.png"
                          alt="Jaago Manav logo"
                        />
                      </a>
                    </div>
                    {/* <p className="footer-widget-two__about-text">
                      Jaago Manav is dedicated to uplifting communities through
                      education, health, livelihoods, and social awareness.
                    </p> */}
                    <p className="footer-widget-two__about-tagline ">
                      Awakening Hope, Empowering People
                    </p>

                    <div className="site-footer-two__social">
                      <a href="#" aria-label="Facebook">
                        <FaFacebookF />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <FaInstagram />
                      </a>
                      <a href="#" aria-label="LinkedIn">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 2: Our Services */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="footer-widget-two__services">
                    <h4 className="footer-widget-two__title">Our Services</h4>
                    <ul className="footer-widget-two__services-list list-unstyled">
                      <li>
                        <a href="/services/education">Education</a>
                      </li>
                      <li>
                        <a href="/services/health">Health</a>
                      </li>
                      <li>
                        <a href="/services/agriculture">Agriculture</a>
                      </li>
                      <li>
                        <a href="/services/geographical-issues">
                          Geographical Issues
                        </a>
                      </li>
                      <li>
                        <a href="/services/employment">Employment</a>
                      </li>
                      <li>
                        <a href="/services/social-political-awareness">
                          Social &amp; Political Awareness
                        </a>
                      </li>
                      <li>
                        <a href="/services/miscellaneous">Miscellaneous</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: Jaago Manav pages links */}
                <div className="col-xl-2 col-lg-6 col-md-6">
                  <div className="footer-widget-two__links">
                    <h4 className="footer-widget-two__title">Jaago Manav</h4>
                    <ul className="footer-widget-two__services-list list-unstyled">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/our-work">Our Work</a>
                      </li>
                      <li>
                        <a href="/volunteer">Volunteer</a>
                      </li>
                      <li>
                        <a href="/donate">Donate</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 4: Contact, Email, Address */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="footer-widget-two__contact">
                    <h3 className="footer-widget-two__title">
                      Contact &amp; Email
                    </h3>
                    <ul className="footer-widget-two__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span>📞</span>
                        </div>
                        <p>
                          {/* update with real number */}
                          <a href="tel:+919999999999">+91 99999 99999</a>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span>✉️</span>
                        </div>
                        <p>
                          {/* update with real email */}
                          <a href="mailto:info@jaagomanav.org">
                            info@jaagomanav.org
                          </a>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span>📍</span>
                        </div>
                        <p>
                          Mayur Vihar,
                          <br />
                          Delhi, India - 110091
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end row */}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="site-footer-two__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer-two__bottom-inner">
                    <div className="site-footer-two__copyright">
                      <p className="site-footer-two__copyright-text">
                        Copyright 2026 © Jaago Manav. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
