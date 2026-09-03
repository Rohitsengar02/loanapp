"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck, Clock, FileCheck, CheckCircle2, Sparkles } from "lucide-react";

interface EligibilityCheckerProps {
  onOpenCalculator: (loanType?: string) => void;
}

export default function EligibilityChecker({ onOpenCalculator }: EligibilityCheckerProps) {
  const [income, setIncome] = useState(55000);
  const containerRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGLineElement>(null);

  // Compute eligible loan amount based on income
  const eligibleAmount = Math.round((income * 12.5) / 10000) * 10000;
  const approxEmi = Math.round(eligibleAmount * 0.024);

  // Angle for needle: from -75deg (left) to 75deg (right)
  const minIncome = 15000;
  const maxIncome = 150000;
  const percentage = Math.min(Math.max((income - minIncome) / (maxIncome - minIncome), 0), 1);
  const needleAngle = -75 + percentage * 150;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (needleRef.current) {
      gsap.to(needleRef.current, {
        rotation: needleAngle,
        transformOrigin: "50% 100%",
        duration: 0.45,
        ease: "power2.out",
      });
    }
  }, [needleAngle]);

  return (
    <section
      id="eligibility"
      style={{
        padding: "80px 0 100px 0",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          ref={containerRef}
          style={{
            background: "linear-gradient(135deg, #F5FBF7 0%, #EAF6F0 100%)",
            border: "1.5px solid #CFEAD9",
            borderRadius: "32px",
            padding: "54px 44px",
            boxShadow: "0 20px 45px -10px rgba(0, 166, 105, 0.12)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "center",
            gap: "42px",
          }}
        >
          {/* Left Column: Copy, Tag & CTA */}
          <div>
            <span
              className="section-tag"
              style={{ background: "#DCFCE7", color: "#007A4D", borderColor: "rgba(0, 166, 105, 0.3)" }}
            >
              <Sparkles size={14} /> CHECK YOUR ELIGIBILITY
            </span>

            <h3
              style={{
                fontSize: "clamp(1.85rem, 2.8vw, 2.4rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.22,
                margin: "12px 0 16px 0",
                letterSpacing: "-0.025em",
              }}
            >
              Check how much loan you are eligible for
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#475569",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              Get a real-time assessment of your eligible loan quantum with zero impact
              on your credit bureau score. Instant digital processing with customized tenure.
            </p>

            <button
              onClick={() => onOpenCalculator()}
              className="btn-primary"
              style={{
                padding: "16px 36px",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              Check Eligibility Now <ArrowRight size={18} />
            </button>
          </div>

          {/* Center Column: Interactive Radial Gauge & Dynamic Calculation */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              padding: "28px 24px",
              border: "1px solid #D6EFE0",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Semicircular Gauge */}
            <div style={{ position: "relative", width: "260px", height: "140px" }}>
              <svg viewBox="0 0 200 110" width="260" height="140">
                <defs>
                  <linearGradient id="eligibilityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="25%" stopColor="#F97316" />
                    <stop offset="50%" stopColor="#FACC15" />
                    <stop offset="80%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#eligibilityGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                <circle cx="100" cy="100" r="10" fill="#0F172A" />
                <circle cx="100" cy="100" r="4" fill="#ffffff" />

                <line
                  ref={needleRef}
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="32"
                  stroke="#0F172A"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Income Slider */}
            <div style={{ width: "100%", maxWidth: "260px", marginTop: "8px", marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "#64748B",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                <span>Monthly Income</span>
                <span style={{ fontWeight: 800, color: "var(--primary)" }}>
                  ₹{income.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min={minIncome}
                max={maxIncome}
                step={5000}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </div>

            <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>
              You may be eligible for up to
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "6px 0 8px 0",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.5rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-0.03em",
                }}
              >
                ₹{eligibleAmount.toLocaleString("en-IN")}
              </span>
              <span
                style={{
                  background: "#DCFCE7",
                  color: "#15803D",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: "99px",
                  border: "1px solid rgba(21, 128, 61, 0.2)",
                }}
              >
                Pre-approved
              </span>
            </div>

            <div style={{ fontSize: "0.78rem", color: "#64748B", fontWeight: 500 }}>
              Estimated Monthly EMI: <strong style={{ color: "#0F172A" }}>₹{approxEmi.toLocaleString("en-IN")}/mo</strong>
            </div>
          </div>

          {/* Right Column: 3 Key Assurance Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {/* Point 1 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(0, 166, 105, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={22} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0F172A" }}>
                  No impact on Credit Score
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "3px", lineHeight: 1.5 }}>
                  Soft inquiry algorithm ensures your CIBIL score is 100% safeguarded.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(0, 166, 105, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FileCheck size={22} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0F172A" }}>
                  100% Online Process
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "3px", lineHeight: 1.5 }}>
                  No paperwork, no branch visits, and zero physical documentation needed.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(0, 166, 105, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clock size={22} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0F172A" }}>
                  Instant Results
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "3px", lineHeight: 1.5 }}>
                  Receive your pre-approved sanction letter and loan limit in under 60 seconds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
