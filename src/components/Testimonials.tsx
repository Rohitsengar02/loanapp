"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, CheckCircle2, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const items = cards.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      items,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const reviews = [
    {
      text: "LoanHub helped me get a personal loan in just 20 minutes when my family faced a sudden medical emergency. The digital KYC process was super fast and transparent with zero hidden charges!",
      name: "Rohit Sharma",
      role: "Personal Loan • ₹5,00,000",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      rating: 5,
    },
    {
      text: "I got my home loan approved in record time with interest rates better than traditional public banks. The relationship manager guided me at every step. Highly recommended for anyone buying a home!",
      name: "Priya Mehta",
      role: "Home Loan • ₹45,00,000",
      location: "Bengaluru",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      rating: 5,
    },
    {
      text: "Securing capital for my retail store used to be a painful month-long struggle. With LoanHub, my MSME business loan was sanctioned and credited to my account in less than 24 hours!",
      name: "Amit Verma",
      role: "Business Loan • ₹18,00,000",
      location: "Delhi NCR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "90px 0 100px 0",
        background: "linear-gradient(180deg, #FAFCFA 0%, #F1F7F3 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <span className="section-tag">WHAT OUR CUSTOMERS SAY</span>
          <h2 className="section-title">
            Real stories from real people
          </h2>
          <p className="section-subtitle">
            Read authentic reviews from borrowers across India who achieved their dreams with LoanHub.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px",
            marginBottom: "40px",
          }}
        >
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="testimonial-card gradient-card"
              style={{
                padding: "36px 30px",
                borderRadius: "24px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: "1.5px solid #E6ECE8",
              }}
            >
              {/* Star rating & quote icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <div
                  style={{
                    color: "var(--primary)",
                    fontSize: "2.4rem",
                    lineHeight: 1,
                    fontFamily: "serif",
                    fontWeight: 900,
                  }}
                >
                  “
                </div>
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "#334155",
                  marginBottom: "28px",
                  flex: 1,
                }}
              >
                {item.text}
              </p>

              {/* Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "16px",
                  borderTop: "1px solid #EEF2EE",
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2.5px solid #E2E8F0",
                  }}
                />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <h4
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 800,
                        color: "#0F172A",
                      }}
                    >
                      {item.name}
                    </h4>
                    <CheckCircle2 size={15} color="var(--primary)" />
                  </div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#64748B",
                      marginTop: "1px",
                      fontWeight: 600,
                    }}
                  >
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === activeIndex ? "28px" : "9px",
                height: "9px",
                borderRadius: "99px",
                background: i === activeIndex ? "var(--primary)" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
