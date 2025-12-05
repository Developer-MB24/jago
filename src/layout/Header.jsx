import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

/* Icons  */
const ChevronDown = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.06l3.71-2.83a.75.75 0 11.92 1.18l-4.2 3.2a.75.75 0 01-.92 0l-4.2-3.2a.75.75 0 01-.02-1.2z" />
  </svg>
);
const SearchIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const CartIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="17" cy="21" r="1" />
    <path d="M1 1h4l2.68 12.39a2 2 0 002 1.61h7.72a2 2 0 002-1.61L21 6H6" />
  </svg>
);
const UserIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <path d="M20 21a8 8 0 10-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ArrowRight = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

/*  Utils  */
function useOnClickOutside(refs, handler) {
  useEffect(() => {
    function onClick(e) {
      const arr = Array.isArray(refs) ? refs : [refs];
      if (arr.some((r) => r.current && r.current.contains(e.target))) return;
      handler(e);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [refs, handler]);
}

/*  Shared Portal Dropdown */
function SimplePortalDropdown({ anchorRef, onClose, items }) {
  const menuRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 240 });

  const updatePosition = () => {
    const btn = anchorRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left,
      width: Math.max(rect.width, 240),
    });
  };

  useLayoutEffect(() => {
    updatePosition();
  }, []);
  useEffect(() => {
    const handler = () => updatePosition();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const menu = (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Menu"
      style={{
        top: pos.top,
        left: pos.left,
        width: pos.width,
        position: "fixed",
      }}
      className="z-[1000] origin-top-left rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xl ring-1 ring-black/5"
    >
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg,#FF9933 0%,#FFFFFF 50%,#138808 100%)",
        }}
      />
      <ul className="py-2">
        {items.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="block px-5 py-2.5 text-[16.5px] font-semibold tracking-wide hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
              role="menuitem"
              onClick={onClose}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return createPortal(menu, document.body);
}

/* Search Overlay  */
function SearchOverlay({ open, onClose, value, onChange, onSubmit }) {
  if (!open) return null;

  const overlay = (
    <div className="fixed inset-0 z-[1100] flex items-start justify-center bg-black/50 pt-24">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl mx-4">
        <form onSubmit={onSubmit} className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Search Jaago Manav
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-slate-500 hover:text-slate-800"
            >
              ✕
            </button>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2">
              <SearchIcon className="h-5 w-5 text-slate-400" />
              <input
                autoFocus
                type="text"
                className="w-full text-sm focus:outline-none"
                placeholder="Type a keyword (e.g. education, health, campaign...)"
                value={value}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[#FF9933] px-4 py-2 text-sm font-semibold text-white hover:bg-[#138808] transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}

/* ========= Header ========= */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButtonRef = useRef(null);

  const [blogOpen, setBlogOpen] = useState(false);
  const blogButtonRef = useRef(null);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // outside click (only services + blog now)
  useOnClickOutside([servicesButtonRef, blogButtonRef], () => {
    setServicesOpen(false);
    setBlogOpen(false);
  });

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mql.matches && setMobileOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) {
      alert("Please enter a keyword to search.");
      return;
    }
    console.log("Searching for:", q);
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full relative overflow-hidden">
      {/* Tricolor overlays */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>
      <div className="absolute inset-0 -z-20 bg-black/10 backdrop-blur-[2px]" />

      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-4 py-3 md:px-6 lg:px-8 text-white">
        <div className="flex w-full items-center justify-between gap-1 rounded-2xl bg-black/25 px-3 py-2 ring-1 ring-white/20">
          {/* Logo (bigger) */}
          <Link
            to="/"
            className="shrink-0 rounded-xl bg-white/10 p-2 ring-1 ring-white/30"
          >
            <img
              src="/images/jaago-manav-logo.png"
              alt="Jaago Manav Logo"
              className="h-14 w-auto md:h-16"
              loading="eager"
            />
          </Link>

          {/* Hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1 ml-6 text-lg font-semibold tracking-wide">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
            >
              About
            </NavLink>

            {/* Services dropdown */}
            <div className="relative">
              <button
                ref={servicesButtonRef}
                className="flex items-center gap-2 text-white hover:text-[#FFE9CC] focus:outline-none"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((v) => !v);
                  setBlogOpen(false);
                }}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <SimplePortalDropdown
                  anchorRef={servicesButtonRef}
                  onClose={() => setServicesOpen(false)}
                  items={[
                    { label: "Service", to: "/service/service" },
                    { label: "Education", to: "/service/education" },
                    { label: "Health", to: "/service/health" },
                    { label: "Agriculture", to: "/service/agriculture" },
                    { label: "Employment", to: "/service/employment" },
                    {
                      label: "Geographical Issues",
                      to: "/service/geographical-issues",
                    },
                    {
                      label: "Social & Political Awareness",
                      to: "/service/social-&-political-awareness",
                    },
                    { label: "Miscellaneous", to: "/service/miscellaneous" },
                  ]}
                />
              )}
            </div>

            {/* Blog dropdown */}
            <div className="relative">
              <button
                ref={blogButtonRef}
                className="flex items-center gap-2 text-white hover:text-[#FFE9CC] focus:outline-none"
                aria-haspopup="true"
                aria-expanded={blogOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setBlogOpen((v) => !v);
                  setServicesOpen(false);
                }}
              >
                <span>Blog</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {blogOpen && (
                <SimplePortalDropdown
                  anchorRef={blogButtonRef}
                  onClose={() => setBlogOpen(false)}
                  items={[
                    { label: "Blog", to: "/blog" },
                    { label: "Blog Details", to: "/blogdetails" },
                  ]}
                />
              )}
            </div>

            {/* WhoWeAre */}
            <NavLink
              to="/whoarewe"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
            >
              WhoWeAre
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop: Volunteer Registration + Search + Donate */}
          <div className="ml-6 hidden lg:flex items-center gap-5 shrink-0">
            {/* Volunteer Registration */}
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `inline-flex items-center rounded-full border-2 px-4 py-1.5 text-sm font-semibold tracking-wide shadow-sm transition-colors ${
                  isActive
                    ? "bg-[#FF9933] border-[#FF9933] text-white"
                    : "border-[#FF9933] text-white hover:bg-[#138808]"
                }`
              }
            >
              Volunteer Registration
            </NavLink>

            {/* Search */}
            <button
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 ring-1 ring-white/20"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon className="h-6 w-6" />
            </button>

            {/* Donate */}
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `group relative inline-flex items-center gap-2 rounded-full border-[3px] px-2 py-1 text-lg font-extrabold tracking-wide shadow-sm transition ${
                  isActive
                    ? "bg-[#FF9933] border-[#FF9933] text-white"
                    : "border-[#FF5A1F] text-white hover:bg-white/10"
                }`
              }
            >
              <span>Donate Now</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF5A1F] text-white transition group-hover:translate-x-0.5">
                <ArrowRight className="h-6 w-4" />
              </span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-white/30 px-4 py-4 text-white/95 bg-black/25 backdrop-blur-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-lg font-semibold ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-lg font-semibold ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>

            {/* Services group */}
            <details className="group rounded-lg bg-white/10 p-2 ring-1 ring-white/20 open:bg:white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                <span>Services</span>
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1">
                {[
                  { label: "Service", to: "/service/service" },
                  { label: "Education", to: "/service/education" },
                  { label: "Health", to: "/service/health" },
                  { label: "Agriculture", to: "/service/agriculture" },
                  { label: "Employment", to: "/service/employment" },
                  {
                    label: "Geographical Issues",
                    to: "/service/geographical-issues",
                  },
                  {
                    label: "Social & Political Awareness",
                    to: "/service/social-&-political-awareness",
                  },
                  { label: "Miscellaneous", to: "/service/miscellaneous" },
                ].map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-base ${
                          isActive
                            ? "bg-[#FF9933] text-white"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>

            {/* Blog group */}
            <details className="group rounded-lg bg-white/10 p-2 ring-1 ring-white/20 open:bg-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                <span>Blog</span>
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1">
                {[
                  { label: "Blog", to: "/blog" },
                  { label: "Blog Details", to: "/blogdetails" },
                ].map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-base ${
                          isActive
                            ? "bg-[#FF9933] text-white"
                            : "text-white hover:bg:white/10"
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>

            {/* Volunteer Registration */}
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-lg font-semibold ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FF9933]"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              Volunteer Registration
            </NavLink>

            <NavLink
              to="/donations"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-lg font-semibold ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              Donations
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-lg font-semibold ${
                  isActive
                    ? "bg-[#FF9933] text-white"
                    : "text-white hover:text-[#FFE9CC]"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex items-center gap-4 pt-3">
              {/* Mobile search opens overlay + closes menu */}
              <button
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg:white/10"
                aria-label="Search"
                onClick={() => {
                  setSearchOpen(true);
                  setMobileOpen(false);
                }}
              >
                <SearchIcon className="h-5 w-5" />
              </button>

              <button
                className="relative grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg:white/10"
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#FF5A1F] text-[10px] font-black text-white ring-2 ring-black/40">
                  02
                </span>
              </button>

              <button
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg:white/10"
                aria-label="Account"
              >
                <UserIcon className="h-5 w-5" />
              </button>

              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `ml-auto inline-flex items-center gap-3 rounded-full border-2 px-4 py-2 font-extrabold ${
                    isActive
                      ? "bg-[#FF9933] border-[#FF9933] text-white"
                      : "border-[#FF5A1F] text-white hover:bg:white/10"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                Donate Now
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF5A1F]">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay portal */}
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSubmit={handleSearchSubmit}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes slideDown { 0% { transform: translateY(-24px); opacity:.45 } 100% { transform: translateY(0); opacity:.30 } }
        @keyframes slideUp   { 0% { transform: translateY(24px);  opacity:.45 } 100% { transform: translateY(0); opacity:.30 } }
        .animate-slideDown { animation: slideDown 7s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   7s ease-in-out infinite alternate; }
      `}</style>
    </header>
  );
}
