"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface LoanTypesProps {
  onOpenCalculator: (loanType?: string) => void;
}

export default function LoanTypes({ onOpenCalculator }: LoanTypesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const loanCards = cards.querySelectorAll(".loan-card");

    gsap.fromTo(
      loanCards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const loans = [
    {
      title: "Personal Loan",
      desc: "Instant cash for dream vacations, weddings, medical emergencies, or debt consolidation.",
      limit: "Up to ₹25,00,000",
      rate: "From 10.49% p.a.",
      features: ["Tenure up to 60 Months", "Zero Collateral Required", "Instant Disbursal"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#ECFDF5" />
          <path d="M22 30c0-6 4.5-11 10-11s10 5 10 11c0 8-10 18-10 18s-10-10-10-18z" fill="#10B981" />
          <circle cx="32" cy="30" r="4" fill="#ffffff" />
          <path d="M27 22h10" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          <text x="28" y="34" fill="#ffffff" fontSize="11" fontWeight="bold">₹</text>
        </svg>
      ),
      tag: "Most Popular",
    },
    {
      title: "Home Loan",
      desc: "Turn your dream home into reality with low EMIs, quick approvals, and tax-saving advantages.",
      limit: "Up to ₹50,00,000",
      rate: "From 8.50% p.a.",
      features: ["Tenure up to 30 Years", "PMAY Subsidy Eligible", "Low Processing Fee"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#FFF7ED" />
          <path d="M32 16L18 28h5v18h18V28h5L32 16z" fill="#F97316" />
          <rect x="29" y="34" width="6" height="12" fill="#FED7AA" />
          <rect x="24" y="29" width="4" height="4" fill="#ffffff" />
          <rect x="36" y="29" width="4" height="4" fill="#ffffff" />
          <circle cx="44" cy="18" r="4" fill="#FDE047" />
        </svg>
      ),
      tag: "Lowest Interest",
    },
    {
      title: "Business Loan",
      desc: "Empower your enterprise with working capital, equipment financing, or retail expansion.",
      limit: "Up to ₹25,00,000",
      rate: "From 11.99% p.a.",
      features: ["Customized Repayment", "Overdraft Facility", "Tax Deductible Interest"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#EFF6FF" />
          <rect x="18" y="24" width="28" height="20" rx="3" fill="#3B82F6" />
          <path d="M26 24v-4a2 2 0 012-2h8a2 2 0 012 2v4" stroke="#1D4ED8" strokeWidth="2.5" />
          <rect x="24" y="28" width="16" height="2" fill="#93C5FD" />
          <circle cx="32" cy="34" r="2" fill="#FDE047" />
        </svg>
      ),
      tag: "Instant MSME",
    },
    {
      title: "Education Loan",
      desc: "Fund higher studies in India and top universities abroad covering 100% tuition and living fees.",
      limit: "Up to ₹10,00,000",
      rate: "From 9.25% p.a.",
      features: ["Moratorium Period", "Tax Benefit Sec 80E", "Co-applicant Support"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#F5F3FF" />
          <polygon points="32,20 48,27 32,34 16,27" fill="#8B5CF6" />
          <polygon points="22,30 22,38 32,43 42,38 42,30 32,35" fill="#6D28D9" />
          <line x1="45" y1="28" x2="45" y2="40" stroke="#FDE047" strokeWidth="2" />
        </svg>
      ),
      tag: "Study Abroad",
    },
    {
      title: "Gold Loan",
      desc: "Leverage your gold assets into instant liquidity at the highest per-gram value and minimum documentation.",
      limit: "Up to ₹5,00,000",
      rate: "From 8.85% p.a.",
      features: ["Doorstep Valuation", "Safe Bank Vault Storage", "Same-Day Disbursal"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#FEFCE8" />
          <rect x="20" y="34" width="24" height="10" rx="2" fill="#EAB308" />
          <rect x="24" y="25" width="16" height="8" rx="1.5" fill="#FACC15" />
          <circle cx="32" cy="20" r="5" fill="#CA8A04" />
          <path d="M22 34l3-6h14l3 6" stroke="#FEF08A" strokeWidth="1" />
        </svg>
      ),
      tag: "Highest Value",
    },
    {
      title: "Car Loan",
      desc: "Drive home your dream car or EV with up to 90% on-road funding and special dealer discounts.",
      limit: "Up to ₹20,00,000",
      rate: "From 8.75% p.a.",
      features: ["Up to 90% On-Road Price", "New & Used Vehicles", "Pre-Approved Offers"],
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#F0F9FF" />
          <rect x="18" y="30" width="28" height="11" rx="4" fill="#0EA5E9" />
          <path d="M22 30l3-7h14l3 7" fill="#38BDF8" />
          <circle cx="24" cy="41" r="3.5" fill="#0F172A" />
          <circle cx="24" cy="41" r="1.5" fill="#CBD5E1" />
          <circle cx="40" cy="41" r="3.5" fill="#0F172A" />
          <circle cx="40" cy="41" r="1.5" fill="#CBD5E1" />
        </svg>
      ),
      tag: "EV Discount",
    },
  ];

  return (
    <section
      id="loan-types"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #FAFCFA 0%, #F3F9F5 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <span className="section-tag">LOANS FOR EVERY NEED</span>
          <h2 className="section-title">
            Choose from a wide range of loans
          </h2>
          <p className="section-subtitle">
            Tailored financial products designed to match every stage of your life.
            Enjoy market-leading interest rates and flexible tenures.
          </p>
        </div>

        {/* 6 Loan Cards */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "26px",
            marginBottom: "45px",
          }}
        >
          {loans.map((item, idx) => (
            <div
              key={idx}
              className="loan-card gradient-card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                position: "relative",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Card Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#008753",
                  background: "#DCFCE7",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  border: "1px solid rgba(0, 166, 105, 0.25)",
                }}
              >
                {item.tag}
              </div>

              {/* Icon Container */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                }}
              >
                {item.iconSvg}
              </div>

              {/* Title & Rate */}
              <div style={{ marginBottom: "10px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h3>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--primary)" }}>
                  {item.rate}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.86rem",
                  lineHeight: 1.55,
                  color: "#475569",
                  marginBottom: "20px",
                }}
              >
                {item.desc}
              </p>

              {/* Key Features List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginBottom: "24px",
                  paddingTop: "14px",
                  borderTop: "1px solid #EEF2EE",
                }}
              >
                {item.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.8rem",
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    <Check size={14} color="var(--primary)" strokeWidth={3} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Footer row: Limit & Calculate Button */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid #EEF2EE",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 500 }}>
                    Maximum Limit
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "#0F172A",
                    }}
                  >
                    {item.limit}
                  </div>
                </div>

                <button
                  onClick={() => onOpenCalculator(item.title)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 18px",
                    borderRadius: "999px",
                    background: "var(--primary-light)",
                    border: "1px solid rgba(0, 166, 105, 0.3)",
                    color: "#007A4D",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--primary-light)";
                    e.currentTarget.style.color = "#007A4D";
                  }}
                >
                  Calculate EMI <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Loans CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onOpenCalculator()}
            className="btn-secondary"
            style={{
              padding: "14px 34px",
              fontSize: "0.98rem",
              fontWeight: 700,
            }}
          >
            Explore All 12+ Loan Types <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
