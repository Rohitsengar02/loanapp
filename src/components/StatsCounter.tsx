"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Banknote, Percent, Star, TrendingUp } from "lucide-react";

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const statElements = cards.querySelectorAll(".stat-card");

    gsap.fromTo(
      statElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const stats = [
    {
      icon: <Users size={24} color="#059669" />,
      bg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
      value: "50,000+",
      label: "Happy Borrowers",
      sub: "Across 140+ Indian Cities",
    },
    {
      icon: <Banknote size={24} color="#059669" />,
      bg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
      value: "₹750+ Cr",
      label: "Loans Disbursed",
      sub: "Disbursed in FY 2023-24",
    },
    {
      icon: <Percent size={24} color="#2563EB" />,
      bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      value: "98.4%",
      label: "Approval Rate",
      sub: "Algorithmic Instant Decision",
    },
    {
      icon: <Star size={24} color="#D97706" fill="#D97706" />,
      bg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
      value: "4.8/5",
      label: "Customer Rating",
      sub: "Over 12,000+ Verified Reviews",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "90px 0",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <span className="section-tag">TRUSTED BY THOUSANDS</span>
          <h2 className="section-title">
            Numbers that build trust
          </h2>
          <p className="section-subtitle">
            Empowering individuals and business owners with fast, ethical, and transparent financial access.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="stat-card gradient-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "30px 26px",
                borderRadius: "24px",
                border: "1.5px solid #E6ECE8",
              }}
            >
              {/* Icon & Mini indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
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
                <TrendingUp size={18} color="var(--primary)" />
              </div>

              {/* Stat Value */}
              <div
                style={{
                  fontSize: "clamp(1.9rem, 2.8vw, 2.3rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {item.value}
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "#334155",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
