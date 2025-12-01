import React from "react";
import ContactHero from "../components/contact/ContactHero";

import ContactInfoSection from "../components/contact/ContactInfoSection";
import CallToAction from "../components/contact/CallToAction";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfoSection />
      <CallToAction />
    </>
  );
}
