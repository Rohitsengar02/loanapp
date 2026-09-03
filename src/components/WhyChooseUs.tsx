"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, UserCheck, Calendar, Percent, ShieldCheck, Headphones, ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll(".why-card");

    gsap.fromTo(
      cardElements,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const features = [
    {
      title: "Digital Process",
      desc: "Apply online in minutes with minimal documentation. No physical branch visits or long lines.",
      badge: "100% Paperless",
      icon: <FileText size={24} color="#2563EB" />,
      bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      borderColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      title: "Instant Approval",
      desc: "Get instantaneous algorithmic credit evaluation and direct disbursal into your bank account.",
      badge: "Under 15 Mins",
      icon: <UserCheck size={24} color="#D97706" />,
      bg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
      borderColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      title: "Flexible Tenure",
      desc: "Choose tailored tenures from 6 to 84 months that smoothly fit your monthly financial budget.",
      badge: "Up to 7 Years",
      icon: <Calendar size={24} color="#059669" />,
      bg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
      borderColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      title: "Lowest Interest",
      desc: "Competitive, transparent interest rates tailored to your credit profile with zero hidden fee surprises.",
      badge: "From 8.5% p.a.",
      icon: <Percent size={24} color="#E11D48" />,
      bg: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)",
      borderColor: "rgba(225, 29, 72, 0.2)",
    },
    {
      title: "Secure & Safe",
      desc: "Your financial and personal data is encrypted with 256-bit bank-grade TLS security protocols.",
      badge: "ISO 27001 Certified",
      icon: <ShieldCheck size={24} color="#4F46E5" />,
      bg: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
      borderColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      title: "24x7 Support",
      desc: "Our financial relationship specialists and AI assistants are always here to assist you anytime.",
      badge: "Dedicated Advisor",
      icon: <Headphones size={24} color="#7C3AED" />,
      bg: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)",
      borderColor: "rgba(139, 92, 246, 0.2)",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <span className="section-tag">WHY CHOOSE LOANHUB?</span>
          <h2 className="section-title">
            Loans made simple, fast and convenient
          </h2>
          <p className="section-subtitle">
            We are redefining lending with cutting-edge automated underwriting, total fee transparency,
            and unmatched customer satisfaction.
          </p>
        </div>

        {/* 6 Rich Feature Cards */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="why-card gradient-card"
              style={{
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "22px",
                border: `1.5px solid ${item.borderColor}`,
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* Top row with Icon and Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {item.icon}
                </div>

                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "#F1F5F9",
                    color: "#334155",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  color: "#475569",
                  marginBottom: "18px",
                  flex: 1,
                }}
              >
                {item.desc}
              </p>

              {/* Action indicator */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginTop: "auto",
                }}
              >
                Learn More <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
