"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CtaBannerProps {
  onOpenCalculator: () => void;
}

export default function CtaBanner({ onOpenCalculator }: CtaBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const banner = bannerRef.current;
    if (!banner) return;

    gsap.fromTo(
      banner,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section style={{ padding: "40px 0 90px 0", background: "#ffffff" }}>
      <div className="container">
        <div
          ref={bannerRef}
          style={{
            background: "linear-gradient(135deg, #00A669 0%, #007246 100%)",
            borderRadius: "32px",
            padding: "50px 54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "36px",
            flexWrap: "wrap",
            boxShadow: "0 25px 55px -12px rgba(0, 166, 105, 0.45)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Glow / circles */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "25%",
              width: "220px",
              height: "220px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Left: 3D Wallet & Coins illustration + Content */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flex: "1 1 500px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.35)",
                flexShrink: 0,
              }}
            >
              <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
                <rect x="10" y="18" width="44" height="34" rx="8" fill="#10B981" stroke="#ffffff" strokeWidth="2.5" />
                <path d="M10 26h44" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
                <rect x="36" y="28" width="16" height="12" rx="4" fill="#047857" />
                <circle cx="44" cy="34" r="2.5" fill="#FDE047" />
                <circle cx="24" cy="16" r="8" fill="#FACC15" stroke="#ffffff" strokeWidth="2" />
                <circle cx="36" cy="12" r="7" fill="#EAB308" stroke="#ffffff" strokeWidth="2" />
                <text x="21" y="19" fill="#78350F" fontSize="9" fontWeight="bold">₹</text>
                <text x="33" y="15" fill="#78350F" fontSize="8" fontWeight="bold">₹</text>
                <path d="M48 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#FEF08A" />
              </svg>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "clamp(1.7rem, 2.6vw, 2.3rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: "10px",
                }}
              >
                Ready to achieve your financial goals?
              </h3>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "rgba(255, 255, 255, 0.92)",
                  lineHeight: 1.55,
                  maxWidth: "520px",
                  marginBottom: "14px",
                }}
              >
                Join over 50,000 satisfied borrowers across India. Check your instant eligibility now
                with zero bureau penalty.
              </p>

              <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", fontSize: "0.82rem", color: "#E6F8EE" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} color="#A7F3D0" /> Zero Collateral
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} color="#A7F3D0" /> 100% Digital
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} color="#A7F3D0" /> Instant Bank Transfer
                </span>
              </div>
            </div>
          </div>

          {/* Right: Pill Button */}
          <div style={{ flexShrink: 0 }}>
            <button
              onClick={onOpenCalculator}
              className="btn-pill-white"
              style={{
                padding: "16px 36px",
                fontSize: "1.02rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              Apply for Loan Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
