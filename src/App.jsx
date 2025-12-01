import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Account from "./pages/Account.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import RegisterForEducation from "./pages/RegisterForEducation.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import SelectVolunteerService from "./pages/SelectVolunteerService.jsx";
import Contact from "./pages/Contact.jsx";
import RegisterForHealth from "./pages/RegisterForHealth.jsx";
import RegisterForAgriculture from "./pages/RegisterForAgriculture.jsx";

import CustomCursor from "./CustomCursor.jsx";
import Whoarewe from "./pages/Whoarewe.jsx";
import RegisterForEmployment from "./pages/RegisterForEmployment.jsx";
import RegisterForGeographicalIssues from "./pages/RegisterForGeographicalIssues.jsx";
import RegisterForSocialPoliticalAwareness from "./pages/RegisterForSocialPoliticalAwareness.jsx";
import RegisterForMiscellaneous from "./pages/RegisterForMiscellaneous.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
      <div
        className="hidden md:block fixed inset-0 pointer-events-none"
        style={{ cursor: "none", zIndex: 9998 }}
      />

      <CustomCursor
        innerSize={12}
        outerSize={44}
        outerBorder={3}
        colorInner="#138808"
        colorOuter="#FF9933"
        trailEase={0.12}
        snapVelocity={0.12}
      />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<Service />} />

          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/whoarewe" element={<Whoarewe />} />
          {/* <Route path="/whoweare" element={<Whoweare />} /> */}
          <Route
            path="/register/education"
            element={<RegisterForEducation />}
          />
          <Route path="/register/health" element={<RegisterForHealth />} />
          <Route
            path="/register/agriculture"
            element={<RegisterForAgriculture />}
          />

          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/register" element={<SelectVolunteerService />} />
          <Route
            path="/register/employment"
            element={<RegisterForEmployment />}
          />
          <Route
            path="/register/geographical"
            element={<RegisterForGeographicalIssues />}
          />
          <Route
            path="/register/social-political"
            element={<RegisterForSocialPoliticalAwareness />}
          />
          <Route
            path="/register/miscellaneous"
            element={<RegisterForMiscellaneous />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
