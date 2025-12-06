import React, { useEffect, useMemo, useState } from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      variantClass: "",
      img: "/images/services-2-1.jpg",
      icon: "🛡️",
      title: "Water & Health Food",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 2,
      variantClass: "services-two__single-2",
      img: "/images/services-2-2.jpg",
      icon: "🎗️",
      title: "Cancer Help Fund",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 3,
      variantClass: "services-two__single-3",
      img: "/images/services-2-3.jpg",
      icon: "📚",
      title: "Child Education Help",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 4,
      variantClass: "services-two__single-4",
      img: "/images/services-2-4.jpg",
      icon: "⚕️",
      title: "Medicine For Africans",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 5,
      variantClass: "services-two__single-5",
      img: "/images/services-2-5.jpg",
      icon: "🤝",
      title: "Crisis Helping Fund",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 6,
      variantClass: "services-two__single-6",
      img: "/images/services-2-6.jpg",
      icon: "💵",
      title: "Fund Poor Raised",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 7,
      variantClass: "services-two__single-4",
      img: "/images/services-2-4.jpg",
      icon: "⚕️",
      title: "Medicine For Africans",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
    {
      id: 8,
      variantClass: "services-two__single-2",
      img: "/images/services-2-2.jpg",
      icon: "🎗️",
      title: "Cancer Help Fund",
      text: "With schools closed in Nsw and Victoria, and childcare.",
      link: "/donation-details",
    },
  ];

  // perSlide: 4 desktop, 2 tablet, 1 phone
  const [perSlide, setPerSlide] = useState(4);

  useEffect(() => {
    const updatePerSlide = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w <= 640) setPerSlide(1); // phone
      else if (w <= 1023) setPerSlide(2); // tablet
      else setPerSlide(4); // desktop
    };

    updatePerSlide();
    window.addEventListener("resize", updatePerSlide);
    return () => window.removeEventListener("resize", updatePerSlide);
  }, []);

  // GROUP INTO SLIDES USING perSlide
  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < services.length; i += perSlide) {
      result.push(services.slice(i, i + perSlide));
    }
    return result;
  }, [services, perSlide]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <>
      <style>{`
        /*==============================================
            Services Two   
        ===============================================*/
        .services-two {
          position: relative;
          display: block;
          padding: 120px 0 0;
          z-index: 1;
         
          
        }

        .services-two__shape-1 {
          position: absolute;
          top: 100px;
          left: 50px;
          opacity: .10;
          z-index: -1;
        }

        .services-two__shape-1 img {
          width: auto;
          animation: treeMove 4s linear infinite;
        }

        @keyframes treeMove {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        /* ---- SLIDER LAYOUT ---- */
        .services-two__carousel-wrapper {
          position: relative;
          overflow: hidden;
        }

        .services-two__carousel-track {
          display: flex;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .services-two__slide {
          min-width: 100%;
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: nowrap; /* IMPORTANT: never wrap, JS handles perSlide */
        }

        /* ---- CARD BASE ---- */
        .services-two__single {
          position: relative;
          display: flex;
          flex-direction: column;
          flex: 1 1 0;      /* share row width */
          max-width: 320px; /* keep nice width on desktop */
          height: 100%;
        }

        .services-two__img-box {
          position: relative;
          display: block;
          flex-shrink: 0;
        }

        .services-two__img {
          position: relative;
          display: block;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='250' viewBox='0 0 300 250'%3E%3Cimage xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD6CAYAAAAbbXrzAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3AtYlFX+B/AZGBjAQVBAQbwgN7l6QRTxv5GKqMuaCBRaoqLxV/OOsZKtJlsS3lKEyEy7+JT9E8RQ17ygkIAbtaglRAimLI7AJiCoXIbb/Dusxx0nQI6+vKe27zyPDwhnzu99P++Z73vO+84glUgkagkeEHhMAalUKtHT05Oo1WpJa2urpK2trf3/5HvyID8n//CAgBACUgSWEIy/3z5IYOnr67cDNDU1SQwMDCQqlUpCfk6Cinyl4fX7VcKeCyWAwBJKEv08CClNChpc4IGAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRpHOBKRSMgT/81Cr1cCCQKcCCCwMDq4CCCyu/L+54gis39wh++/aYATWf9fx7Om9QWD1tDD671IAgYUBwiKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwj8zgV0dHQkarW6XUEqlUra2toeEtHV1W3/GWmj+T1tT77S5z8OJQLrcdTwHAj8TgVIYNGgIt+3trZKXF1ds/z8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' x='0' y='0' width='300' height='250'/%3E%3C/svg%3E") no-repeat center center;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='250' viewBox='0 0 300 250'%3E%3Cimage xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD6CAYAAAAbbXrzAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3AtYlFX+B/AZGBjAQVBAQbwgN7l6QRTxv5GKqMuaCBRaoqLxV/OOsZKtJlsS3lKEyEy7+JT9E8RQ17ygkIAbtaglRAimLI7AJiCoXIbb/Dusxx0nQI6+vKe27zyPDwhnzu99P++Z73vO+84glUgkagkeEHhMAalUKtHT05Oo1WpJa2urpK2trf3/5HvyID8n//CAgBACUgSWEIy/3z5IYOnr67cDNDU1SQwMDCQqlUpCfk6Cinyl4fX7VcKeCyWAwBJKEv08CClNChpc4IGAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRhEIQEAIAQSWEIroAwIQEEUAgSUKM4pAAAJCCCCwhFBEHxCAgCgCCCxRmFEEAhAQQgCBJYQi+oAABEQRQGCJwowiEICAEAIILCEU0QcEICCKAAJLFGYUgQAEhBBAYAmhiD4gAAFRBBBYojCjCAQgIIQAAksIRfQBAQiIIoDAEoUZRSAAASEEEFhCKKIPCEBAFAEElijMKAIBCAghgMASQhF9QAACogggsERhRpHOBKRSMgT/81Cr1cCCQKcCCCwMDq4CCCyu/L+54gis39wh++/aYATWf9fx7Om9QWD1tDD671IAgYUBwiKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwhAgKsAAosrP4pDAAIsAggsFi20hQAEuAogsLjyozgEIMAigMBi0UJbCECAqwACiys/ikMAAiwCCCwWLbSFAAS4CiCwuPKjOAQgwCKAwGLRQlsIQICrAAKLKz+KQwACLAIILBYttIUABLgKILC48qM4BCDAIoDAYtFCWwj8zgV0dHQkarW6XUEqlUra2toeEtHV1W3/GWmj+T1tT77S5z8OJQLrcdTwHAj8TgVIYNGgIt+3trZKXF1ds/z8/DJTU1OnKJVKD6lUqktCiQSXZqCR53X16E6QIbB+pwMPuw2BxxEgoUODijzfxcUla9myZXH37t1Lq6qqejY+Pv6DxsbGX8yuNGdYndVFYD3OEcFzIACBbgnY29vnrFq1aoejo+MXU6dOrcvNzTU/cOBAxO7du0MbGxsHSaVSqWYIdTTD6k5IaW6MqDMs7Q1m3dhuKaIRBCAgmACdUdnZ2WVPmTIl29jYuKq2ttbCzMysytXVNVNHRyc/JCTkHi24Z88ek8OHD//1woULS2pqauR0WUhmZeShfc1LIpHctrOzq4iIiHg9JiYmqry8fKSenl5725aWll9c7xI1sARTREcQgIAoAiQ8SHAsWbLkFWdn593jx49vKCwsNNTX128MCQlp6mgj4uLi/GJiYpJv375tQkOKTE7kcnm5i4tLiYuLS56lpWXZ7du3+4waNerCiRMnCo4fP37hnXfemfHmm29GV1dXjyLBplKphA8sksDkH9kgjbsGdRKJxEgikdRIJBJjQ0NDdUNDg66JiUmRjY1NRWNjo9mVK1cGSiSSPnSH6d0H2o8mBGZiooxNFIHAQwJ0RURef3Pnzt308ccfb+gOUUZGhmVoaGheeXm5Oc0HEnoWFhZFHh4e4X5+fj8MHjy47ubNm/KRI0femzhxYgvpNzc3V++tt97666FDh15Uq9X9SF1yUV+QJSEJGLlc3j7Fa2pqepCE5ubmPxoZGaWVlpbmODk5rfT09Nz1ySef3OzVq9fAoKCgSaNHj347JSVFam1tPSczM3PClClT0o8cOTK9pqbGnuwcSfTm5uaHNlImk7XXwKPnBDSX6/R2NDnGdEpPf0a+0oFET1Q9tVWa20Rq0u3RfCH1VG30+++3LVBrW1vbtL17986bMGHCv8ilqa58cnNzTYKDg4tKS0v7kXb3JzLNixcvjnN1dd2wcuVKVWfPX7Ro0eD8/Py/XLhwIVClUllot3vsJSENLDKQyF0BqVRaGRgYeMba2vro1atXs7y8vKpNTEwWWFtbnwoJCblKCq9fv95506ZNP0RHR+vr6+svLywsNPbx8Uk4ePBgXFpa2lzSJ3lB0LUr+V5jhzta/2JcCShABhY5OZCv5MxG/kml0ipHR8fq2tpaRUVFhYGOjk4fzSDRPgMKuDkPXiykz/vj4q61tfWdsrIyI7VaTZYb/74w8ht6UDs6tqnfr3EVQScQZBtlMtndFStWvKZQKOKjo6MffvOVlv+JEydswsLCLlVXV5uSE15ra2vdU0899eXs2bNX37p169qjnu/v7z/k59XYC1999VVISUnJSNI9GZekr8cOLDq4yWxo4MCBl6dNmxZvYmJyxtHRsWzx4sXNSUlJugqFopdKpdIJDAwkS8MHDxJYurq6g+7evavaunWrcuvWrQvXrl37tkQiMZRIJM19+/atd3d3/yY7O3uERCLpR5eaHVyw+w0N1V/3pnYwa6l+4YUXjg8bNuzAgQMHqlUqVT8zM7OXL168OJGcWDRnXz21Z5rBSL63srLKb2hoWDN//vw+ycnJ+5RKpXFP1e7JfjVDi4TBrzGs6P6ToCDhSl7ngYGB8e7u7hGPCpyfZ1Dr4uPjX5NIJAbkOru3t3f62LFjX921a9c/uuv60ksv9Rk9erTDvn371ufk5PxJR0dHp33GR9542lkn9E1idDpOzwZkKUhmVeTh4eFxYunSpTFKpfIf0dHRzOs2tVotTU5OHpCSkvJqZmZmsL+/f2xqaur3fn5+NcePH/+0vr7ewcDAQFJfX/+rOrDadzw174IIOQA1l12aNbq7LNJ8vvYSTvv/MplMZW1tnTd58uTzffr0+btcLj8fExNzk46PDRs2RL7xxhuvyWQyY+03BXZ3ILK209jP5ujo6Mjo6Oh40oebm9tX+fn5XmTFwdon2ndfgLzWyXgml2S2bdv2fGRk5MFHLQl9fX3HeHl5Od+6dcvD1tb2cllZ2aWEhIRL3a/6n5YxMTELd+zYEVVVVWUnk8l0uwwscj2JpCu5Wk8Gjr6+fvvUjPzfxsamMCQkJGHYsGEX5s2b9/XjbIzmc3bs2GH9wQcfOKxYseI8maGR361fv37Fli1b4sk2ELBfywxLO6zItmp+ZEHI7aTLZFKDvnuY3pggX7sTjvTY0YGnuRzRvG4ok8kap02bFjtr1qy40NDQO5rHh5xYEhIShq9cuTJdJpP1Jc/Tvtb4pGNA+/nkREWOO6nl4OBw7vXXX58dEhJSQdp5e3sf+Prrr59Tq9V6Wu/1uT1gwIC6iooKw9bWVjMyhuk1t86sOgp/MtabmpoayCxBLpdLVSoVGZN6CoWiffx3te/kueRBr7saGRlJyL7U1ta2L7MdHBwuBAcHH5NKpa1HjhwJLCgoGE5WPWQ76EmJHtvuHF86/ugEg2wbHTea26m9n9onLG1/uooi22xubi7JzMzs7eTkdLe7x/nIkSPGAQEB3W7fUb9xcXH99+/fv76goOB/m5ub5Z0GFtlYMrAp4v3rGe2hVVdXJxkzZsyXu3bt8ie3Obu7A6ztzpw54zh58uQrdOAKGQSs26LZXvtAaw+yJ+lb+7l0+UWPA7m+176W17g725kLPYZ0+8gLyNDQsP0FTGfImvXc3d3TIyMjI+bPn3+5o31ITExUpKenxx4+fDjUwMDAlGxLT4UW2WYy1si4IzX279/vN2/evLP07B4WFvbnjz76aCvZTnt7+0IXF5d8c3Pzcjc3t+8OHz78o4WFxf+kpaW9VFdXZ01v5LC8+Inp1KlT/6ZUKg8VFhbeHT9+/ODKysr5165dG9HW1ibtar/JrIQeH3qyJ2O4rq6u1dHRkYTVFrlcnkqWVosWLfpTTk7OusuXL/8P2Rd6U6O7JyU6Fuk4IceEBhj9neYKSTO0HjVLp/tALOzt7SVr1qyZvnTp0uNCju/u9BUVFRWwZ8+exJqaGusuZ1jaFwY1O5fL5ap58+at37t37/buFH2cNtnZ2cZJSUkvxcfHx/6aLrB2dGbSPLiPs6+dPaezWvRs2tU1EPLc+1P6NkNDQ+WgQYPulpSUOPXq1avWxMTkVu/eveuamprUOjo6aisrq+szZszYs3jx4vTOpvxklnXs2DGXGTNmnDIyMrImL8aeuuhOxt79mXXjrFmz9n722WcRZEZCnTIyMgbu2bPnDVtb2/yrV6/mDB8+vNTR0fH2c889Vy+VStvINRClUvny2bNnVzc2Nvbq7mz0fv8tTk5O3y9btixqxYoVp8jPoqOjZWlpaW+fP39+Mb1+19kxo6Hj4+NzcurUqZkfffRR0JUrVzwVCkXN3LlzVzs7O39G75SRfhsbGyfn5OQsI3fN29raFPTkRE9EXQUtWfGQBw0quVz+k5WVVWNpaakxvUFCT3C0n86+djDDUuvq6lb179+/uaamxtDQ0LBk4sSJMa6urocfdR1LyNdAbGxsn9LS0hdaW1sHS8lgpQeA7ogmgpeX13cBAQHv5eXleRQXFzubmJjUNDQ0GNbW1vYhZ4vVq1ev8/HxuSXkBmr2lZGRIdu9e/fWpKSk5WRKTgYDOfM2NDQ8WIbRMwg9Q5GDR/aBngXpACIHTnOwaZ6dyPf0xdfZu3Jpe/rV2Nj4po2NTVlzc3Pv69evm6lUKnO6NNQ8u3U1OyO/01xiag9OHR2dumeeeebkz28DKc7Lyxvz008/DS4vLze9c+eOmVQqbb9L9qiZw/Dhw3/08/NblpWVdaegoMDazMysfujQoXfMzMwayfEnfQwfPrx6/fr1JY+6PpGdnT2AfNC1ra3NjgRWTz+WLFkSPWnSpHdCQkJ+McZ27txpFRERUd7ZNnzzzTeWc+bM+by4uHjco5Y/Wn2op02btmThwoUfab458uf3FgWfOXMmvqKiYkBX+32/VnNkZOSK7du371m+fPlzpaWlc0aMGJHt7e39nr+//y+W24mJiWNPnz790vHjx4NaW1uNNWdajwoshULRMGDAgIvOzs7/HDRo0Mn09PT6GzdubL19+7ZtByH0YAZGLzE84hiSWev8Z555xvbYsWOh48aNyx84cOCK6Ojof0/lRHqQYHdxcVG3Bxa9ZUjPavSaERmQs2bNIm87WHngwIE+GRkZgywtLeuqq6v1b926ZWRpadny1FNPlYSEhNT25HYnJSVZnD59eum+ffs2GhgYtH8+iS5RadDQFz2ZUZAL9JqfKic/I/ty/4zVYGpqqpLJZOrKykq5jo6OEe3jtddeW3/+/Hnfc+fODW9razPT1dWt7Nu3b7NcLm9RKpVG5GekLxKIpL6bm1uOvb396zdu3Lg7efJk47Nnz76em5vrJpVKDehyWvvjBdqhR5Yr92/9thPq6enVTpgw4byZmVmFQqGou3Hjxj+8vb0zNm7ceHP16tWOubm5/YYMGWLc0tLyfFJSUgh5itaFZzJ4a1tbW3X69+9fZmlp+U9nZ+eru3btihTiGF28eHFAQEDA4YqKCi864Kmf5ouMBjFpo3nCIN/fv03e7kjHHt02GvgtLS3NM2bM+HTRokUR06dPv/242z5q1KhDly5dCqYnIbKtmktqepLS19evt7W1vTF48ODikSNH5tjZ2ZHZZqVm3ZycnN6bN29+LzU1dZbmz+lKhPZLT4xubm5LL1++vHvbtm29DA0NzW1tbSv8/f07Tfk9e/Z4nDhxYsXRo0eD29rajOmYpl81Z0qaJzkHB4erUVFRz1ZWVlZFRUUpjY2NzchHZu7cuWPg6elZRMaSrq5uy7Vr1xzJG7bb2tpMu/iozEPUDg4OZ4qLi/3UarVOWFjYKIVCoU5MTCQX0Lt8L9bjHq9HPY8sCcl7KuidFjLlbn/zk4WFxd2nn346ec6cOQmBgYHfPqqjnv49WR6+//77UR9++OFfSC0y0Ok0WHvw0Ok/aUP+NTQ0tFhYWNSMGTMm29PT8/TBgwfLGhoa2uzs7J4pLi4OUCqV/YKDg99LSUlZHB4e7pycnBxfW1s72dnZ+avGxsY4mUxWPX369H5ZWVmrcnNz3e+//UK9bNmyWDs7u01r1qxpv44XGBjoff369edKSkqerampGdTRBV/t2ZSurm6dXC5vNTU1rR83btw5lUqVSt7S4e7ufrtfv35tfn5+HZ4MEhIShu7fv3+StbX1H8vLy62MjY1vkz/rYWxsfPjy5cs3yIViJyenSg8Pj5/IYNuwYcN1IY7Rzp07TU+dOhV/6tSpufQaGTkO9BoKDbGOPrmgeWKk16bobXMaJPcvVLeGhITs8fX13bJ48eLSJ9nuhISEP27btm1raWmpq0wmk9KbSLRPMzOzf/3hD3/4e1lZ2dHevXv/OGHCBOWwYcNKQ0JCHn6L9f0nzJ8/f+/+/fvDNW+ykH3QnLmTmb2Tk9NlDw+P1Z9++mkGy/a///77I9LS0sJTU1PnNjY2tn+0hY53zeW35jUuFxeXKwUFBU607ebNm0309fVn1tTU1BcVFV11c3Or1tPTa7106dJQExOTPx49ejSooqJimPbKihwDMmbpe/CGDBly+c0331wxZ86cTJZ96Mm20qioqDN5eXmFQ4YMUeXn5+dVV1cb9evXr9d33313bfv27ZkLFy7sseUe646R0Pr4449XnTt37vnCwkIHU1PTRvJCHTx48NV79+6Z1NbWmpWUlNho9+vr63uwrKzs4Pz58y+88sorD14AkZGRQ1NTU92mT5/e38fH5/OgoKAq8tzQ0NDITz75ZGtsbOyidevW7aP9BQcHe/Xu3dvd2NjYxcLC4gd3d/eTAQEBSs1l1IwZM/pLpdKIjIyMF+rr662kUqmsow9xamxjm0wmi3NwcDj78ssvfx8eHv5PFpe4uLhhP/zwg4GVldVdXV1d+YYNG35geT5rW19fXzOJRLIvPT19Jrn7RZbm5KF94V/zBUxnIHTWSV7g5MbNzJkzkwoKCsYUFRUNJifK3r17N5uYmPwrICDg3XHjxu0PDQ1Vsm5fR+3nzp37yhdffPGXqqoqBfk9uUjv6+ubZmdnl5+VlVVGbuysWrWquDu1wsPDY/ft2/dnHR2d9hM7PQHR9yqRILGxsbn286ojwtLSMo2ezLrTN22TkpIypKSkZGJmZqZfRkbGtDt37vQlvyOXQugfx6PmpN6IESO+PHTo0DQHB4dHrtGPHDkyICMjY/7u3bsjmpqaLLRPoPRSysiRIzPCw8N3LF++/G8s297TbaWFhYXDTp8+XeLp6anTk3f8hNoRMlsICgp6qqmp6fm8vLwzAwcOvPP000+XKpVKRWlpaR9PT0+HrKys0Pr6emNTU9NbDg4O511dXQ9ERkYWdncbNm3aZJ2fn78kKirqrVGjRj30plfSB7n43NW1nrVr1w48ePDgVqVSGWJkZKRLlqj3n/fgbEnv9o0dOzZ79OjR4bt3777S3e3j2W716tWmt27d2nzgwIEwQ0NDeUNDQ5OPj89FKysrctIrqqystCwqKvLIzs4ebW9vr2xqaqpTKpUj6ScYyN0y8pzQ0NCd3t7eccnJyW5jx461b2xs7J2cnEyuCVYmJCSke3p6Pvz5rCfYafLO64iIiMPl5eVDZ86c+X8KheKzBQsWfPU4NdauXbtg586dCc3Nzb3o8p4uc01NTcvJPgcFBX3y6quvtr9f7Eke5FJITU2NT2Fh4biTJ0/6FhQUjKInCXpdS6FQlC5YsOCdhISELd2t9e677zokJibG5+XlTevgOQ3kRsGqVavW+Pv7F3S3T7HaketBXb74xNoQ1jpbtmwZSNbrHT1v9uzZoyoqKnoNGzas2tfX92pnnyrvquaHH35oEBYW1kTuOLFuG2k/fvz4lYWFhbH19fXkYyTt02ztJayJiUnFwoULI7y9vZM7W4I8Tu2efA75BENeXt64N954I00ikbSGhobG1tTUnJw9e/ZV8t4t8vu0tDR3qVQ65dtvv80NCgoa8Morr+zW09NTkKUSuQbo6Oh4dPv27S+Qv6HUk9uq2feGDRuWp6Sk1EdHRydp/jkU1vpZWVm2Gzdu3Jyenv4c2X+FQkFuXrSMHj06U09P79O7d++WhoWFFQt9XXfJkiWTvv76642XLl3yIdvcq1evskmTJn1lbm5+fsCAAYdjYmKYZubx8fHPvv32268XFRU5GxoatvXp0+enIUOGXPHy8kppbm4+lZiYWMRqI0b732xgiYHzJDWOHj06dOPGjXsvXbrkK5PJGlpaWprMzc0rBg0adFOtVrcaGBi0qFSqEy+++OKny5cvb1+K/lYeSUlJ+jk5OUubm5tVQUFBe+mn7TW3n9zdJT8/duyYeXBw8JdNTU0OZFUjkUju7dixY96aNWs+F3N/09LSTDq7Hsi6HevWrZsbGxu718XFJbdv374fFBUVVS9dujQ/Ojq6/TOzPfWIi4sLTUxMXGZoaNji7Oz8ubu7e7JzU+HaAAAApUlEQVS7u3vN47w5kxyfbdu2jbe2th61d+/e2qFDh1b5+/tfS0xM/L6ntl+IfhFYQih20seqVatm7Nq1a69EIrm5dOnStyZNmnTBxsamXE9Pr4X8uZ1x48Y9dHu7BzeFa9fvvvvuiGPHjnldvHjxNXd397dOnz69k+sGPWFx8mdQzp07N3TEiBFVkydPFvVkk5GRYU42f+LEiQ/dwXzCXfrNPP3/Ae67RZshhRftAAAAAElFTkSuQmCC' x='0' y='0' width='300' height='250'/%3E%3C/svg%3E") no-repeat center center;
          -webkit-mask-size: cover;
          mask-size: cover;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          overflow: hidden;
        }

        .services-two__img img {
          width: 100%;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          transition: all 500ms ease;
          display: block;
        }

        .services-two__single:hover .services-two__img img {
          transform: scaleX(1.05);
        }

        .services-two__content {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          box-shadow: -10px 0px 60px 0px rgba(0, 0, 0, 0.07);
          padding: 35px 25px 21px;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
        }

        /* ---- ICON BADGE ---- */
        .services-two__icon-inner {
          position: absolute;
          top: -45px;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 65px;
          background-color: rgba(255, 153, 51, .40);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .services-two__single-2 .services-two__icon-inner {
          background-color: rgba(59, 130, 246, .40);
        }

        .services-two__single-3 .services-two__icon-inner {
          background-color: rgba(16, 185, 129, .40);
        }

        .services-two__single-4 .services-two__icon-inner {
          background-color: rgba(119, 38, 235, .40);
        }

        .services-two__single-5 .services-two__icon-inner {
          background-color: rgba(72, 177, 188, .40);
        }

        .services-two__single-6 .services-two__icon-inner {
          background-color: rgba(225, 60, 207, .40);
        }

        .services-two__icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 55px;
          margin: 0 auto;
          background-color: #FF9933;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          z-index: 1;
        }

        .services-two__single-2 .services-two__icon { background-color: #3B82F6; }
        .services-two__single-3 .services-two__icon { background-color: #10B981; }
        .services-two__single-4 .services-two__icon { background-color: #7726eb; }
        .services-two__single-5 .services-two__icon { background-color: #48B1BC; }
        .services-two__single-6 .services-two__icon { background-color: #e13ccf; }

        .services-two__icon::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          background-color: #ffffff;
          transform: scale(0);
          transform-origin: center;
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.62, 0.21, 0.45, 1.52);
          z-index: -1;
        }

        .services-two__single:hover .services-two__icon::before {
          transform: scaleX(1);
        }

        .services-two__icon span {
          position: relative;
          display: inline-block;
          font-size: 24px;
          color: #ffffff;
          transition: all 500ms linear;
          transition-delay: 0.1s;
        }

        .services-two__single:hover .services-two__icon span {
          color: #FF9933;
          animation-name: wobble-horizontal-hover;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: 1;
        }

        .services-two__single-2:hover .services-two__icon span { color: #3B82F6; }
        .services-two__single-3:hover .services-two__icon span { color: #10B981; }
        .services-two__single-4:hover .services-two__icon span { color: #7726eb; }
        .services-two__single-5:hover .services-two__icon span { color: #48B1BC; }
        .services-two__single-6:hover .services-two__icon span { color: #e13ccf; }

        @keyframes wobble-horizontal-hover {
          0% { transform: translateX(0); }
          15% { transform: translateX(-3px); }
          30% { transform: translateX(3px); }
          45% { transform: translateX(-3px); }
          60% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        /* ---- TEXT & READ MORE ---- */
        .services-two__title {
         
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          margin-bottom: 6px;
        }

        .services-two__title a {
          color: #020617;
        }

        .services-two__title a:hover {
          color: #FF9933;
        }

        .services-two__single-2 .services-two__title a:hover { color: #3B82F6; }
        .services-two__single-3 .services-two__title a:hover { color: #10B981; }
        .services-two__single-4 .services-two__title a:hover { color: #7726eb; }
        .services-two__single-5 .services-two__title a:hover { color: #48B1BC; }
        .services-two__single-6 .services-two__title a:hover { color: #e13ccf; }

        .services-two__text {
          margin: 8px 0 16px;
          font-size: 14px;
          line-height: 1.7;
          color: #6b7280;
        }

        .services-two__read-more {
          margin-top: auto;
        }

        .services-two__read-more a {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
          font-size: 13px;
          color: #6b7280;
        }

        .services-two__read-more a:hover {
          color: #FF9933;
        }

        .services-two__single-2 .services-two__read-more a:hover { color: #3B82F6; }
        .services-two__single-3 .services-two__read-more a:hover { color: #10B981; }
        .services-two__single-4 .services-two__read-more a:hover { color: #7726eb; }
        .services-two__single-5 .services-two__read-more a:hover { color: #48B1BC; }
        .services-two__single-6 .services-two__read-more a:hover { color: #e13ccf; }

        .services-two__read-more a span {
          color: #FF9933;
          font-weight: 900;
        }

        .services-two__single-2 .services-two__read-more a span { color: #3B82F6; }
        .services-two__single-3 .services-two__read-more a span { color: #10B981; }
        .services-two__single-4 .services-two__read-more a span { color: #7726eb; }
        .services-two__single-5 .services-two__read-more a span { color: #48B1BC; }
        .services-two__single-6 .services-two__read-more a span { color: #e13ccf; }

        /* ---- DOTS ---- */
        .services-two__dots {
          margin: 40px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .services-two__dot {
          border: none;
          padding: 0;
          background: transparent;
          cursor: pointer;
        }

        .services-two__dot-inner {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background-color: rgba(255, 153, 51, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .services-two__dot-center {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background-color: #FF9933;
          opacity: 0.6;
          transform: scale(0.9);
          transition: all 200ms ease;
        }

        .services-two__dot--active .services-two__dot-center {
          opacity: 1;
          transform: scale(1.1);
        }

        /* ========= RESPONSIVE (no flex-wrap hacks) ========= */

        /* tablet: cards a bit wider, but still 2 per slide because perSlide=2 */
        @media (max-width: 1023px) {
          .services-two__single {
            max-width: 360px;
          }
          .services-two__content {
            padding: 28px 22px 18px;
          }
        }

        /* phone: one card per slide (perSlide=1), full width */
        @media (max-width: 640px) {
          .services-two__single {
            max-width: 100%;
          }
          .services-two__content {
            padding: 24px 20px 18px;
          }
        }
      `}</style>

      <section className="services-two">
        {/* Floating shape */}
        <div className="services-two__shape-1">
          <img src="/images/services-two-shape-1.png" alt="" />
        </div>

        <div className="container mx-auto px-4">
          {/* Section title */}
          <div className="mb-10 text-center">
            <p className="label-osc mx-auto inline-block font-caveat text-[#f27b21] text-sm tracking-wide">
              <span>OUR SERVICE</span>
            </p>
            <h2
              className="section-title__title  font-heading  leading-snug "
              style={{ fontWeight: 800 }}
            >
              <span className="block font-heading">
                We Do it for all charity
              </span>
              <span className="block text-[#FF9933] font-heading">
                Service Now
              </span>
            </h2>
          </div>

          {/* Slider */}
          <div className="services-two__carousel-wrapper">
            <div
              className="services-two__carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((group, slideIndex) => (
                <div className="services-two__slide" key={slideIndex}>
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className={`services-two__single ${item.variantClass}`}
                    >
                      <div className="services-two__img-box">
                        <div className="services-two__img">
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>

                      <div className="services-two__content">
                        <div className="services-two__icon-inner">
                          <div className="services-two__icon">
                            <span>{item.icon}</span>
                          </div>
                        </div>

                        <h3 className="services-two__title">
                          <a href={item.link}>{item.title}</a>
                        </h3>
                        <p className="services-two__text">{item.text}</p>

                        <div className="services-two__read-more">
                          <a href={item.link}>
                            Read More
                            <span>›</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="services-two__dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`services-two__dot ${
                    index === currentSlide ? "services-two__dot--active" : ""
                  }`}
                >
                  <span className="services-two__dot-inner">
                    <span className="services-two__dot-center" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
